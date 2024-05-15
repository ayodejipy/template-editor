import type { IEntity } from "./entity"

export interface ITemplate {
	title: string
	content: string
	entities: IEntity[]
	created_at: string
	updated_at: string
}