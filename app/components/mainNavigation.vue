<script setup>
import { getRandomQuote } from "../assets/data/getRandomQuote";
import { mainNav } from "../assets/data/navigation";

const route = useRoute();

const _sortedNavLinks = computed(() => {
	return [...mainNav]
		.sort((a, b) => a.order - b.order)
		.filter((link) => !(link.to === "/" && route.path === "/"));
});

const randomQuote = ref(getRandomQuote());

watch(
	() => route.path,
	() => {
		randomQuote.value = getRandomQuote();
	},
);
</script>

<template>
	<div class="h-full mb-0">
		<nav class="px-4 pt-4 md:sticky md:top-0 md:max-h-screen md:overflow-auto">
			<div class="bg-white/50 backdrop-blur-xs w-full mb-4 p-4">
				<NuxtLink class="" to="/">
					<img
						alt="Opera Civil Logo"
						class="w-full max-w-104"
						src="/images/logo.png"
					/>
				</NuxtLink>
			</div>
			<ul
				class="flex gap-2 flex-wrap md:flex-col md:mb-4"
				:class="route.path !== '/' ? 'mb-4' : ''"
			>
				<li v-for="link in _sortedNavLinks" :key="link.to">
					<NuxtLink
						class="py-2 px-3 bg-white border-slate-300 border hover:bg-slate-200 block transform-border duration-500"
						:class="route.path === link.to ? 'border-l-16' : null"
						:to="link.to"
					>
						{{ link.name }}
					</NuxtLink>
				</li>
			</ul>
			<div
				class="prose p-4 bg-white/50 backdrop-blur-xs w-full"
				v-if="route.path !== '/'"
			>
				<blockquote class="border-slate-500">
					<span>
						{{ randomQuote.quote }}
					</span>
					<br />
					<cite>
						–
						{{ randomQuote.author }}
					</cite>
				</blockquote>
			</div>

			<div class="prose p-4 bg-white/50 backdrop-blur-xs ml-4 md:ml-0 mt-2"
				v-if="route.path !== '/'">
					<p class="border-red-700 border-l-4 p-4 text-red-700 bg-red-50 font-bold">Permanently Closed.</p>
			</div>
		</nav>
	</div>
</template>
