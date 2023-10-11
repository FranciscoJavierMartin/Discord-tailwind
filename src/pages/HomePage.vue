<template>
  <div
    class="bg-gray-700 text-white min-h-screen flex items-center justify-center"
  >
    <div class="max-w-lg">
      <div class="flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
        <img
          class="w-10 h-10 rounded-full mr-4"
          src="/adamwathan.jpeg"
          alt=""
        />
        <div>
          <p class="flex items-baseline">
            <span class="text-green-500 mr-2 text-sm font-medium"
              >adamwathan</span
            >
            <span class="text-xs text-gray-500">15/01/2021</span>
          </p>
          <p class="text-gray-300">
            You should never use something like leading relaxed with a big font
            size, it goes againts all typography best practices. Line height
            should decrease as font size gets bigger
          </p>
        </div>
      </div>
      <div class="mt-1 hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
        <p class="text-gray-300 pl-14">
          You can override it in your config if you want but ultimately we chose
          the defaults they did because the let you get results closet to what a
          professional designer would do more easily
        </p>
      </div>
      <div class="mt-1 hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
        <p class="text-gray-300 pl-14">
          Since we changed this in tailwind 2 I've almost never used a leading
          class at all
        </p>
      </div>
    </div>
  </div>
</template>
