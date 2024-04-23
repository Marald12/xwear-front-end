import { IBase } from '@/shared/api/base.interface'
import { IProduct } from '@/shared/api/product/product.interface'
import { IProductCategory } from '@/shared/api/product-category/product-category.interface'

export interface ICategory extends IBase {
	title: string
	categories: IProductCategory[]
	products: IProduct[]
}
