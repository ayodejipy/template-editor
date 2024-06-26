import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'

// export type TEditor = typeof ClassicEditor

export default function () {
    const instance = ref<ClassicEditor | null>(null)
    const config = reactive({
        editor: ClassicEditor,
        options: {
            plugins: [...EditorPlugins()],

            toolbar: {
                items: [
                    'undo',
                    'redo',
                    // '|',
                    // 'sourceEditing',
                    '|',
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'link',
                ],
            },

            htmlSupport: {
                allow: [
                    {
                        name: /^(div|span|p)*/,
                        styles: true,
                        class: false,
                        attributes: {
                            'data-model': true
                        },
                    },
                ],
            },
        },
    })

    const initializeEditor = (editor: ClassicEditor) => {
        instance.value = editor
    }

    return { instance, config, initializeEditor }
}
