<template>
  <div class="w-full mt-5">
    <div class="flex flex-col">
      <div class="w-screen bg-silver py-12">
        <div class="flex flex-col justify-center items-center text-center">
          <h3 class="font-semibold w-[840px] text-[54px] text-secondary">
            Pellentesque suscipit fringilla libero eu.
          </h3>
          <div class="mt-5">
            <button class="px-6 py-3 bg-primary text-white rounded-md">
              Get a Demo ->
            </button>
          </div>
        </div>
      </div>
      <div class="w-screen bg-secondary py-12">
        <nav class="flex text-white w-screen p-6">
          <ul class="flex w-full mx-12 justify-between">
            <li class="flex flex-col gap-4">
              <div class="flex gap-2">
                <img
                  class="w-[35px] h-[24px]"
                  src="../assets/img/Icon.png"
                  alt=""
                />
                <span class="">
                  <h3 class="text-white font-bold text-xl">Nexcent</h3>
                </span>
              </div>
              <div class="flex flex-col gap-2">
                <p class="">
                  Copyright &copf; {{ new Date().getFullYear() }} Nexcent ltd.
                </p>
                <p class="">All rights reserved</p>
              </div>
              <div class="flex gap-4">
                <div
                  v-for="item in 4"
                  class="bg-gray-500 p-4 rounded-full"
                ></div>
              </div>
            </li>
            <li class="flex flex-col gap-6">
              <p class="font-semibold text-[20px]">Company</p>
              <p class="">About us</p>
              <p class="">Blog</p>
              <p class="">Contact us</p>
              <p class="">Pricing</p>
              <p class="">Testimonials</p>
            </li>
            <li class="flex flex-col gap-6">
              <p class="font-semibold text-[20px]">Support</p>
              <p class="">Help center</p>
              <p class="">Terms of service</p>
              <p class="">Legal</p>
              <p class="">Privacy policy</p>
              <p class="">Status</p>
            </li>
            <li class="flex flex-col gap-2">
              <p class="font-semibold text-[20px]">Stay up to date</p>
              <input
                type="text"
                class="bg-white opacity-35 w-[255px] h-[40px]"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup></script>
