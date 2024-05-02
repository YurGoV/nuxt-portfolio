<template>
  <article
    class="prose max-w-none dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <ContentDoc>
      <template #not-found>
        <h1>Document not found (404)</h1>
        <p>This blog post could not be found</p>
      </template>
      <template #default="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="{ 'col-span-6 md:col-span-4': doc.toc, 'col-span-6': !doc.toc }">
            <ContentRenderer :value="doc" />
          </div>
          <div v-if="doc.toc" class="hidden md:col-span-2 md:block not-prose">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">
                Table of content
              </div>
              <nav>
                <TocLinks :links="doc.body.toc.links" :active-id="activeId" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup lang="ts">
// @ts-ignore
const activeId = ref(null)
// @ts-ignore
onMounted(() => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
      }
    }
  }
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5
  })
  const elements = document.querySelectorAll('h2, h3')
  for (const element of elements) {
    observer.observe(element)
  }

  // @ts-ignore
  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element)
    }
  })
})
</script>
<style scoped></style>
