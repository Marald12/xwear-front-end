import { IBase } from '@/shared/api/base.interface'
import { IBrand } from '@/shared/api/brand/brand.interface'
import { IProduct } from '@/shared/api/product/product.interface'

export interface IModel extends IBase {
	title: string
	brand: IBrand
	products: IProduct[]
}
