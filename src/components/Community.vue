<template>
  <div class="py-12">
    <div class="flex flex-col items-center gap-12">
      <div class="flex gap-3 justify-center items-center flex-col">
        <h3 class="text-gray-600 text-center w-[80%] text-[36px] font-semibold">
          Manage your entire community in a single system
        </h3>
        <p class="text-gray-500">Who is Nextcent suitable for?</p>
      </div>
      <div class="flex flex-col lg:flex-row justify-between">
        <div
          class="p-6 flex justify-center max-w-md rounded-md"
          v-for="item in data"
        >
          <div class="flex gap-2 text-center flex-col w-[60%] items-center">
            <img :src="item.img" alt="" />
            <h3 class="text-secondary text-[30px] font-semibold">
              {{ item.header }}
            </h3>
            <p class="">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import icon1 from "@/assets/img/community/a.png";
import icon2 from "@/assets/img/community/b.png";
import icon3 from "@/assets/img/community/c.png";

const data = [
  {
    img: icon1,
    header: "Membership Organisations",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    img: icon2,
    header: "National Associations",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    img: icon3,
    header: "Clubs And Groups",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];
</script>
