import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'

export default function () {
	const instance = ref<ClassicEditor | null>(null)
	const initializeEditor = (editor: ClassicEditor) => {
		instance.value = editor
	}
    return { instance, initializeEditor }
}
