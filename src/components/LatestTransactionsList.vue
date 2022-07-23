<script setup>
import { reactive } from "vue";
import LatestTransactionsItem from "./LatestTransactionsItem.vue";

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
    }
])
</script>

<template>
    <ul>
        <LatestTransactionsItem v-for="item in latestTransactionsList" :data="item" :key="item.id" />
    </ul>
</template>