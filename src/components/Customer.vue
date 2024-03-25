<template>
  <div class="w-screen bg-silver p-20">
    <div class="w-full flex justify-between items-center">
      <div
        class="flex flex-col lg:flex-row-reverse justify-between gap-12 w-full mx-12 items-center"
      >
        <div class="flex flex-col">
          <p class="text-gray-600 text-[16px]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div class="mt-5 flex flex-col gap-1">
            <h3 class="text-primary font-semibold text-[28px]">Tim Smith</h3>
            <p class="text-gray-500">British Dragon Boat Racing Association</p>
          </div>
          <div class="flex items-center gap-12 mt-5">
            <img v-for="item in icon" :src="item.img" alt="" />
            <a href="" class=""
              ><span class="text-primary font-semibold text-[18px]"
                >Meet all customers -></span
              ></a
            >
          </div>
        </div>
        <div class="">
          <img
            src="../assets/img/ilus4.png"
            alt=""
            class="w-[2300px] h-[433px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import icon1 from "@/assets/img/customer/a.png";
import icon2 from "@/assets/img/customer/b.png";
import icon3 from "@/assets/img/customer/c.png";
import icon4 from "@/assets/img/customer/d.png";
import icon5 from "@/assets/img/customer/e.png";
import icon6 from "@/assets/img/customer/f.png";

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
];
</script>
