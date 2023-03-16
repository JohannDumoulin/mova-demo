<template>
    <div class="w-3/10 h-full pt-24 p-6 flex flex-col justify-between relative">
        <nav class="js-appear">
            <ul class="flex flex-col gap-5">
                <li v-for="link in subMenu"
                    @mouseenter="underlineIn"
                    @mouseleave="underlineOut"
                    class="relative overflow-hidden text-2xl w-fit">
                    <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
                    <span class="block w-full h-px bg-white -translate-x-full"></span>
                </li>
            </ul>
        </nav>

        <div class="js-appear">
            <p class="capitalize text-secondary-base/50 mb-2 text-sm">addresses</p>
            <p>Pratsi avenue, 8, Dnipro</p>

            <NuxtLink to="/" class="inline-block mt-4 border border-secondary-base/50 rounded-full uppercase px-8 py-4">
                how to reach
            </NuxtLink>
        </div>

        <div class="js-header__fullSizeMenu-line absolute w-px h-full bg-secondary-base/50 top-0 right-0 translate-y-full"></div>
    </div>
</template>

<script setup>
import usePopMotion from '/plugins/popmotion.client'

const { underlineIn, underlineOut } = usePopMotion()

const subMenu = [
    {
        name: 'Events',
        url: '/events-news'
    },
    {
        name: 'News',
        url: '/events-news#news'
    },
    {
        name: 'Contact',
        url: '/contact'
    },
    {
        name: 'Point of sale',
        url: '/point-of-sale'
    },
]
</script>

<style scoped>

</style>
