<script setup>
import ChevronDownIcon from "../icons/chevron-down.svg";
import QuestionMarkIcon from "../icons/question-mark.svg";
import MasterCardIcon from "../icons/master-card.svg";
import CubeIcon from "../icons/cube.svg";
import StatisticsList from "../components/StatisticsList.vue";
import LatestTransactionsList from "../components/LatestTransactionsList.vue";
import UpcomingTransactionsList from "../components/UpcomingTransactionsList.vue";
</script>

<template>
  <div class="px-8 pb-[30px]  trasform -translate-y-[120px]" >
    <ul class="grid grid-cols-3 gap-x-5">
      <li class="rounded-[16px] bg-sky-400 px-5 py-6">
        <div class="mb-[80px] flex justify-between">
          <p class="text-xs font-semibold capitalize">Your working balance</p>
          <p
            class="text-xs font-semibold capitalize text-darkgray underline decoration-2 underline-offset-4"
          >
            Saving account
          </p>
        </div>
        <div class="flex justify-between">
          <p class="text-[28px] font-semibold uppercase">PKR 9,250,000</p>
          <button
            class="inline-flex items-center gap-x-1 rounded-10 text-xs font-semibold uppercase text-gray-700 hover:text-white"
          >
            <span class="pl-2">PKR</span>
            <ChevronDownIcon class="h-6 w-6 stroke-current" />
          </button>
        </div>
      </li>

      <li class="rounded-[16px] bg-sky-400 px-5 py-6">
        <div class="mb-[60px] flex items-center justify-between">
          <p class="text-xs font-semibold capitalize">Your saving status</p>
          <button class="cursor-pointer">
            <QuestionMarkIcon class="h-6 w-6 stroke-darkgray fill-darkgray" />
          </button>
        </div>
        <div class="flex">
          <CubeIcon class="h-14 w-14 stroke-red-500 fill-red-500 p-3 bg-red-200 rounded-full" />
          <div class="ml-3">
            <span class="text-red-500 text-[24px] font-semibold">4.28%</span>
            <p class="text-xs font-semibold">Your spending increased</p>
          </div>
        </div>
      </li>

      <li class="rounded-[16px] bg-sky-400 px-5 pt-2 pb-6">
        <div class="flex flex-col">
          <MasterCardIcon class="h-12 w-12" />
          <span class="text-[10px] mb-2 uppercase">Card number</span>
          <span class="font-medium text-[17px] tracking-wider">3829 4820 4629 5025</span>
        </div>
        <div class="flex mt-6">
          <div class="flex flex-col mr-[60px]">
            <span class="uppercase text-[10px]">Card holder name</span>
            <span class="capitalize font-semibold text-sm">Anita Rose</span>
          </div>
          <div class="flex flex-col">
            <span class="uppercase text-[10px]">Vaid thru</span>
            <strong class="text-sm">09/17</strong>
          </div>
        </div>
      </li>
    </ul>
    <StatisticsList class="mt-[80px] mb-[40px] py-[35px] border-y-2 border-gray-200" />
    <div class="flex">
      <LatestTransactionsList />
      <UpcomingTransactionsList />
    </div>

  </div>
</template>
