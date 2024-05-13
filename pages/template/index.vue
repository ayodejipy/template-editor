<script setup lang="ts">
import type { IEntity } from '~/types'
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'

const { instance, config, initializeEditor } = useEditor()

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
const selectedText = ref<string>('')

const disableEntitiesButtons = computed<boolean>(() => !!selectedText.value)

async function onReady(editor: ClassicEditor) {
    // console.log("--- editor --- ", instance.value)
    editor.editing.view.change((writer) => {
        writer.setStyle(
            'min-height',
            '100vh',
            editor.editing.view.document.getRoot()!
        )
    })

    const childrenElements = Array.from(editor.ui.view.element!.children)
    childrenElements[2].classList.add('min-h-screen')

    initializeEditor(editor)

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
        selectedText.value = item.data
        console.log({ item })
    }

    if (range) {
        model.change((writer) => {
            // const insertPosition = model.document.selection.getLastPosition()
            const insertPosition = model.document.selection.getLastRange()
            const text = writer.createText('text_inserted... - ')

            model.insertContent(text, insertPosition)
        })
    }
}

const onSelectEntity = (entity: string) => {
    console.log({ entity })

    if (entity === 'name') {
        console.log('-- entity name ---')
        grabSelection()
    }
}
</script>

<template>
    <section class="min-h-screen grid grid-cols-10 gap-4 mt-4">
        <div class="col-span-8 h-full">
            <TheEditor :config :content @loaded="onReady" />
        </div>

        <div class="col-span-2 flex flex-col border border-gray-300">
            <div class="bg-gray-200 text-gray-800 font-semibold py-2 px-4">
                Select Entity - [--- {{ selectedText }}]
            </div>
            <div class="p-2 grid grid-cols-3 gap-4">
                <TheEntity
                    v-for="entity in entities"
                    :key="entity.reference"
                    :entity
                    :disabled="disableEntitiesButtons"
                    @clicked="onSelectEntity"
                />
            </div>
        </div>
    </section>
</template>
