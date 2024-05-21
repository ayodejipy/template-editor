<script setup lang="ts">
import type { IEntityButton, IEntity, ITemplate } from '~/types'
import { useTemplateStore } from '~/store/template'

const templateStore = useTemplateStore()
const { getTemplates } = templateStore
</script>

<template>
    <section class="min-h-screen grid grid-cols-10 gap-4 mt-4">
        <div class="col-span-8 h-full">
            <div v-for="template in getTemplates()" :key="template.title">
                {{ template.title }}
            </div>
        </div>
    </section>
</template>
