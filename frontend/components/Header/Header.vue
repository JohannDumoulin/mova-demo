<template>
    <header class="p-6 flex justify-between text-white absolute w-full z-20 js-header header" :class="{ isActive: getState }">
        <FixedMenu/>

        <FullSizeMenu/>

        <NuxtLink to="/">
            <img src="~assets/img/logo_white.svg" alt="Mova Logo">
        </NuxtLink>

        <div class="flex gap-8 header__headerMenu">
            <nav>
                <ul class="flex gap-8 text-lg">
                    <li v-for="link in menu" @mouseenter="underlineIn" @mouseleave="underlineOut" class="relative overflow-hidden">
                        <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
                        <span class="block w-full h-px bg-white -translate-x-full"></span>
                    </li>
                </ul>
            </nav>

            <div class="flex cursor-pointer">
                <i class="icon-shopping-bag text-xl"></i>
                <p class="ml-1 text-xs mt-0.5">0</p>
            </div>

            <div class="flex flex-col gap-2.5 justify-center group w-20 overflow-hidden cursor-pointer" @click="toggleState">
                <div class="h-px w-full bg-white group-hover:translate-x-4 transition ease-in-out duration-500"></div>
                <div class="h-px w-full bg-white group-hover:-translate-x-4 transition ease-in-out duration-500"></div>
            </div>
        </div>
    </header>
</template>

<script setup>
import usePopMotion from '/plugins/popmotion.client'
import useFullSizeMenu from '/plugins/fullSizeMenu.client'

const { underlineIn, underlineOut } = usePopMotion()
const { getState, toggleState } = useFullSizeMenu()

const menu = [
    {
        name: 'Brewery',
        url: '/brewery'
    },
    {
        name: 'Restaurant',
        url: '/restaurant'
    },
    {
        name: 'Shop',
        url: '/shop'
    },
    {
        name: 'Contact',
        url: '/contact'
    }
]
</script>

<style scoped>

</style>
