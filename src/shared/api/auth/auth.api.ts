import axiosMain from '@/shared/axios/axios.main'
import { IAuth, IAuthBody } from '@/shared/api/auth/auth.interface'
import { toast } from 'react-toastify'
import { deleteCookie, setCookie } from 'cookies-next'
import { IUser } from '@/shared/api/user/user.interface'

export const authApi = {
	async login(body: IAuthBody, isRememberMe: boolean) {
		try {
			const response = await axiosMain.post<IAuth>('/auth/login', body)

			setCookie('token', response.data.token, {
				maxAge: isRememberMe ? 60 * 60 * 72 : 60 * 60 * 3
			})
			toast.success(
				'Авторизация прошла успешно, пожалуйста перезагрузите страницу'
			)

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
			toast.success(
				'Регистрация прошла успешно, пожалуйста перезагрузите страницу'
			)

			return response.data
		} catch (e: any) {
			if (e.response.data.message) toast.error(e.response.data.message)
			else console.log(e)
		}
	},
	async checkAuth() {
		try {
			const response = await axiosMain.get<IUser>('/user/get-profile')

			return response.data
		} catch (e) {}
	},
	exitFromProfile() {
		try {
			deleteCookie('token')
			return toast.success(
				'Вы успешно вышли из аккаунта, пожалуйста перезагрузите страницу'
			)
		} catch (e) {}
	}
}
