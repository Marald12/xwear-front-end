import axiosMain from '@/shared/axios/axios.main'
import { ICategory } from '@/shared/api/category/category.interface'

export const categoryApi = {
	async findAll() {
		try {
			const response = await axiosMain.get<ICategory[]>('/category')

			return response.data
		} catch (e) {
			console.log(e)
		}
	},
	async findOne(id: string) {
		try {
			const response = await axiosMain.get<ICategory>(`/category/${id}`)

			return response.data
		} catch (e) {
			console.log(e)
		}
	}
}
