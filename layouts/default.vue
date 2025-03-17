<template>
  <div>
    <NavBar>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/categories">Categoriën</NuxtLink></li>
      </ul>
    </NavBar>
    <slot />
  </div>
</template>
