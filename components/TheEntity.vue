<script setup lang="ts">
import type { IEntityButton } from '~/types'

defineProps<{
    entity: IEntityButton
    disabled?: boolean
}>()

const emit = defineEmits<{
    clicked: [ value: IEntityButton ]
}>()

function onClicked(entity: IEntityButton | Event) {
    emit('clicked', entity as unknown as IEntityButton)
}

onUnmounted(() => { document.removeEventListener('clicked', onClicked) })
</script>

<template>
    <button
        type="button"
        class="py-2 flex gap-1 flex-col items-center transition duration-150 rounded-md hover:border hover:border-gray-300"
        :data-id="entity.reference"
        :disabled="disabled"
        @click="onClicked(entity)"
    >
        <Icon :name="entity.icon" size="1.5em" class="text-gray-500" />
        <span class="font-semibold text-gray-800 text-xs">
            {{ entity.name }}
        </span>
    </button>
</template>
