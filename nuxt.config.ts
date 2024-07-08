// https://nuxt.com/docs/api/configuration/nuxt-config
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5'

export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    runtimeConfig: {
        secret: process.env.NUXT_APP_SIDEBASE_SECRET,
        ghClientSecret: process.env.NUXT_APP_GH_CLIENT_SECRET,
        public: {
            ghClientID: process.env.NUXT_APP_GH_CLIENT_ID,
        },
    },
    modules: [
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@nuxt/ui',
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@vueuse/nuxt',
        '@sidebase/nuxt-auth',
    ],
    vite: {
        plugins: [
            ckeditor5({
                theme: require.resolve('@ckeditor/ckeditor5-theme-lark'),
            }),
        ],
    },
})