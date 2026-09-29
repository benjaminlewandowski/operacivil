<script lang="ts" setup>
import type { NuxtError } from "#app";

const _props = defineProps({
	error: Object as () => NuxtError,
});
</script>

<template>

<NuxtLayout>
	<div class="h-auto md:pt-4 pr-4 w-full md:col-span-2">
		<div class="prose p-4 bg-white/50 backdrop-blur-xs ml-4 md:ml-0">
			<div class="border-slate-500">
				<h1>Error: {{ error.statusCode }}</h1>
				<NuxtLink to="/">Go back home</NuxtLink>
			</div>
		</div>
	</div>
	<NuxtRouteAnnouncer />
</NuxtLayout>
</template>
