// https://nuxt.com/docs/api/configuration/nuxt-config
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5'

export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    modules: [
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@nuxt/ui',
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
    ],
    vite: {
        plugins: [
            ckeditor5({
                theme: require.resolve('@ckeditor/ckeditor5-theme-lark'),
            }),
        ],
    },
})
