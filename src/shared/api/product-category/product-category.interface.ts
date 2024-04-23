import { IBase } from '@/shared/api/base.interface'
import { ICategory } from '@/shared/api/category/category.interface'
import { IProduct } from '@/shared/api/product/product.interface'

export interface IProductCategory extends IBase {
	title: string
	category: ICategory
	products: IProduct[]
}
