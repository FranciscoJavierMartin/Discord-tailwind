<template>
  <div class="flex w-60 flex-col bg-gray-800">
    <button
      class="font-title flex h-12 items-center px-4 font-semibold text-white shadow-sm text-[15px] transition hover:bg-gray-550/[0.16]"
    >
      <div class="relative w-4 h-4 mr-1">
        <VerifiedIcon class="absolute text-gray-550" />
        <CheckIcon class="absolute" />
      </div>
      Tailwind CSS
      <ChevronIcon class="w-[18px] h-[18px] ml-auto opacity-80" />
    </button>
    <div class="flex-1 overflow-y-scroll font-medium text-gray-300 mt-[17px]">
      <div
        class="flex-1 space-y-[21px] overflow-y-scroll font-medium pt-3 text-gray-300"
      >
        <div v-for="category of data['1'].categories" :key="category.id">
          <button
            v-if="category.label"
            class="flex items-center px-0.5 text-xs font-title uppercase tracking-wide hover:text-gray-100"
            @click="toggleCategory(category.id)"
          >
            <ArrowIcon
              class="w-3 h-3 mr-0.5 transition duration-200"
              :class="{ ' -rotate-90': closedCategories.includes(category.id) }"
            />
            {{ category.label }}
          </button>
          <div class="space-y-0.5 mt-[5px]">
            <ChannelLink
              v-for="channel of category.channels"
              :key="channel.id"
              v-bind="channel"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-1 flex-col bg-gray-700">
    <div class="flex h-12 items-center px-3 shadow-sm">General</div>
    <div class="flex-1 space-y-4 overflow-y-scroll p-3">
      <p v-for="(_, index) in Array(40)" :key="index">
        Message {{ index }}. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Sequi a voluptatem dolores aliquam sed, unde atque beatae adipisci
        consequuntur quod nihil, quidem nemo laborum voluptatibus maxime error
        ipsam incidunt id?
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ChannelLink from '@/components/ChannelLink.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import CheckIcon from '@/components/icons/CheckIcon.vue';
import ChevronIcon from '@/components/icons/ChevronIcon.vue';
import VerifiedIcon from '@/components/icons/VerifiedIcon.vue';
import data from '@/data.json';

const closedCategories = ref<any[]>([]);

function toggleCategory(categoryId: number): void {
  closedCategories.value = closedCategories.value.includes(categoryId)
    ? closedCategories.value.filter((id) => id !== categoryId)
    : [...closedCategories.value, categoryId];
}
</script>
