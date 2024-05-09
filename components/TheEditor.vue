<script setup lang="ts">
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'

const props = defineProps<{
    content: string
}>()

const emit = defineEmits<{
    loaded: [editor: ClassicEditor]
}>()

const instance = useEditor()
const editorRef = ref<ClassicEditor | null>(null)

const isDestroyed = ref<boolean>(false)
const selectedText = ref<string>('')

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

function getSelected() {
    // if (instance.value) return
    const model = instance.value!.model
    const selection = model.document.selection!

    const range = selection.getFirstRange()!
    const items = range?.getItems()
    const placeholder = ` <span class="placeholder-text"> __________________________ </span> `

    for (const item of items!) {
        selectedText.value = item.data
        console.log({ item })
    }

    if (!range) return
    model.change((writer) => {
        const insertPosition = model.document.selection.getLastPosition()
        const text = writer.createText('text_inserted... - ')

        model.insertContent(text, insertPosition)
    })
}

onBeforeUnmount(() => {
    // document.removeEventListener('loaded', onReady)
})
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
