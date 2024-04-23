import { authApi } from '@/shared/api/auth/auth.api'

export const isAuth = async () => {
	try {
		const auth = await authApi.checkAuth()

		if (!auth) return false
		if (auth) return true
	} catch (e) {}
}
