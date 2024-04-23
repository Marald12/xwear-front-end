import axiosMain from '@/shared/axios/axios.main'
import { ICreateOrderBody, IOrder } from '@/shared/api/order/order.interface'

export const orderApi = {
	async findAll() {
		try {
			const request = await axiosMain.get<IOrder[]>('/order')

			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async findOne(id: string) {
		try {
			const request = await axiosMain.get<IOrder>(`/order/${id}`)

			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async create(body: ICreateOrderBody) {
		try {
			const request = await axiosMain.post<IOrder>('/order', body)

			return request.data
		} catch (e) {
			console.log(e)
		}
	}
}
