<template>
  <div class="flex justify-between flex-col h-screen">
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Client></Client>
      <Community></Community>
      <Unlock></Unlock>
      <Achievements></Achievements>
      <Calender></Calender>
      <Customer></Customer>
      <Update></Update>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Client from "@/components/Client.vue";
import Community from "@/components/Community.vue";
import Unlock from "@/components/Unlock.vue";
import Achievements from "@/components/Achievements.vue";
import Calender from "@/components/Calender.vue";
import Customer from "@/components/Customer.vue";
import Update from "@/components/Update.vue";
import Footer from "@/components/Footer.vue";

console.log(
  "source : https://www.figma.com/community/file/1222060007934600841"
);
</script>
