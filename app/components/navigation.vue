<script setup>
import { mainNav } from "../assets/data/navigation";
const route = useRoute();

const _sortedNavLinks = computed(() => {
  return [...mainNav]
		.sort((a, b) => a.order - b.order)
		.filter(link => !(link.to === "/" && route.path === "/"));
});
</script>

<template>
  <nav class="p-4">
    <ul class="flex gap-2 flex-wrap md:flex-col md:sticky md:top-4">
      <li v-for="link in _sortedNavLinks" :key="link.to">
        <NuxtLink :to="link.to" class="py-2 px-3 bg-white border-slate-300 border hover:bg-slate-200 block">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
