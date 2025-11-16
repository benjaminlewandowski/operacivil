<script setup>
import { mainNav } from '../assets/data/navigation'

const _sortedNavLinks = computed(() => {
  return [...mainNav].sort((a, b) => a.order - b.order);
});
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in _sortedNavLinks" :key="link.to">
        <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
