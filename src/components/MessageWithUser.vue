<template>
  <div
    class="leading-[22px] mt-[17px] flex py-0.5 pl-4 pr-16 hover:bg-gray-950/[0.07]"
  >
    <img
      :src="message.avatarUrl"
      :alt="`${message.user} avatar`"
      class="mr-4 mt-0.5 h-10 w-10 rounded-full"
    />
    <div>
      <p class="flex items-baseline">
        <span class="mr-2 font-medium text-green-400">{{ message.user }}</span>
        <span class="text-xs font-medium text-gray-400">
          {{ message.date }}
        </span>
      </p>
      <p class="text-gray-100">
        {{ message.text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Message } from '@/types/data';

defineProps<{ message: Message }>();
</script>
