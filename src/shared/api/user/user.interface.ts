import { IBase } from '@/shared/api/base.interface'
import { IProduct } from '@/shared/api/product/product.interface'

export interface IUser extends IBase {
	email: string
	likesProducts: IProduct[]
	basket: any
	orders: any[]
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
