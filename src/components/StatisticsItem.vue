<script setup>
import { defineProps } from "vue";
import ChartIcon from "../icons/chart-bar-chart-svgrepo-com.svg";
const props = defineProps({
    data: {
        type: Array, 
        required: true,
    }
})

</script>

<template>
    <li class="flex items-center justify-between">
        <div>
            <p class="font-semibold capitalize text-[11px] text-darkgray mb-2">{{ props.data.statsTitle }}</p>
            <div class="flex justify-between">
                <span>{{ props.data.numberOfTasks }}</span>
                <span> {{ props.data.amountOfIncreasing }}</span>
            </div>
            <p>{{ props.data.dateStatus }}</p>
        </div>
        <ChartIcon class="h-[60px] w-[60px] stroke-current" />
    </li>
</template>