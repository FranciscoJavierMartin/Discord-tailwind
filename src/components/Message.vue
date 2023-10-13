<template>
  <div class="leading-[22px] px-4 py-0.5 hover:bg-gray-950/[0.07]">
    <p class="pl-14 text-gray-100">
      {{ message.text }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { Message } from '@/types/data';

defineProps<{ message: Message }>();
</script>
