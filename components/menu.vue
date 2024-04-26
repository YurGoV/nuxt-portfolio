<template>
  <nav class="font-mono">
    <ul class="flex space-x-4">
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
    </ul>
  </nav>
</template>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200;
}
</style>
