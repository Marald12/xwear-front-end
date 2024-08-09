import { IBase } from '@/shared/api/base.interface'
import { IProduct } from '@/shared/api/product/product.interface'
import { IBasket } from '@/shared/api/basket/basket.interface'
import { IOrder } from '@/shared/api/order/order.interface'

export interface IUser extends IBase {
	email: string
	likesProducts: IProduct[]
	basket: IBasket
	orders: IOrder[]
	name?: string
	surname?: string
	phoneNumber?: string
}

export interface IUpdatePasswordBody {
	oldPassword: string
	newPassword: string
}

export interface IRepeatPasswordBody {
	email: string
}

export interface IUpdatePasswordFromTokenBody {
	token: string
	password: string
}

export interface IUpdateUserBody {
	name?: string
	surname?: string
	phoneNumber?: string
}

export interface ITotalPriceAndCountItemsInBasket {
	countItemsInBasket: number
	totalPrice: number
}
