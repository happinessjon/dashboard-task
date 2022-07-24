<script setup>
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";

</script>

<template>
  <div class="flex min-h-screen w-full bg-gray-100 font-sans">
    <Sidebar />
    <main class="flex min-h-screen flex-1 flex-col bg-white">
      <Header
        class="border-warm-gray-600 border-b-2 bg-gray-100 px-2 md:px-8 pt-4 pb-[140px]"
      />
      <router-view></router-view>
    </main>
  </div>
</template>
<style>
.open {
  position:absolute;
  transform: translateX(-250px);
}
</style>
