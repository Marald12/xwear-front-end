import axiosMain from '@/shared/axios/axios.main'
import {
	IProduct,
	IProductParams
} from '@/shared/api/product/product.interface'

export const productApi = {
	async findAll(queries?: IProductParams) {
		try {
			const request = await axiosMain.get<IProduct[]>('/product', {
				params: { ...queries }
			})

			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async findOne(id: string) {
		try {
			const request = await axiosMain.get<IProduct>(`/product/${id}`)

			return request.data
		} catch (e) {
			console.log(e)
		}
	}
}
