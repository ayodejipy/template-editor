<script setup lang="ts">
import type { IEntity } from '~/types'
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'

const { instance, config, initializeEditor } = useEditor()
const selectedText = ref<string>('')

const entities = ref<IEntity[]>([
    {
        name: 'Name',
        icon: 'i-material-symbols-person',
        reference: 'name',
    },
    {
        name: 'Email',
        icon: 'i-material-symbols-alternate-email',
        reference: 'email',
    },
    {
        name: 'Phone',
        icon: 'i-material-symbols-call',
        reference: 'phoneNumber',
    },
    {
        name: 'Date',
        icon: 'i-material-symbols-date-range-outline',
        reference: 'date',
    },
])

// editor data
const content = ref<string>('<p>Content of the editor.</p>')

async function onReady(editor: ClassicEditor) {
    initializeEditor(editor)
    console.log(instance.value)
    editor.editing.view.change((writer) => {
        writer.setStyle(
            'min-height',
            '100vh',
            editor.editing.view.document.getRoot()!
        )
    })

    const childrenElements = Array.from(editor.ui.view.element!.children)
    childrenElements[2].classList.add('min-h-screen')

    // update when next DOM updates
    await nextTick()
}

function grabSelection() {
    const model = instance.value!.model
    const selection = model.document.selection!

    const range = selection.getFirstRange()!
    const items = range?.getItems()
    const placeholder = ` <span class="placeholder-text"> __________________________ </span> `

    for (const item of items) {
        selectedText.value = item.data as unknown as string
        console.log({ item })
    }

    if (!range) return
    model.change((writer) => {
        const insertPosition = model.document.selection.getLastPosition()
        const text = writer.createText('text_inserted... - ')

        model.insertContent(text, insertPosition)
    })
}
</script>

<template>
    <section class="min-h-screen grid grid-cols-10 gap-4 mt-4">
        <div class="col-span-8 h-full">
            <TheEditor :config :content @loaded="onReady" />
            {{ instance }}
        </div>

        <div class="col-span-2 flex flex-col border border-gray-300">
            <div class="bg-gray-200 text-gray-800 font-semibold py-2 px-4">
                Select Entity
            </div>
            <div class="p-2 grid grid-cols-3 gap-4">
                <button
                    type="button"
                    class="mb-4 bg-blue-600 rounded py-2"
                    @click="grabSelection"
                >
                    getSelected text
                </button>
                {{ '|- ' + selectedText }}
                <TheEntity
                    v-for="entity in entities"
                    :key="entity.reference"
                    :entity
                />
            </div>
        </div>
    </section>
</template>
