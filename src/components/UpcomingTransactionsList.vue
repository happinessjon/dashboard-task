<script setup>
import { reactive } from "vue";
import UpcomingTransactionItem from "./UpcomingTransactionItem.vue";
import UpcomingTransactionTomorrowItem from "./UpcomingTransactionTomorrowItem.vue";
import DropIcon from "../icons/drop-svgrepo-com.svg";
import LightBulbIcon from "../icons/lightbulb.svg";
import ListIcon from "../icons/list.svg";
import DollarIcon from "../icons/dollars.svg";
const upcomingTransactionListToday = reactive([
  {
    id: 1,
    title: "Water Bill",
    status: "Unsuccessfully",
    transferAmount: "280",
    isIncome: false,
    color: "darkblue",
    icon: DropIcon,
  },
]);
const upcomingTransactionListTomorrow = reactive([
  {
    id: 1,
    title: "Income: Salary Oct",
    status: "Successfully",
    transferAmount: "1200",
    isIncome: true,
    color: "pink",
    icon: DollarIcon,
  },
  {
    id: 2,
    title: "Electric Bill",
    status: "Successfully",
    transferAmount: "480",
    color: "blue",
    isIncome: false,
    icon: LightBulbIcon,
  },
  {
    id: 3,
    title: "Income: Jane Transfers",
    status: "Successfully",
    transferAmount: "500",
    color: "warning",
    isIncome: true,
    icon: ListIcon,
  },
  {
    id: 4,
    title: "Income: Jane Transfers",
    status: "Successfully",
    transferAmount: "500",
    isIncome: true,
    color: "warning",
    icon: ListIcon,
  },
]);
</script>
<template>
  <div class="ml-4 flex-grow rounded-[20px] bg-white p-6">
    <div class="mb-8 flex items-center justify-between">
      <h2 class="text-[17px] font-semibold capitalize text-gray-600">
        Upcoming Transactions
      </h2>
      <button
        class="cursor-pointer text-sm font-medium capitalize text-darkgray hover:underline"
      >
        View all
      </button>
    </div>
    <p class="font-medium text-xs text-darkgray mb-3">Today</p>
    <ul class="mb-8">
      <UpcomingTransactionItem
        v-for="item in upcomingTransactionListToday"
        :data="item"
        :key="item.id"
      />
    </ul>
    
    <p class="font-medium text-xs text-darkgray mb-3">Tomorrow</p>
    <ul>
      <UpcomingTransactionTomorrowItem
        v-for="item in upcomingTransactionListTomorrow"
        :data="item"
        :key="item.id"
      />
    </ul>
  </div>
</template>
