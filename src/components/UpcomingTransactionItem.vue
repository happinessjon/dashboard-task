<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const setBackground = computed(() => {
    if(props.data.color == "darkblue") {
        return 'bg-blue-800'
    } else { return 'bg-current' }
})
</script>
<template>
  <li class="flex items-center">
    <Component :is="props.data.icon" :class="setBackground" class="mr-4 h-[40px] w-[40px] rounded-10 fill-white p-2" />
    <div class="flex w-full items-center justify-between">
      <div>
        <p class="font-medium text-sm">
          {{ props.data.title }}
        </p>
        <span class="text-[11px] font-medium text-gray-500">{{ props.data.status }}</span>
      </div>
      <span
        class="block font-medium"
        :class="props.data.isIncome ? 'text-current' : 'text-red-700'"
        >-${{ props.data.transferAmount }}</span>
    </div>
  </li>
</template>
