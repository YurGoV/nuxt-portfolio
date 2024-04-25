<template>
  <div>inside a blog page with blog id: {{ route.params.id }}</div>
</template>

<script setup lang="ts">
const route = useRoute()
// console.log(route.params)
</script>

<style scoped></style>
