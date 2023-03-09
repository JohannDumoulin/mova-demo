<template>
    <div class="pt-96 relative">
        <img src="~assets/img/hero_header_hp.jpg" alt="Cheers mova beer" class="absolute top-0 h-4/5 w-full object-cover lax-fade-y">

        <div class="custom-gradient absolute top-0 h-full w-full"></div>

        <h1 class="font-heading uppercase text-9xl flex flex-col items-center text-white relative">
            <span>taste. meet.</span>
            <span>talk</span>
        </h1>

        <div class="flex justify-center gap-4 text-white relative mt-16">
            <a href="#" v-for="card in cards" class="group">
                <div class="bg-primary-base w-heroCards h-heroCards p-8 rounded-lg flex flex-col justify-between group-hover:bg-primary-hover">
                    <h3 class="uppercase font-heading text-6xl">{{ card.title }}</h3>
                    <div class="flex items-end gap-16">
                        <p>{{ card.desc }}</p>
                        <i class="icon-arrow-thin-right text-xl group-hover:translate-x-3 transition ease-in-out duration-500"></i>
                    </div>
                </div>
            </a>
        </div>
    </div>



</template>

<script setup>
const cards = [
    {
        title: 'mova brewing',
        desc: 'Our goal is to find a common language between people with the help of beer.'
    },
    {
        title: 'restaurant beer space',
        desc: 'This space is about optimism, simple and concise beer-inspired cuisine, change, lively atmosphere and the place of a person in the community.'
    },
    {
        title: 'beer shop',
        desc: 'There are no such cases where you can not find a common language with someone. There is only a wrong beer for your was conversation.'
    }
]
</script>

<style scoped>
.custom-gradient {
    background: linear-gradient(1turn,#0f1d18 29.29%,rgba(15,29,24,.79) 43.44%,rgba(15,29,24,.47) 57.34%,rgba(15,29,24,.15) 73.89%,rgba(15,29,24,0) 92.83%);
}
</style>
