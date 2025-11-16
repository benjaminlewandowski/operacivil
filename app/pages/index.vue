<script setup>
	import { quotes } from "../assets/data/quotes";
</script>

<template>
	<div class="h-auto md:pt-4 pr-4 w-full  md:col-span-2">
	<div class="prose p-4 mr-4 bg-white/50 backdrop-blur-xs w-full ml-4 md:ml-0">
			<blockquote class="border-slate-500">{{ quotes[Math.floor(Math.random() * quotes.length)].quote }}<br><cite>– {{ quotes[Math.floor(Math.random() * quotes.length)].author }}</cite></blockquote>
		</div>
	</div>
</template>
