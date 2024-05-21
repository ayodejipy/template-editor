<script setup lang="ts">
const route = useRoute()

const topbarLinks = [
    [
        {
            label: 'Workspace',
            to: '/workspace',
        },
        {
            label: 'Recent',
            to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`,
        },
        {
            label: 'Templates',
            to: '/templates',
        },
    ],
    [
        {
            label: 'Dunk',
            avatar: {
                src: 'https://avatars.githubusercontent.com/u/739984?v=4',
            },
            badge: 100,
        },
    ],
]

const navlinks = [
    [
        {
            label: 'Dashboard',
            icon: 'i-heroicons-home',
            to: '/',
        },
        {
            label: 'Library',
            icon: 'i-heroicons-home',
            to: `${route.path.startsWith('/lib') ? '/dev' : ''}/library`,
        },
        {
            label: 'Templates',
            icon: 'i-heroicons-home',
            to: '/templates',
        },
        {
            label: 'Contacts',
            icon: 'i-heroicons-home',
            to: '/templates',
        },
    ],
]
</script>

<template>
    <header class="w-full">
        <UHorizontalNavigation
            :links="topbarLinks"
            class="md:px-8 items-center border-b border-gray-200 dark:border-gray-800"
        />

        <div class="md:px-8 w-full flex items-center my-6">
            <h1 class="font-semibold text-3xl">Dashboard</h1>
        </div>

        <UHorizontalNavigation
            :links="navlinks"
            class="md:px-8 py-3 items-center"
        />
    </header>
</template>
