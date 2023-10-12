<template>
  <div class="flex h-screen text-gray-100">
    <div class="p-3 space-y-2 overflow-y-scroll bg-gray-900">
      <RouterLink
        to="/"
        class="flex items-center justify-center w-12 h-12 transition-all duration-200 hover:bg-brand rounded-3xl bg-gray-700 text-gray-100 hover:rounded-2xl hover:text-white"
        active-class="bg-brand rounded-2xl text-white"
      >
        <DiscordIcon class="h-5 w-7" />
      </RouterLink>
      <RouterLink
        :to="`/servers/1`"
        class="flex items-center justify-center w-12 h-12 transition-all duration-200 hover:bg-brand rounded-3xl bg-gray-700 text-gray-100 hover:rounded-2xl hover:text-white"
        active-class="bg-brand rounded-2xl text-white"
      >
        S1
      </RouterLink>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import DiscordIcon from '@/components/DiscordIcon.vue';
</script>
