<script setup>
import { defineProps, computed } from "vue";
import ArrowRightIcon from "../icons/arrow-right.svg";
const props = defineProps({
    data: {
        type: Array,
        required: true,
    }
})
// const setIcon = computed(() => {
//     if(props.data.isIncome == true) {

//     }
// })
</script>
<template>
    <li class="flex items-center mb-5">
        <ArrowRightIcon class="mr-4 w-[40px] h-[40px] bg-gray-100 rounded-10 fill-gray-500 p-3"/>
        <div class="w-full flex justify-between">
            <p class="font-medium text-gray-500 text-sm">{{ props.data.textHistory }}</p>
            <span class="block font-medium" :class="props.data.isIncome ? 'text-current' : 'text-red-800'">${{ props.data.transferAmount }}</span>
        </div>
    </li>
</template>