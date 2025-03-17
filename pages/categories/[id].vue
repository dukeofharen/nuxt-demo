<template>
    <div v-if="category">
        <h1>{{ category.name }}</h1>
    </div>
</template>
<script setup lang="ts">
import type { Category } from '~/domain/category';
const {id} = useRoute().params
const {data: category} = await useCustomFetch<Category>(`/api/categories/${id}`, {key: "cc-category-detail"});
useHead({
    title: category.value?.name
})
</script>