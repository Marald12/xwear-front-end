'use client'

import { useQuery } from '@tanstack/react-query'
import { authApi } from '@/shared/api/auth/auth.api'

export const useAuthProfile = () => {
	const { data } = useQuery({
		queryKey: ['checkAuth'],
		queryFn: () => authApi.checkAuth()
	})

	return data
}
