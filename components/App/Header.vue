<script setup lang="ts">
const route = useRoute()

const { isLoggedIn, user } = storeToRefs(useUserStore())

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
            to: '/contacts',
        },
    ],
]
</script>

<template>
    <header class="w-full">
        <div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 md:px-8">
            <UHorizontalNavigation
                :links="topbarLinks"
                class="items-center"
            />

            <AppUserDropdown />
        </div>

        <div class="md:px-8 w-full flex items-center my-6">
            <h1 class="font-semibold text-3xl">Dashboard</h1>
        </div>

        <UHorizontalNavigation
            :links="navlinks"
            class="md:px-8 py-3 items-center"
        />
    </header>
</template>
