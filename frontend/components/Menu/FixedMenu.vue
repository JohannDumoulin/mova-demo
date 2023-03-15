<template>
    <div class="bg-white/40 fixed z-10 flex gap-6 py-3 px-6 rounded-full border border-primary-hover
                border-px top-6 right-6 -translate-y-full2 js-fixedMenu transition-transform duration-500 header__headerMenu">
        <div class="flex text-primary-base cursor-pointer">
            <i class="icon-shopping-bag text-xl"></i>
            <p class="ml-1 text-xs mt-0.5">0</p>
        </div>

        <div class="flex flex-col gap-2.5 justify-center group w-14 overflow-hidden cursor-pointer" @click="toggleState">
            <div class="h-px w-full bg-primary-base group-hover:translate-x-4 transition ease-in-out duration-500"></div>
            <div class="h-px w-full bg-primary-base group-hover:-translate-x-4 transition ease-in-out duration-500"></div>
        </div>
    </div>
</template>

<script setup>
import useFullSizeMenu from '/plugins/fullSizeMenu.client'

const { toggleState } = useFullSizeMenu()
</script>

<style scoped>

</style>
