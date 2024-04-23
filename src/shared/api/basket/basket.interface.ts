import { IBase } from '@/shared/api/base.interface'
import { IUser } from '@/shared/api/user/user.interface'
import { IProduct } from '@/shared/api/product/product.interface'

export interface IBasket extends IBase {
	user: IUser
	items: IBasketItem[]
}

export interface IBasketItem extends IBase {
	basket: IBasket
	count: number
	product: IProduct
}
