<script setup>
import { reactive } from "vue";
import LatestTransactionsItem from "./LatestTransactionsItem.vue";
import SearchIcon from "../icons/search.svg";
import SettingsIcon from "../icons/settings.svg";

const latestTransactionsList = reactive([
  {
    id: 1,
    textHistory: "Payment Sent to Shakir",
    transferAmount: "560.00",
    isIncome: false,
  },
  {
    id: 2,
    textHistory: "Salary from Redwhale",
    transferAmount: "12,200.00",
    isIncome: true,
  },
  {
    id: 3,
    textHistory: "Money Sent to Wise.com",
    transferAmount: "3000.00",
    isIncome: false,
    isDebt: true,
  },
  {
    id: 4,
    textHistory: "Payment Sent to Shakir",
    transferAmount: "560.00",
    isIncome: false,
  },
  {
    id: 5,
    textHistory: "Salary from Redwhale",
    transferAmount: "12,200.00",
    isIncome: true,
  },
  {
    id: 6,
    textHistory: "Money Sent to Wise.com",
    transferAmount: "3000.00",
    isIncome: false,
    isDebt: true,
  },
]);
</script>

<template>
  <div class="w-full max-w-[580px] p-6 bg-gray-50 rounded-[20px]">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-[17px] font-semibold capitalize text-gray-600">
        Latest Transactions
      </h2>
      <div class="grid grid-cols-2 gap-x-3">
        <button class="cursor-pointer duration-400 flex h-10 w-10 items-center justify-center rounded-full transition ease-linear text-darkgray hover:bg-blue-300 hover:text-white">
          <SearchIcon class="h-6 w-6 stroke-current" />
        </button>
        <button class="cursor-pointer duration-400 flex h-10 w-10 items-center justify-center rounded-full transition ease-linear text-darkgray hover:bg-blue-300 hover:text-white">
          <SettingsIcon class="h-6 w-6 stroke-current" />
        </button>
      </div>
    </div>
    <p class="text-darkgray mb-4 font-medium text-sm">Mon, March 1</p>
    <ul>
      <LatestTransactionsItem
        v-for="item in latestTransactionsList"
        :data="item"
        :key="item.id"
      />
    </ul>
  </div>
</template>
