<template>
  <div class="flex h-screen text-gray-100">
    <div class="p-3 space-y-2 overflow-y-scroll bg-gray-900">
      <NavLink to="/">
        <DiscordIcon class="h-5 w-7" />
      </NavLink>
      <hr class="border-t-white/[.60] border-t-2 rounded mx-2" />
      <NavLink :to="`/servers/1`">
        <img src="/servers/tailwind.png" />
      </NavLink>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import DiscordIcon from '@/components/DiscordIcon.vue';
import NavLink from '@/components/NavLink.vue';
</script>
