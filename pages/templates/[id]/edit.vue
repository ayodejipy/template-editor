<script setup lang="ts">
import type { IEntityButton, IEntity, ITemplate } from '~/types'
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'
import { useTemplateStore } from '~/stores/template'
import { useStorage } from '@vueuse/core'
import { nanoid } from 'nanoid'

const templateStore = useTemplateStore()

const { instance, config, initializeEditor } = useEditor()

const entities = ref<IEntityButton[]>([
    {
        name: 'Name',
        icon: 'i-material-symbols-person',
        reference: 'name',
        type: 'string',
    },
    {
        name: 'Email',
        icon: 'i-material-symbols-alternate-email',
        reference: 'email',
        type: 'string',
    },
    {
        name: 'Phone',
        icon: 'i-material-symbols-call',
        reference: 'phoneNumber',
        type: 'number',
    },
    {
        name: 'Date',
        icon: 'i-material-symbols-date-range-outline',
        reference: 'date',
        type: 'date',
    },
])

// editor data
const content = ref<string>('<p>Content of the editor.</p>')
const selectedContext = ref<string>('')

const newTemplate = ref<ITemplate>({
    id: nanoid(10),
    title: 'Template - 001',
    content: content.value,
    entities: [],
    created_at: new Date(),
    updated_at: new Date(),
})

async function onReady(editor: ClassicEditor) {
    // console.log('--- editor --- ', editor)
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

function grabSelection(entity: IEntityButton): void {
    let selectedText: string = ''
    const model = instance.value!.model
    const selection = model.document.selection!

    const range = selection.getFirstRange()!
    const items = range?.getItems()

    for (const item of items) {
        const { data } = item as { data: string }
        selectedContext.value = data
        selectedText = data
    }

    if (range) {
        model.change((writer) => {
            // const insertPosition = model.document.selection.getLastPosition()
            const insertPosition = model.document.selection.getLastRange()
            const highlight =
                '&nbsp;&nbsp;<span style="background-color: yellow" data-model="firstName"> ____________________ </span>&nbsp;&nbsp;'

            const editor = instance.value!.data
            const viewFragment = editor.processor.toView(highlight)
            const modelFragment = editor.toModel(viewFragment)

            model.insertContent(modelFragment, insertPosition)
        })

        const entityObject: IEntity = {
            title: entity.name,
            reference: entity.reference,
            model: entity.reference,
            replacedText: selectedText,
            type: entity.type,
        }
        // get updated text
        newTemplate.value.content = instance.value!.getData()
        newTemplate.value.entities.push(entityObject)
    }
}

const onSelectEntity = (entity: IEntityButton) => {
    console.log({ entity })

    grabSelection(entity)
}

function saveTemplate() {
    templateStore.addTemplate(newTemplate.value)
}
</script>

<template>
    <section class="min-h-screen grid grid-cols-10 gap-4 mt-4">
        <div class="col-span-8 h-full">
            <TheEditor :config :content @loaded="onReady" />
        </div>

        <div class="col-span-2 flex flex-col border border-gray-300">
            <div class="bg-gray-200 text-gray-800 font-semibold py-2 px-4">
                Select Entity - [--- {{ selectedContext }}]
            </div>

            <div class="p-2 grid grid-cols-3 gap-4">
                <TheEntity
                    v-for="entity in entities"
                    :key="entity.reference"
                    :entity
                    @clicked="onSelectEntity"
                />
            </div>
            <div class="w-full mt-3">
                <button
                    type="button"
                    class="w-full py-3 bg-yellow-400 font-semibold"
                    @click="saveTemplate"
                >
                    Save template
                </button>
            </div>
        </div>
    </section>
</template>
