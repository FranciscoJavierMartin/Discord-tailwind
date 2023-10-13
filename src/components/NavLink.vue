<template>
  <div class="relative block group">
    <div class="absolute flex items-center h-full -left-3">
      <div
        class="w-1 bg-white rounded-r origin-left duration-200 transition-all"
        :class="{
          'h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100':
            !isCurrentServer,
          'h-10': isCurrentServer,
        }"
      />
    </div>
    <div class="group-active:translate-y-px">
      <RouterLink
        :to="to"
        class="flex items-center justify-center w-12 h-12 overflow-hidden transition-all duration-200 group-hover:bg-brand group-hover:rounded-2xl group-hover:text-white"
        :class="{
          'bg-brand rounded-2xl text-white': isCurrentServer,
          'bg-gray-700 rounded-3xl text-gray-100': !isCurrentServer,
        }"
      >
        <slot />
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{ to: string }>();
const route = useRoute();

const isCurrentServer = computed<boolean>(() => {
  return props.to.split('/')[2] === route.params.sid;
});
</script>
