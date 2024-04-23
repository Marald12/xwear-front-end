import axiosMain from '@/shared/axios/axios.main'
import { IBrand } from '@/shared/api/brand/brand.interface'

export const brandApi = {
	async findAll() {
		try {
			const request = await axiosMain.get<IBrand[]>('/brand')

			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async findOne(id: string) {
		try {
			const request = await axiosMain.get<IBrand>(`/brand/${id}`)

			return request.data
		} catch (e) {
			console.log(e)
		}
	}
}
