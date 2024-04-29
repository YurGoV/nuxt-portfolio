<template>
  <div class="not-prose">
    <section v-if="pending">
      Loading...
    </section>
    <section v-else-if="error">
      Something went wrong... Try again!
    </section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="repo in repos"
          :key="repo.id"
          class="border border-gray-200 ruonded-sm p-4 hover:bg-gray-100 font-mono"
        >
          <div class="flex items-center justify-between text-sm">
            <a :href="repo.html_url" target="blank">
              <div class="font-semibold">{{ repo.name }}</div>
            </a>
            <a :href="repo.homepage" target="blank">livepage</a>
          </div>
          <a :href="repo.html_url" target="blank">
            <p class="text-sm">
              {{ repo.description }}
            </p>
            <p class="text-sm">
              {{ repo.updated_at }}
            </p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
const { error, pending, data } = await useFetch(
  'https://api.github.com/users/yurgov/repos'
)
// @ts-ignore
const repos = computed(() =>
  data.value
    .filter(repo => repo.description)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
)

</script>
