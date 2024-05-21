import type { IEntity } from "./entity"

export interface ITemplate {
	id?: string
	title: string
	content: string
	entities: IEntity[]
	created_at: Date | string
	updated_at: Date | string
}