'use client'
import { authApi } from '@/shared/api/auth/auth.api'
import { useQuery } from '@tanstack/react-query'

export const useAuth = () => {
	const { data } = useQuery({
		queryKey: ['checkAuth'],
		queryFn: () => authApi.checkAuth()
	})

	if (data) return true
	if (!data) return false
}
