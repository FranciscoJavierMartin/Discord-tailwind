<template>
  <div class="w-60 flex-col bg-gray-800 hidden md:flex">
    <button
      class="font-title flex h-12 items-center px-4 font-semibold text-white shadow-sm text-[15px] transition hover:bg-gray-550/[0.16]"
    >
      <div class="relative w-4 h-4 mr-1">
        <VerifiedIcon class="absolute text-gray-550" />
        <CheckIcon class="absolute" />
      </div>
      {{ server.label }}
      <ChevronIcon class="w-[18px] h-[18px] ml-auto opacity-80" />
    </button>
    <div class="flex-1 overflow-y-scroll font-medium text-gray-300 mt-[17px]">
      <div
        class="flex-1 space-y-[21px] overflow-y-scroll font-medium pt-3 text-gray-300"
      >
        <div v-for="category of server.categories" :key="category.id">
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
              v-for="channel of category.channels.filter(
                (channel) =>
                  !closedCategories.includes(category.id) ||
                  (channel as any)?.unread,
              )"
              :key="channel.id"
              v-bind="channel"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex-shrink min-w-0 flex flex-1 flex-col bg-gray-700">
    <div class="flex h-12 items-center px-3 shadow-sm">
      <div class="flex items-center">
        <HashtagIcon class="mx-2 h-6 w-6 font-semibold text-gray-400" />
        <span class="font-title mr-2 text-white whitespace-nowrap">{{
          channel?.label
        }}</span>
      </div>
      <template v-if="channel?.description">
        <div class="w-px h-6 mx-2 bg-white/[.06] hidden md:block" />
        <div
          class="hidden md:block text-sm font-medium text-gray-200 mx-2 overflow-hidden truncate"
        >
          {{ channel.description }}
        </div>
      </template>
      <!-- Mobile buttons -->
      <div class="ml-auto flex items-center md:hidden">
        <button class="text-gray-200 hover:text-gray-100">
          <HashtagWithSpeechBubbleIcon class="mx-2 h-6 w-6" />
        </button>
        <button class="text-gray-200 hover:text-gray-100">
          <PeopleIcon class="mx-2 h-6 w-6" />
        </button>
      </div>
      <!-- End Mobile buttons -->
      <!-- Desktop buttons -->
      <div class="ml-auto md:flex items-center hidden">
        <button class="text-gray-200 hover:text-gray-100">
          <HashtagWithSpeechBubbleIcon class="mx-2 h-6 w-6" />
        </button>
        <button class="text-gray-200 hover:text-gray-100">
          <BellIcon class="mx-2 h-6 w-6" />
        </button>
        <button class="text-gray-200 hover:text-gray-100">
          <PinIcon class="mx-2 h-6 w-6" />
        </button>
        <button class="text-gray-200 hover:text-gray-100">
          <PeopleIcon class="mx-2 h-6 w-6" />
        </button>
        <div class="mx-2 relative">
          <input
            type="text"
            class="bg-gray-900 border-none h-6 rounded w-36 text-sm font-medium placeholder-gray-400 px-1.5"
            placeholder="Search"
          />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <SpyglassIcon class="w-4 h-4 mr-1.5 text-gray-400" />
          </div>
        </div>
        <button class="text-gray-200 hover:text-gray-100">
          <InboxIcon class="mx-2 h-6 w-6" />
        </button>
        <button class="text-gray-200 hover:text-gray-100">
          <QuestionCircleIcon class="mx-2 h-6 w-6" />
        </button>
      </div>
      <!-- End Desktop buttons -->
    </div>
    <div class="flex-1 overflow-y-scroll">
      <div v-for="(message, index) in channel?.messages" :key="message.id">
        <MessageWithUser
          v-if="
            index === 0 || message.user !== channel?.messages[index - 1].user
          "
          :message="message"
        />
        <Message v-else :message="message" />
      </div>
    </div>
    <div class="bg-gray-700 px-4 pb-5">
      <div
        class="bg-gray-600 border-none rounded-lg w-full text-sm flex items-center"
      >
        <button class="mx-4 my-3">
          <PlusIcon />
        </button>
        <input
          placeholder="Write something"
          class="bg-gray-600 border-none w-full mr-3 focus:outline-none"
        />
        <div class="flex h-11 mr-2 gap-3 items-center">
          <button class="h-6 w-6">
            <PresentIcon class="text-gray-200" />
          </button>
          <button class="h-6 w-6">
            <GifIcon class="text-gray-200" />
          </button>
          <button class="h-6 w-6">
            <NoteIcon class="text-gray-200" />
          </button>
          <button class="h-6 w-6">
            <div
              style="
                background-image: url('/emojis.png');
                background-position: -66px -66px;
                background-size: 242px 110px;
                transform: scale(1.14);
                filter: grayscale(0%);
              "
              class="bg-no-repeat w-[22px] h-[22px]"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import ChannelLink from '@/components/ChannelLink.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import CheckIcon from '@/components/icons/CheckIcon.vue';
import ChevronIcon from '@/components/icons/ChevronIcon.vue';
import VerifiedIcon from '@/components/icons/VerifiedIcon.vue';
import HashtagIcon from '@/components/icons/HashtagIcon.vue';
import HashtagWithSpeechBubbleIcon from '@/components/icons/HashtagWithSpeechBubbleIcon.vue';
import BellIcon from '@/components/icons/BellIcon.vue';
import PinIcon from '@/components/icons/PinIcon.vue';
import PeopleIcon from '@/components/icons/PeopleIcon.vue';
import InboxIcon from '@/components/icons/InboxIcon.vue';
import QuestionCircleIcon from '@/components/icons/QuestionCircleIcon.vue';
import SpyglassIcon from '@/components/icons/SpyglassIcon.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
import PresentIcon from '@/components/icons/PresentIcon.vue';
import GifIcon from '@/components/icons/GifIcon.vue';
import NoteIcon from '@/components/icons/NoteIcon.vue';
import MessageWithUser from '@/components/MessageWithUser.vue';
import Message from '@/components/Message.vue';
import data from '@/api/data';
import type { Server, Channel, Category } from '@/types/data';

const route = useRoute();

const closedCategories = ref<any[]>([]);

const server = computed<Server>(
  () => data.find((s) => s.id === +(route.params.sid as string))!,
);

const channel = computed(() =>
  server.value.categories
    .flatMap((c: Category) => c.channels)
    .find((channel: Channel) => channel.id === +route.params.cid),
);

function toggleCategory(categoryId: number): void {
  closedCategories.value = closedCategories.value.includes(categoryId)
    ? closedCategories.value.filter((id) => id !== categoryId)
    : [...closedCategories.value, categoryId];
}
</script>
