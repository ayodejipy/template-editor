<script setup lang="ts">
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'

const editorRef = ref(null)
const content = ref<string>('<p>Content of the editor.</p>')

const config = reactive({
    editor: ClassicEditor,
    options: {
        plugins: [...EditorPlugins],

        toolbar: {
            items: ['bold', 'italic', 'link', 'undo', 'redo'],
        },
    },
})

function onReady(editor: any) {
    // Insert the toolbar before the editable area.
    console.log({ editor })
}

// onMounted(() => console.log(editorRef.value))
</script>

<template>
    <ckeditor
        ref="editorRef"
        :editor="config.editor"
        v-model="content"
        :config="config.options"
        @ready="onReady"
    ></ckeditor>
</template>
