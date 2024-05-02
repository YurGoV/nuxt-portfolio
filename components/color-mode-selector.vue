<template>
  <div class="flex space-x-2 items-center">
    <div v-if="showNextModelLabel" class="text-gray-500 text-xs">
      Change to {{ nextMode }}
    </div>
    <button
      class="px-2 py-1 text-gray-500 text-4xl md:text-base"
      @click="toggleMode"
      @mouseenter="showNextModelLabel = true"
      @mouseleave="showNextModelLabel = false"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>

<script setup lang="ts">
const showNextModelLabel = ref(false)
const colorMode = useColorMode()
colorMode.preference = 'system'
const modes = ['system', 'light', 'dark']
const nextModeIcons = {
  system: '🌓',
  light: '🌕',
  dark: '🌑'
}

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference)
  let nextModeIndex: number

  if (currentModeIndex + 1 === modes.length) {
    nextModeIndex = 0
  } else {
    nextModeIndex = currentModeIndex + 1
  }

  return modes[nextModeIndex]
})

const nextModeIcon = computed(() => {
  return nextModeIcons[nextMode.value]
})

const toggleMode = () => (colorMode.preference = nextMode.value)
</script>
