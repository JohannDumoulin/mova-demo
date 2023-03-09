<template>
    <div class="bg-white/50 h-screen w-screen fixed top-0 left-0 z-10 flex text-white" :class="{ hidden: !getState }">
        <div class="absolute p-6">
            <Logo/>
        </div>

        <img src="~assets/img/close.svg"
             alt="Close icon"
             class="absolute top-8 right-12 cursor-pointer hover:scale-125 transition ease-in-out duration-300 z-30"
             @click="toggleState">

        <div class="h-full w-7/10 bg-primary-base flex">
            <DesktopContentLeft/>

            <DesktopContentRight/>
        </div>

        <div class="h-full w-3/10">
            <img src="~assets/img/menu_side.jpg" alt="Beer" class="h-full object-cover">
        </div>
    </div>
</template>

<script setup>
import useFullSizeMenu from '/plugins/fullSizeMenu.client'

const { getState, toggleState } = useFullSizeMenu()
</script>

<style scoped>

</style>
