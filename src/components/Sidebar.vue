<script setup>
import HomeIcon from "../icons/home.svg";
import BillIcon from "../icons/bill.svg";
import InvoiceIcon from "../icons/invoice.svg";
import BuildingIcon from "../icons/building.svg";
import CardIcon from "../icons/card.svg";
import SettingsIcon from "../icons/settings.svg";
import DashboardIcon from "../icons/dashboard.svg";
import ChevronRightIcon from "../icons/chevron-right.svg";
import QuestionMarkIcon from "../icons/question-mark.svg";
const menu = [
  { name: "Dashboard", icon: HomeIcon, path: "/"},
  { name: "Transactions", icon: BillIcon, path: "/transactions" },
  { name: "Contacts", icon: InvoiceIcon, path: "/contacts" },
  { name: "Features", icon: BuildingIcon, path: "/features" },
  { name: "Library", icon: CardIcon, path: "/library" },
];
const settings = [
  { name: "Settings", icon: SettingsIcon, path: "/settings" },
  { name: "Transactions", icon: BillIcon, path: "/transactions" },
  { name: "Contacts", icon: InvoiceIcon, path: "/contacts" },
  { name: "Features", icon: BuildingIcon, path: "/features" },
];
</script>
<template>
  <aside class="flex w-72 flex-col px-4 pt-6 pb-6">
    <a
      href="#"
      class="flex items-center pl-8 text-2xl font-semibold text-purple-700 focus:outline-none"
    >
      <DashboardIcon class="mr-3 h-6 w-6 stroke-current" />
      <span class="font-semibold text-sm">Super Finti</span>
    </a>
    <div>
      <ul class="flex flex-1 flex-col gap-y-2 pt-8">
        <h2 class="font-semibold capitalize text-[13px] text-gray-600">Main navigation</h2>
        <li v-for="item in menu" :key="item" class="p-2 rounded-lg hover:bg-blue-200 focus:bg-blue-200 focus:font-medium focus:text-white focus:outline-none">
          <router-link
            :to="item.path"
            class="flex items-center gap-x-4 text-gray-400"
          >
            <Component :is="item.icon" class="h-6 w-6 stroke-current" />
            <div class="w-full flex items-center justify-between">
              <span class="font-medium text-[13px] text-darkgray ">{{ item.name }}</span>
            <ChevronRightIcon class="w-3 h-3" />
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <ul class="flex flex-1 flex-col gap-y-2 pt-8">
        <h2 class="font-semibold capitalize text-[13px] text-gray-600">Settings & Schedules</h2>
        <li v-for="item in settings" :key="item" class="p-2 rounded-lg hover:bg-blue-200 focus:bg-blue-200 focus:font-medium focus:text-white focus:outline-none">
          <router-link
            :to="item.path"
            class="flex items-center gap-x-4 text-gray-400"
          >
            <Component :is="item.icon" class="h-6 w-6 stroke-current" />
            <div class="w-full flex items-center justify-between">
              <span class="font-medium text-[13px] text-darkgray ">{{ item.name }}</span>
            <ChevronRightIcon class="w-3 h-3" />
            </div>
          </router-link>
        </li>
      </ul>
    <div
      class="fixed bottom-4 rounded-10 text-center bg-sky-300 bg-[url(/img/line-pattern.svg)] bg-top p-6 max-w-[250px] w-full"
    > 
      <QuestionMarkIcon class="h-16 w-16 fill-orange-500 p-3 bg-white rounded-full transform translate-x-[100%] -translate-y-[50px]" />
      <p class="capitalize font-semibold">Help center</p>
      <div class="mt-3 text-sm text-gray-400 max-w-30 w-full">Having trouble in Finti? Please contact us for more questions.</div>
      <button
        class="mt-4 w-full rounded-lg text-gray-700 py-2 text-sm font-medium capitalize bg-white"
      >
        Go to help center
      </button>
    </div>
  </aside>
</template>
