<template>
  <div class="flex h-screen text-gray-100">
    <div class="p-3 space-y-2 overflow-y-scroll bg-gray-900">
      <NavLink to="/">
        <DiscordIcon class="h-5 w-7" />
      </NavLink>
      <hr class="border-t-white/[.60] border-t-2 rounded mx-2" />
      <NavLink
        v-for="server of servers"
        :key="server.id"
        :to="`/servers/${server.id}`"
      >
        <img :src="`/servers/${server.img}`" />
      </NavLink>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import DiscordIcon from '@/components/icons/DiscordIcon.vue';
import NavLink from '@/components/NavLink.vue';

const servers = [
  { id: '1', img: 'tailwind.png' },
  { id: '2', img: 'next.png' },
  { id: '3', img: 'mirage.png' },
];
</script>
