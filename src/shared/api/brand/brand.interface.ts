import { IBase } from '@/shared/api/base.interface'
import { IModel } from '@/shared/api/model/model.interface'
import { IProduct } from '@/shared/api/product/product.interface'

export interface IBrand extends IBase {
	title: string
	models: IModel[]
	products: IProduct[]
}
