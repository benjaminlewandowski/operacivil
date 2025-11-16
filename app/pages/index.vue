<script setup>
	import { quotes } from "../assets/data/quotes";
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
</script>

<template>
	<div
		class="prose p-4 md:col-span-2"
	>
		<blockquote v-if="randomQuote">
			{{ randomQuote.quote }}<br>
			<cite>– {{ randomQuote.author }}</cite>
		</blockquote>
	</div>
</template>
