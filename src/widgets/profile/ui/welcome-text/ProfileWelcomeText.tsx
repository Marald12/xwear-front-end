'use client'
import { FC } from 'react'
import styles from './ProfileWelcomeText.module.scss'
import { useQuery } from '@tanstack/react-query'
import { authApi } from '@/shared/api/auth/auth.api'

const ProfileWelcomeText: FC = () => {
	const { data } = useQuery({
		queryKey: ['checkAuth'],
		queryFn: () => authApi.checkAuth()
	})

	return (
		<>
			{data && (
				<h3 className={styles.helloText}>
					Здравствуйте, {data.name ? data.name : data.email.split('@')[0]}!
				</h3>
			)}
		</>
	)
}

export default ProfileWelcomeText
