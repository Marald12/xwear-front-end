import axiosMain from '@/shared/axios/axios.main'
import {
	IRepeatPasswordBody,
	ITotalPriceAndCountItemsInBasket,
	IUpdatePasswordBody,
	IUpdatePasswordFromTokenBody,
	IUpdateUserBody,
	IUser
} from '@/shared/api/user/user.interface'
import { toast } from 'react-toastify'

export const userApi = {
	async getOne(id: string) {
		try {
			const request = await axiosMain.get<IUser>(`/user/${id}`)

			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async getProfile() {
		try {
			const request = await axiosMain.get<IUser>(`/user/get-profile`)

			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async getProfileInProfile() {
		try {
			const response = await axiosMain.get<IUser>('/user/get-profile')

			return response.data
		} catch (e: any) {
			if (e.response.data.statusCode === 401) {
				return false
			}
		}
	},
	async getTotalPriceAndCountItemsInBasket() {
		try {
			const request = await axiosMain.get<ITotalPriceAndCountItemsInBasket>(
				`/user/get-total-price-and-count-items-in-basket`
			)

			return request.data
		} catch (e) {}
	},
	async updatePassword(body: IUpdatePasswordBody) {
		try {
			const request = await axiosMain.put<string>(`/user/update-password`, body)

			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async restorePassword(body: IRepeatPasswordBody) {
		try {
			const request = await axiosMain.post<IUser>(
				`/user/restore-password`,
				body
			)

			return request.data
		} catch (e: any) {
			if (e.response.data.message) toast.error(e.response.data.message)
			else console.log(e)
		}
	},
	async updatePasswordFromToken(body: IUpdatePasswordFromTokenBody) {
		try {
			const request = await axiosMain.put<string>(
				`/user/update-password-from-token`,
				body
			)

			return request.data
		} catch (e: any) {
			if (e.response.data.message) toast.error(e.response.data.message)
			else console.log(e)
		}
	},
	async addProductToLikes(id: string) {
		try {
			const request = await axiosMain.post<IUser>(
				`/user/add-and-remove-like-product/${id}`
			)

			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async updateUser(id: string, body: IUpdateUserBody) {
		try {
			const request = await axiosMain.patch<IUser>(`/user/${id}`, body)

			return request.data
		} catch (e) {
			console.log(e)
		}
	}
}
