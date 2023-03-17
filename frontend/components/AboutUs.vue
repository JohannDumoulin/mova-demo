<template>
    <section class="bg-primary-dark text-white pt-32 pb-24 px-8">
        <p class="uppercase text-center text-secondary-base/80">About us</p>
        <h2 class="font-heading uppercase text-8xl text-center">we don't brew beer, we brew communications</h2>

        <div class="mt-24 flex w-full">
            <div class="flex w-3/4 gap-x-8">
                <div class="h-full w-2/5 overflow-hidden">
                    <img src="~assets/img/aboutUs/about_us_1.jpeg" alt="Men in the brewery" class="h-full object-cover lax-about-us scale-150">
                </div>

                <div class="w-3/5">
                    <div class="w-3/5 overflow-hidden">
                        <img src="~assets/img/aboutUs/about_us_2.jpeg" alt="Women in the brewery" class="object-cover h-full w-full scale-125">
                    </div>

                    <p class="mt-8 w-3/5">Our goal is to become a stimulus for communication and a driver of beer culture in our hometown. To do this, we help different people find a common language, giving them an incentive to get closer and get to know each other.</p>

                    <p class="uppercase mt-24 w-4/5 text-4xl leading-tight">THE MAIN FOR US IS TO MAKE AS MANY CONNECTIONS BETWEEN PEOPLE AS POSSIBLE WITH THE HELP OF OUR PRODUCT</p>
                </div>
            </div>

            <div class="relative w-1/4 pl-4 flex flex-col">
                <span class="block absolute w-px h-full top-0 left-0 bg-secondary-base/40"></span>

                <p>MOVA is a team that built an entire project around the idea of becoming something more than just a brewery.</p>

                <p class="mt-4">We also organize annual festivals and conduct educational projects in Ukrainian institutions and bartending schools, telling about the history in the beer museum of our city.</p>

                <NuxtLink to="/"
                          class="inline-flex justify-between items-center mt-4 border border-secondary-base
                                 rounded-full text-lg px-6 py-2 w-full">
                    More about us
                    <i class="icon-arrow-thin-right"></i>
                </NuxtLink>

                <div class="mt-auto">
                    <img src="~assets/img/aboutUs/about_us_3.jpeg" alt="Hands with seeds">
                </div>
            </div>
        </div>

    </section>

</template>

<script setup>

</script>

<style scoped>

</style>
