<template>
  <div class="flex text-white h-screen">
    <div class="bg-gray-800 p-3 space-y-2 overflow-y-scroll">
      <div
        v-for="(_, index) in Array(40)"
        :key="index"
        class="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center"
      >
        {{ index }}
      </div>
    </div>
    <div class="bg-gray-700 w-60 flex flex-col">
      <div class="p-3 h-12 shadow-md flex items-center flex-shrink-0">
        Tailwind CSS
      </div>
      <div class="p-3 flex-1 overflow-y-scroll space-y-2">
        <p v-for="(_, index) in Array(40)" :key="index">Channel {{ index }}</p>
      </div>
    </div>
    <div class="bg-gray-600 flex-1 flex flex-col">
      <div class="p-3 h-12 flex items-center shadow-md">General</div>
      <div class="p-3 flex-1 space-y-4 overflow-y-scroll">
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
