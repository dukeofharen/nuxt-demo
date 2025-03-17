<template>
  <div>
    <h1>{{ config.header }}</h1>
    <NavBar>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/categories">Categoriën</NuxtLink></li>
      </ul>
    </NavBar>
    <slot />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
</script>
