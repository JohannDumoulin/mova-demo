<template>
    <section class="bg-primary-dark text-white pt-32 pb-24 px-8">
        <p class="uppercase text-center text-secondary-base/80">About us</p>
        <h2 class="font-heading uppercase text-8xl text-center">we don't brew beer, we brew communications</h2>

        <div class="mt-24 flex w-full">
            <LeftPart/>
            <RightPart/>
        </div>
    </section>
</template>

<script setup lang="ts">
import LeftPart from './AboutUs/LeftPart.vue'
import RightPart from './AboutUs/RightPart.vue'
</script>

<style scoped>

</style>
