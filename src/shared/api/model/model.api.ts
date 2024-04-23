import axiosMain from '@/shared/axios/axios.main'
import { IModel } from '@/shared/api/model/model.interface'

export const modelApi = {
	async findAll() {
		try {
			const request = await axiosMain.get<IModel[]>('/model')

			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async findOne(id: string) {
		try {
			const request = await axiosMain.get<IModel>(`/model/${id}`)

			return request.data
		} catch (e) {
			console.log(e)
		}
	}
}
