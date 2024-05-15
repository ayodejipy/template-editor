import type { ITemplate } from "~/types"

export const useTemplateStore = defineStore('templates', () => {
	const templates = ref<ITemplate[]>([])

	return { templates }
})