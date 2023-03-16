// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: [
        { path: '~/components/Header' },
        { path: '~/components/Menu' },
        { path: '~/components/Menu/FullSizeMenu' },
        '~/components'
    ],
    css: ["@/assets/css/index.scss"],
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    plugins: [
        '~/plugins/appearFixedMenu.client.js',
        '~/plugins/fullSizeMenu.client.js',
        '~/plugins/headerMenuAnimation.client.js',
        '~/plugins/lax.client.js',
        '~/plugins/lenis.client.js',
        '~/plugins/popmotion.client.js',
    ]
})
