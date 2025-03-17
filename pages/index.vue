<template>
    <div>Dit is de hoofdpagina.</div>
    <div v-if="result">{{ result.result }}</div>
</template>

<script setup lang="ts">
import type { GenericResult } from '~/domain/generic-result';

const {data: result} = await useCustomFetch<GenericResult>('/api/non-seo-critical', {server: false});
console.log(result);
</script>