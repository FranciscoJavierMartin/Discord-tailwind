<template>
  <div class="flex w-60 flex-col bg-gray-800">
    <div
      class="font-title flex h-12 items-center px-3 font-semibold text-white shadow-sm"
    >
      Server {{ $route.params.sid }}
    </div>
    <div class="flex-1 space-y-2 overflow-y-scroll p-3 text-gray-300">
      <p class="text-white">Channel (unread)</p>
      <p class="text-white">Channel (unread)</p>
      <p v-for="(_, index) in Array(40)" :key="index">Channel {{ index }}</p>
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
