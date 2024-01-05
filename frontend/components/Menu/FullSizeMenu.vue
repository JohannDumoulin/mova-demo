<template>
    <div class="h-screen w-screen fixed top-0 left-0 z-10 flex text-white opacity-0 pointer-events-none js-header__fullSizeMenu">
        <img src="~assets/img/close.svg"
             alt="Close icon"
             class="absolute top-8 right-12 cursor-pointer hover:scale-125 transition-transform ease-in-out
                    duration-300 z-30 opacity-0 pointer-events-none js-header__fullSizeMenu-close"
             @click="toggleState">

        <div class="h-full w-7/10 bg-primary-base flex header__fullSizeMenu-maskReverse">
            <DesktopContentLeft/>

            <DesktopContentRight/>
        </div>

        <div class="h-full w-3/10 -ml-1">
            <div class="h-full header__fullSizeMenu-mask">
                <img src="~assets/img/menu_side.jpg" alt="Beer" class="h-full object-cover js-header__fullSizeMenu-img">
            </div>
        </div>
    </div>
</template>

<script setup>
import useFullSizeMenu from '/plugins/fullSizeMenu.client'

const { getState, toggleState } = useFullSizeMenu()
</script>

<style scoped>

</style>
