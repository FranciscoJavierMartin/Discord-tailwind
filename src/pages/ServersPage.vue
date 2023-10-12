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
      <RouterLink
        to="#"
        class="flex items-center text-gray-300 px-2 mx-2 py-1 rounded hover:text-gray-100 group hover:bg-gray-550/[0.16]"
      >
        <BookIcon class="w-5 h-5 mr-1.5 text-gray-400" />
        welcome
        <AddPersonIcon
          class="w-4 h-4 ml-auto text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100"
        />
      </RouterLink>
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
import AddPersonIcon from '@/components/icons/AddPersonIcon.vue';
import BookIcon from '@/components/icons/BookIcon.vue';
import CheckIcon from '@/components/icons/CheckIcon.vue';
import ChevronIcon from '@/components/icons/ChevronIcon.vue';
import VerifiedIcon from '@/components/icons/VerifiedIcon.vue';
</script>
