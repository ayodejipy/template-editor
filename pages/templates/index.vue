<script setup lang="ts">
import type { IEntityButton, IEntity, ITemplate } from '~/types'
import { useTemplateStore } from '~/stores/template'

const templateStore = useTemplateStore()
const { getTemplates } = templateStore
</script>

<template>
    <section class="w-full">
        <div class="flex items-center justify-between py-4">
            <h2 class="text-2xl font-semibold">Your templates</h2>
            <button
                type="button"
                class="rounded-md bg-green-500 text-white font-medium px-6 py-2"
            >
                New template
            </button>
        </div>

        <section class="grid grid-cols-6 gap-4 mt-4">
            <article v-for="template in getTemplates()" :key="template.title">
                <div class="shadow-md flex items-center rounded-md">
                    <div class="p-4 flex flex-col gap-4">
                        <NuxtLink
                            :to="`/${template.title}/edit`"
                            class="font-semibold text-md"
                        >
                            {{ template.title }}
                        </NuxtLink>

                        <span class="text-sm text-gray-600"
                            >Status: draft
                        </span>
                    </div>
                </div>
            </article>
        </section>
    </section>
</template>
