import axiosMain from '@/shared/axios/axios.main'
import { IAuth, IAuthBody } from '@/shared/api/auth/auth.interface'
import { toast } from 'react-toastify'
import { setCookie } from 'cookies-next'

export const authApi = {
	async login(body: IAuthBody) {
		try {
			const response = await axiosMain.post<IAuth>('/auth/login', body)

			setCookie('token', response.data.token)
			toast.success('Авторизация прошла успешна')

			return response.data
		} catch (e: any) {
			if (e.response.data.message) toast.error(e.response.data.message)
			else console.log(e)
		}
	},

	async register(body: IAuthBody) {
		try {
			const response = await axiosMain.post<IAuth>('/auth/register', body)

			setCookie('token', response.data.token)

			return response.data
		} catch (e: any) {
			if (e.response.data.message) toast.error(e.response.data.message)
			else console.log(e)
		}
	},

	async checkAuth() {
		try {
			const response = await axiosMain.get('/user/get-profile')

			return response.data
		} catch (e) {
		}
	}
}
