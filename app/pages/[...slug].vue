<script setup>
const route = useRoute();

const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({ fatal: true, statusCode: 404, statusMessage: "Page not found" });
}
</script>

<template>
	<ContentRenderer
		v-if="page"
		:prose=true
		:value="page"
		class="prose p-4 md:col-span-2 max-w-4xl"
	/>
</template>
