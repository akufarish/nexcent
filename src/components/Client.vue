<template>
  <div class="py-12">
    <div class="flex flex-col items-center gap-12">
      <div class="flex justify-center items-center flex-col">
        <h3 class="text-gray-600 text-[36px] font-semibold">Our Clients</h3>
        <p class="text-gray-500">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div class="flex flex-col lg:flex-row justify-between gap-40">
        <img v-for="item in icon" :src="item.img" :alt="item.img" />
      </div>
    </div>
  </div>
</template>

<script setup>
import icon1 from "@/assets/img/client/a.png";
import icon2 from "@/assets/img/client/b.png";
import icon3 from "@/assets/img/client/c.png";
import icon4 from "@/assets/img/client/d.png";
import icon5 from "@/assets/img/client/e.png";
import icon6 from "@/assets/img/client/f.png";
import icon7 from "@/assets/img/client/j.png";

const icon = [
  {
    img: icon1,
  },
  {
    img: icon2,
  },
  {
    img: icon3,
  },
  {
    img: icon4,
  },
  {
    img: icon5,
  },
  {
    img: icon6,
  },
  {
    img: icon7,
  },
];
</script>
