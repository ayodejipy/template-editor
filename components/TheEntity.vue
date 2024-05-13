<script setup lang="ts">
import type { IEntity } from '~/types'

defineProps<{
    entity: IEntity
    disabled: boolean
}>()

const emit = defineEmits<{
    clicked: [ value: string ]
}>()

function onClicked(reference: string | Event) {
    emit('clicked', reference as unknown as string)
}

onUnmounted(() => { document.removeEventListener('clicked', onClicked) })
</script>

<template>
    <button
        type="button"
        class="py-2 flex gap-1 flex-col items-center transition duration-150 rounded-md hover:border hover:border-gray-300"
        :disabled="disabled"
        @click="onClicked(entity.reference)"
    >
        <Icon :name="entity.icon" size="1.5em" class="text-gray-500" />
        <span class="font-semibold text-gray-800 text-xs">
            {{ entity.name }}
        </span>
    </button>
</template>
