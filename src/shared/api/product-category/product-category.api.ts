import axiosMain from '@/shared/axios/axios.main'
import { IProductCategory } from '@/shared/api/product-category/product-category.interface'

export const productCategoryApi = {
	async findAll() {
		try {
			const request =
				await axiosMain.get<IProductCategory[]>('product-category')

			return request.data
		} catch (e) {
			console.log(e)
		}
	},
	async findOne(id: string) {
		try {
			const request = await axiosMain.get<IProductCategory>(
				`product-category/${id}`
			)

			return request.data
		} catch (e) {
			console.log(e)
		}
	}
}
