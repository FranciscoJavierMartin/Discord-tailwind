<template>
  <div class="flex h-screen text-gray-100">
    <div class="p-3 space-y-2 overflow-y-scroll bg-gray-900">
      <div class="relative block group">
        <div class="absolute flex items-center h-full -left-2">
          <div
            class="w-1 bg-white rounded-r scale-0 origin-left duration-200 transition-all group-hover:scale-100"
            :class="{
              'h-5 scale-0 group-hover:opacity-100': route.path !== '/',
              'h-10': route.path === '/',
            }"
          />
        </div>
        <div class="group-active:translate-y-px">
          <RouterLink
            to="/"
            class="flex items-center justify-center w-12 h-12 transition-all duration-200 group-hover:bg-brand rounded-3xl bg-gray-700 text-gray-100 group-hover:rounded-2xl group-hover:text-white"
            active-class="bg-brand rounded-2xl text-white"
          >
            <DiscordIcon class="h-5 w-7" />
          </RouterLink>
        </div>
      </div>
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
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
