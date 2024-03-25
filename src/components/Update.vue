<template>
  <div class="py-12">
    <div class="flex flex-col items-center gap-12">
      <div class="flex gap-3 justify-center items-center flex-col">
        <h3 class="text-gray-600 text-center w-[80%] text-[36px] font-semibold">
          Caring is the new marketing
        </h3>
        <p class="text-gray-500 text-center w-[590px]">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div class="flex flex-col lg:flex-row justify-between">
        <div
          class="p-6 flex relative justify-center max-w-md rounded-md"
          v-for="item in data"
        >
          <div
            class="flex gap-2 relative text-center flex-col w-[60%] items-center"
          >
            <div :class="'w-[365px] h-[286px] rounded-md'">
              <img :src="item.img" alt="" />
            </div>
            <div
              class="absolute gap-1 flex flex-col justify-center items-center bg-silver rounded-md top-60 w-[317px] h-[90px]"
            >
              <p class="">{{ item.content }}</p>
              <a href="" class=""
                ><span class="text-primary font-semibold text-[18px]"
                  >Meet all customers -></span
                ></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import icon1 from "@/assets/img/community/d.png";
import icon2 from "@/assets/img/community/e.png";
import icon3 from "@/assets/img/community/f.png";

const data = [
  {
    img: icon1,
    header: "Membership Organisations",
    content: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    img: icon2,
    header: "National Associations",
    content:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    img: icon3,
    header: "Clubs And Groups",
    content: "Revamping the Membership Model with Triathlon Australia",
  },
];
</script>
