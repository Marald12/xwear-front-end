import { IBase } from '@/shared/api/base.interface'
import { IUser } from '@/shared/api/user/user.interface'
import { IBasketItem } from '@/shared/api/basket/basket.interface'

export interface IOrder extends IBase {
	country: string
	street: string
	city: string
	region: string
	numberHouse: string
	postcode: string
	status: string
	user: IUser
	items: IBasketItem[]
}

export interface ICreateOrderBody {
	country: string
	street: string
	city: string
	region: string
	postcode: string
	numberHouse: string
	companyName?: string
}
