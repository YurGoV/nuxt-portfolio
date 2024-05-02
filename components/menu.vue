<template>
  <nav class="font-mono">
    <ul class="flex flex-col md:flex-row md:space-x-4">
      <li>
        <NuxtLink class="link" to="/">
          Main
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/about">
          About
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/projects">
          Projects
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/blog">
          Blog
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800 text-2xl md:text-base;
}
</style>
