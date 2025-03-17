<template>
  <div>
    <h1>Categoriën</h1>
    <div v-if="categories && categories.length">
        <ul>
            <li v-for="category in categories" :key="category.id"><NuxtLink :to="'/categories/'+category.id">{{ category.name }}</NuxtLink></li>
        </ul>
    </div>
    <div v-else>
        Geen categoriën gevonden
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '~/domain/category';

const {data: categories} = await useCustomFetch<Category[]>("/api/categories");
</script>
