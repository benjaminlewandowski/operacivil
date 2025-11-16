<script setup>
import { mainNav } from "../assets/data/navigation";
import { quotes } from "../assets/data/quotes";

const route = useRoute();

const _sortedNavLinks = computed(() => {
  return [...mainNav]
		.sort((a, b) => a.order - b.order)
		.filter(link => !(link.to === "/" && route.path === "/"));
});
</script>

<template>
	<div class="h-full">
  <nav class="px-4 pt-4 md:sticky md:top-0 md:max-h-screen md:overflow-auto">
		<div class="bg-white/50 backdrop-blur-xs w-full mb-4 p-4">
			<NuxtLink to="/" class="">
				<img src="/images/logo.png" alt="Opera Civil Logo" class="w-full max-w-[416px] " />
			</NuxtLink>
		</div>
    <ul class="flex gap-2 flex-wrap md:flex-col mb-4">
      <li v-for="link in _sortedNavLinks" :key="link.to">
        <NuxtLink :to="link.to" class="py-2 px-3 bg-white border-slate-300 border hover:bg-slate-200 block transform-border duration-500"
				:class="route.path === link.to ? 'border-l-16' : null">{{ link.name }}</NuxtLink>
      </li>
    </ul>
		<div class="prose p-4 mr-4 bg-white/50 backdrop-blur-xs w-full" v-if="route.path !== '/'">
			<blockquote class="border-slate-500">{{ quotes[Math.floor(Math.random() * quotes.length)].quote }}<br><cite>– {{ quotes[Math.floor(Math.random() * quotes.length)].author }}</cite></blockquote>
		</div>
  </nav>
</div>
</template>
