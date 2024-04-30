<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        :class="{
          'ml-4': level,
          'text-green-600 dark:text-green-400': activeId === link.id,
        }"
      >
        {{ link.text }}
      </NuxtLink>
      <TocLinks
        :links="link.children"
        :level="level + 1"
        :active-id="activeId"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

interface Link {
  id: string;
  text: string;
  children: Link[];
}

const route = useRoute()
defineProps({
  links: {
    type: Array as () => Link[],
    default: () => []
  },
  level: {
    type: Number,
    default: 0
  },
  activeId: {
    type: String,
    default: null
  }
})
</script>
