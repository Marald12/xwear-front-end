import axiosMain from '@/shared/axios/axios.main'
import { ISize } from '@/shared/api/size/size.interface'

export const sizeApi = {
	async findAll() {
		try {
			const request = await axiosMain.get<ISize[]>('/size')

			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async findOne(id: string) {
		try {
			const request = await axiosMain.get<ISize>(`/size/${id}`)

			return request.data
		} catch (e) {
			console.log(e)
		}
	}
}
