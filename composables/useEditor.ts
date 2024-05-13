import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'

// export interface IConfig {}

export default function () {
    const instance = shallowRef<ClassicEditor | null>(null)
    const config = reactive({
        editor: ClassicEditor,
        options: {
            plugins: [...EditorPlugins],

            toolbar: {
                items: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'link',
                    'undo',
                    'redo',
                ],
            },
        },
    })

    const initializeEditor = (editor: ClassicEditor) => {
        instance.value = editor
	}
	
    return { instance, config: markRaw(config), initializeEditor }
}
