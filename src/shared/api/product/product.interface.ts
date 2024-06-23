import { IBase } from '@/shared/api/base.interface'
import { ISize } from '@/shared/api/size/size.interface'
import { IBrand } from '@/shared/api/brand/brand.interface'
import { IModel } from '@/shared/api/model/model.interface'
import { ICategory } from '@/shared/api/category/category.interface'
import { IProductCategory } from '@/shared/api/product-category/product-category.interface'

export interface IProduct extends IBase {
	title: string
	images: string[]
	price: number
	sizes: ISize[]
	brand: IBrand
	model: IModel
	maincategory: ICategory
	category: IProductCategory
}

export interface IProductParams {
	searchTerm?: string | null
	size?: number | null
	model?: string | null
	brand?: string | null
	category?: string | null
	mainCategory?: string | null
	skip?: number | null
	limit?: number | null
}
