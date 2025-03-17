<template>
    <div v-if="category">
        <h1>{{ category.name }}</h1>
    </div>
</template>
<script setup lang="ts">
import type { Category } from '~/domain/category';
const route = useRoute();
const {data: category} = await useCustomFetch<Category>(`/api/categories/${route.params.id}`, {key: "cc-category-detail"});
useHead({
    title: category.value?.name
})
</script>