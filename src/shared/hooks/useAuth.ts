'use client'
import { authApi } from '@/shared/api/auth/auth.api'
import { useQuery } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'

export const useAuth = () => {
	const { data } = useQuery({
		queryKey: ['checkAuth'],
		queryFn: () => authApi.checkAuth()
	})

	const token = getCookie('token')

	if (token) {
		if (data) return true
		if (!data) return false
	} else {
		return false
	}
}
