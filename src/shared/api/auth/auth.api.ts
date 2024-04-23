import axiosMain from '@/shared/axios/axios.main'
import { IAuth, IAuthBody } from '@/shared/api/auth/auth.interface'
import { cookies } from 'next/headers'
import { setCookie } from 'cookies-next'

export const authApi = {
	async login(body: IAuthBody) {
		try {
			const response = await axiosMain.post<IAuth>('/auth/login', body)

			setCookie('token', response.data.token, { cookies })

			return response.data
		} catch (e) {
			console.log(e)
		}
	},

	async register(body: IAuthBody) {
		try {
			const response = await axiosMain.post<IAuth>('/auth/register', body)

			setCookie('token', response.data.token, { cookies })

			return response.data
		} catch (e) {
			console.log(e)
		}
	},

	async checkAuth() {
		const response = await axiosMain.get('/user/get-profile')

		return response.data
	}
}
