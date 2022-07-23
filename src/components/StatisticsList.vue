<script setup>
import { reactive } from "vue";
import StatisticsItem from "./StatisticsItem.vue";
const statsList = reactive([
    {   
        id: 1,
        statsTitle: "Tasks in Progress", 
        numberOfTasks: '210',
        amountOfIncreasing: "23",
        dateStatus: "Current month",
        status: "warning",
    },
    {   
        id: 2,
        statsTitle: "Tasks Completed", 
        numberOfTasks: '185',
        amountOfIncreasing: "45",
        status: "normal",
        dateStatus: "Current month",
    },
    {   
        id: 3,
        statsTitle: "Monthly Tasks Summary", 
        status: "success",
        numberOfTasks: '1,240',
        amountOfIncreasing: "145",
        dateStatus: "Current month",
    },
])
</script>

<template>
    <ul class="grid grid-cols-3 gap-x-10">
        <StatisticsItem v-for="item in statsList" :data="item" :key="item.id"/>
    </ul>
</template>