import type { ITemplate, IEntity } from "~/types"
import { useStorage } from '@vueuse/core'

export const useTemplateStore = defineStore('templates', () => {
	const STORAGE_KEY = 'nuxt-templates'
	const templates = useStorage<ITemplate[]>(STORAGE_KEY, [])
	// const templates = ref<ITemplate[]>(store.value.templates)

	function addTemplate(template: ITemplate) {
		templates.value.push(template)
	}

	function getTemplates() {
        return templates.value
	}

	function addEntityToTemplate(template: ITemplate, entity: IEntity) {
		// templates.value. push(template)
		console.log(template)
		console.log(entity)
	}

	function storeTemplates() {
		// templates.value = useStorage(STORAGE_KEY, { templates: templates.value })
	}

	return { templates, addTemplate, getTemplates, addEntityToTemplate, storeTemplates }
})