'use client'

import { FC } from 'react'
import { FaRegUser } from 'react-icons/fa'
import Link from 'next/link'
import { useAuth } from '@/shared/hooks/useAuth'

const AuthLink: FC = () => {
	const isAuth = useAuth()

	return (
		<Link href={isAuth ? '/profile' : '/auth'}>
			<FaRegUser size={17.6} />
		</Link>
	)
}

export default AuthLink
