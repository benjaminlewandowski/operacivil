<script setup>
import { getRandomQuote } from "../assets/data/getRandomQuote";

const randomQuote = ref(getRandomQuote());
</script>

<template>
	<div class="h-auto md:pt-4 pr-4 w-full md:col-span-2">
		<div class="prose p-4 bg-white/50 backdrop-blur-xs ml-4 md:ml-0">
			<blockquote class="border-slate-500">
				<span>
					{{ randomQuote.quote }}
				</span>
				<br />
				<cite>
					– {{ randomQuote.author }}
				</cite>
			</blockquote>
		</div>
		<div class="prose p-4 bg-white/50 backdrop-blur-xs ml-4 md:ml-0 mt-2">
				<p class="border-red-700 border-l-4 p-4 text-red-700  bg-red-50 font-bold">Permanently Closed.</p>
		</div>
	</div>
</template>
