<template>
    <div class="pt-24 w-7/10 flex flex-col justify-between px-16 pb-6">
        <div class="flex justify-between">
            <nav>
                <ul class="flex flex-col gap-3 font-heading text-7xl uppercase js-appearChainedContainer">
                    <li v-for="link in menu"
                        class="relative group overflow-hidden w-fit">
                        <NuxtLink :to="link.url" class="js-appearChained block">
                            <span class="opacity-0">{{ link.name }}</span>
                            <span class="absolute top-0 left-0 group-hover:-translate-y-full transition duration-400 ease-in-out">{{ link.name }}</span>
                            <span class="top-0 left-0 absolute translate-y-full group-hover:-translate-y-0 transition duration-400 ease-in-out">{{ link.name }}</span>
                        </NuxtLink>

                    </li>
                </ul>
            </nav>

            <div class="text-2xl js-appear">
                <p class="mb-14 cursor-pointer w-fit inline-flex">
                    Cart
                    <span class="text-xs ml-3 mt-1">0</span></p>

                <div v-for="item in ['Menu', 'Book a table']"
                   @mouseenter="underlineIn"
                   @mouseleave="underlineOut"
                   class="relative overflow-hidden w-fit mb-2"
                >
                    <NuxtLink to="/">{{ item }}</NuxtLink>
                    <span class="block w-full h-px bg-white -translate-x-full"></span>
                </div>
            </div>
        </div>

        <div class="flex items-end justify-between text-sm js-appear">
            <div v-for="item in phoneNumber">
                <p class="text-secondary-base/50">{{ item.name }}</p>
                <p>{{ item.tel }}</p>
            </div>

            <ul class="flex gap-x-2">
                <li class="group">
                    <NuxtLink to="/"
                              class="rounded-full border h-16 w-16 border-secondary-base/50 flex justify-center items-center">
                        <img src="~assets/img/insta.svg" alt="Instagram logo" class="group-hover:scale-110 transition duration-300">
                    </NuxtLink>
                </li>
                <li class="group">
                    <NuxtLink to="/"
                              class="rounded-full border h-16 w-16 border-secondary-base/50 flex justify-center items-center">
                        <img src="~assets/img/facebook.svg" alt="Facebook logo" class="group-hover:scale-110 transition duration-300">
                    </NuxtLink>
                </li>
                <li class="group">
                    <NuxtLink to="/"
                              class="rounded-full border h-16 w-16 border-secondary-base/50 flex justify-center items-center">
                        <img src="~assets/img/mail.svg" alt="Mail logo" class="group-hover:scale-110 transition duration-300">
                    </NuxtLink>
                </li>
                <li class="group">
                    <NuxtLink to="/"
                              class="rounded-full border h-16 w-16 border-secondary-base/50 flex justify-center items-center">
                        <img src="~assets/img/beer.svg" alt="Beer logo" class="group-hover:scale-110 transition duration-300">
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import usePopMotion from '/plugins/popmotion.client'

const { underlineIn, underlineOut } = usePopMotion()

const menu = [
    {
        name: 'about us',
        url: '/'
    },
    {
        name: 'brewery',
        url: '/brewery'
    },
    {
        name: 'restaurant',
        url: '/restaurant'
    },
    {
        name: 'shop',
        url: '/shop'
    },
    {
        name: 'beer museum',
        url: 'museum'
    },
]

const phoneNumber = [
    {
        name: 'Restaurant',
        tel: '+01 234 567 89 00'
    },
    {
        name: 'Brewery',
        tel: '+01 234 567 89 00'
    }
]
</script>

<style scoped>

</style>
