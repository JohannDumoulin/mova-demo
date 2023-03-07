<template>
    <header class="p-6 flex justify-between text-white absolute w-full z-10">
        <img src="~assets/img/logo_white.svg" alt="">

        <div class="flex gap-8">
            <nav>
                <ul class="flex gap-8 text-lg">
                    <li><NuxtLink to="/brewery">Brewery</NuxtLink></li>
                    <li><NuxtLink to="/restaurant">Restaurant</NuxtLink></li>
                    <li><NuxtLink to="/shop">Shop</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                </ul>
            </nav>

            <i class="icon-shopping-bag text-xl"></i>

            <div>Menu</div>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>

</style>
