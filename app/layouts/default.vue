<script setup>
let randomImage = Math.floor(Math.random() * 7) + 1;

const loaded = ref(false);

onMounted(() => {
	loaded.value = true;
});

useRouter().afterEach(() => {
	randomImage = Math.floor(Math.random() * 7) + 1;
	loaded.value = false;

	setTimeout(() => {
		loaded.value = true;
	}, 100);
});
</script>

<template>
	<div class="grid grid-rows-[auto,1fr] md:grid-cols-3 md:grid-rows-1 gap-4 max-w-7xl relative z-10">
		<Navigation />
		<slot />
	</div>

	<picture class="fixed inset-0">
		<img :src="`/images/bg${randomImage}.jpg`" :class="[loaded ? 'opacity-10' : 'opacity-0']"
			class="transition-opacity duration-2000 w-full h-screen object-cover z-0" />
	</picture>
</template>

<style>
picture {

	background:
		radial-gradient(hsl(0 0% 0% / 20%) 0.5px, transparent 0.5px) 0 0 /3px 3px,
		radial-gradient(hsl(0 0% 0% / 20%) 0.5px, transparent 0.5px) 1px 1px /3px 3px,
		radial-gradient(hsl(0 0% 0% / 20%) 0.5px, transparent 0.5px) 2px 2px /3px 3px
}
</style>
