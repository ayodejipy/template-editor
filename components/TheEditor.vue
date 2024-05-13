<script setup lang="ts">
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'

const props = defineProps<{
    content: string
    config: Record<never, never>
}>()

const emit = defineEmits<{
    loaded: [editor: ClassicEditor]
}>()

const editorRef = ref<ClassicEditor | null>(null)

const isDestroyed = ref<boolean>(false)

const content = computed<string>(() => props.content)

const config = reactive({
    editor: ClassicEditor,
    options: {
        plugins: [...EditorPlugins],

        toolbar: {
            items: ['heading', '|', 'bold', 'italic', 'link', 'undo', 'redo'],
        },
    },
})

function onReady(editor: ClassicEditor) {
    emit('loaded', editor)
}

function onDestroy(destroyed: ClassicEditor) {
    isDestroyed.value = !isDestroyed.value
}

// onBeforeUnmount(() => {
//     window.removeEventListener('loaded', onReady)
// })
</script>

<template>
    <div v-if="isDestroyed" class="bg-gray-300 p-4 font-semibold text-xl">
        Editor instance destroyed...reload page
    </div>
    <template v-else>
        <ckeditor
            ref="editorRef"
            :editor="config.editor"
            v-model="content"
            :config="config.options"
            @ready="onReady"
            @destroy="onDestroy"
        ></ckeditor>
    </template>
</template>
