<template>
  <RouterLink
    :to="`/servers/${$route.params.sid}/channels/${id}`"
    class="flex items-center text-gray-300 px-2 mx-2 py-1 rounded group hover:text-gray-100 group relative hover:bg-gray-550/[0.16]"
    :class="{
      'text-white bg-gray-550/[0.32]': +$route.params.cid === +id,
      'text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]': unread,
      'text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]':
        !unread,
    }"
    active-class="bg-gray-550/[0.32] text-white"
  >
    <div
      v-if="+$route.params.cid !== +id && unread"
      class="absolute w-2 h-2 bg-white left-0 -ml-3 rounded-r-full"
    />
    <component :is="Icon" class="w-5 h-5 mr-1.5 text-gray-400" />
    {{ label }}
    <AddPersonIcon
      class="w-4 h-4 ml-auto text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100"
    />
  </RouterLink>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import AddPersonIcon from '@/components/icons/AddPersonIcon.vue';
import BookIcon from '@/components/icons/BookIcon.vue';
import HashtagIcon from '@/components/icons/HashtagIcon.vue';
import SpeakerphoneIcon from '@/components/icons/SpeakerphoneIcon.vue';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
    default: '',
  },
  unread: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Icon = computed(() => {
  let res: any;

  switch (props.icon) {
    case 'Book':
      res = BookIcon;
      break;
    case 'Speakerphone':
      res = SpeakerphoneIcon;
      break;
    default:
      res = HashtagIcon;
      break;
  }

  return res;
});
</script>
