<script setup>
import SearchIcon from "../icons/search.svg";
import MailIcon from "../icons/mail.svg";
import DotsIcon from "../icons/dots.svg";
import InboxIcon from "../icons/inbox.svg";
import BurgerIcon from "../icons/burger.svg";

function toggleSidebar() {
  let aside = document.querySelector('aside');
  if(aside.classList.contains('open')) {
    aside.classList.remove('open')
  } else {
    aside.classList.add('open');
  }
  console.log('clicked')
}
</script>

<template>
  <nav class="flex items-center lg:gap-x-6">
    <button
      class="duration-400 mr-3 flex h-10 w-10 items-center justify-center rounded-full transition ease-linear hover:bg-blue-300 hover:text-white lg:hidden"
      @click="toggleSidebar"
    >
      <BurgerIcon class="h-6 w-6"/>
    </button>
    <div class="flex items-center justify-between lg:mr-auto xl:mr-[150px]">
      <div class="flex items-center gap-x-2">
        <div class="relative hidden lg:block">
          <span
            class="pointer-events-none absolute inset-y-0 flex items-center px-3"
          >
            <SearchIcon class="h-6 w-6 stroke-current text-darkgray" />
          </span>
          <input
            type="text"
            placeholder="Search.."
            class="rounded-md py-3 pr-4 pl-10 text-sm font-medium text-darkgray placeholder-darkgray focus:outline-none"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-grow items-center justify-between">
      <div class="mr-auto flex items-center gap-x-2.5">
        <button
          class="duration-400 flex h-9 w-9 items-center justify-center rounded-full transition ease-linear hover:bg-blue-300 hover:text-white"
        >
          <MailIcon class="h-6 w-6 stroke-current" />
        </button>

        <button
          class="duration-400 flex h-9 w-9 items-center justify-center rounded-full transition ease-linear hover:bg-blue-300 hover:text-white"
        >
          <InboxIcon class="h-6 w-6 stroke-current" />
        </button>
        <button
          class="duration-400 flex h-9 w-9 items-center justify-center rounded-full transition ease-linear hover:bg-blue-300 hover:text-white"
        >
          <DotsIcon class="h-6 w-6 stroke-current" />
        </button>
      </div>
      <ul class="grid grid-cols-2 items-center gap-x-6">
        <li>
          <a
            class="font-medium text-darkgray transition duration-500 ease-in-out hover:text-gray-800 text-[11px] md:text-sm"
            href="#"
            >Wallet</a
          >
        </li>
        <li>
          <a
            class="font-medium text-darkgray transition duration-500 ease-in-out hover:text-gray-800 text-[11px] md:text-sm"
            href="#"
            >Invoice</a
          >
        </li>
      </ul>
      <button
        class="duration-400 ml-auto flex p-2 items-center justify-center rounded-full transition ease-linear hover:bg-blue-300 hover:text-white lg:h-11 px-2"
      >
        <span class="pl-2 font-medium text-sm hidden lg:block">Hi, Alexander</span>
        <img
          src="/img/avatar-1.jpeg"
          alt="Profile image"
          class="h-8 w-8 rounded-full object-cover lg:ml-4"
        />
      </button>
    </div>
  </nav>
</template>
