import { IBase } from '@/shared/api/base.interface'
import { IProduct } from '@/shared/api/product/product.interface'

export interface ISize extends IBase {
	size: number
	products: IProduct[]
}
