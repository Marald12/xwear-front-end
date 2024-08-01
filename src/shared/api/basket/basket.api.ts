import axiosMain from '@/shared/axios/axios.main'
import { IBasket, IBasketItem } from '@/shared/api/basket/basket.interface'
import { toast } from 'react-toastify'

export const basketApi = {
	async findAll() {
		try {
			const request = await axiosMain.get<IBasket[]>('/basket')

			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async findOne(id: string) {
		try {
			const request = await axiosMain.get<IBasket>(`/basket/${id}`)

			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async addItem(id: string) {
		try {
			const request = await axiosMain.post<IBasketItem>(`/item/add/${id}`)

			toast.success('Товар добавлен в корзину')
			
			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async removeItem(id: string) {
		try {
			const request = await axiosMain.post<IBasketItem>(`/item/remove/${id}`)

			toast.success('Товар удалён из корзины')

			return request.data
		} catch (e) {
			console.log(e)
		}
	}
}
