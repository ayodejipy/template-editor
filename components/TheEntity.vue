<script setup lang="ts">
import type { IEntity } from '~/types'

defineProps<{
    entity: IEntity
}>()
</script>

<template>
    <button
        type="button"
        class="py-2 flex gap-1 flex-col items-center transition duration-150 rounded-md hover:border hover:border-gray-300"
    >
        <Icon :name="entity.icon" size="1.5em" class="text-gray-500" />
        <span class="font-semibold text-gray-800 text-xs">
            {{ entity.name }}
        </span>
    </button>
</template>
