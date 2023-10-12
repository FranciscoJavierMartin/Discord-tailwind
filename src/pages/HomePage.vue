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
    <div class="flex w-60 flex-col bg-gray-800">
      <div
        class="font-title flex h-12 items-center px-3 font-semibold text-white shadow-md"
      >
        Tailwind CSS
      </div>
      <div class="flex-1 space-y-2 overflow-y-scroll p-3 text-gray-300">
        <p class="text-white">Channel (unread)</p>
        <p class="text-white">Channel (unread)</p>
        <p v-for="(_, index) in Array(40)" :key="index">Channel {{ index }}</p>
      </div>
    </div>
    <div class="flex flex-1 flex-col bg-gray-700">
      <div class="flex h-12 items-center px-3 shadow-md">General</div>
      <div class="flex-1 space-y-4 overflow-y-scroll p-3">
        <p v-for="(_, index) in Array(40)" :key="index">
          Message {{ index }}. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sequi a voluptatem dolores aliquam sed, unde atque
          beatae adipisci consequuntur quod nihil, quidem nemo laborum
          voluptatibus maxime error ipsam incidunt id?
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import DiscordIcon from '@/components/DiscordIcon.vue';

const route = useRoute();
</script>
