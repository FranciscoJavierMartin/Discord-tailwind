<template>
  <RouterLink
    to="#"
    class="flex items-center text-gray-300 px-2 mx-2 py-1 rounded hover:text-gray-100 group hover:bg-gray-550/[0.16]"
  >
    <component :is="Icon" class="w-5 h-5 mr-1.5 text-gray-400" />
    {{ label }}
    <AddPersonIcon
      class="w-4 h-4 ml-auto text-gray-200 opacity-0 hover:text-gray-100 group-hover:opacity-100"
    />
  </RouterLink>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
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
});

// TODO: Refactor using dynamic import
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
