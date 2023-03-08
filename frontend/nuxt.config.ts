// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/css/index.scss"],
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    plugins: [
        '~/plugins/lax.client.js',
        '~/plugins/lenis.client.js',
        '~/plugins/popmotion.client.js',
    ]
})
