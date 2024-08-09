'use client'
import { FC } from 'react'
import styles from './ProfileLinks.module.scss'
import Link from 'next/link'
import { FaRegUser } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { CiStar } from 'react-icons/ci'
import { GrUserSettings } from 'react-icons/gr'
import { MdOutlineLockOpen } from 'react-icons/md'
import { IoExitOutline } from 'react-icons/io5'
import { usePathname, useRouter } from 'next/navigation'
import { authApi } from '@/shared/api/auth/auth.api'

const ProfileLinks: FC = () => {
	const pathname = usePathname()
	const router = useRouter()
	const exitProfileClickHandler = () => {
		authApi.exitFromProfile()
		router.refresh()
	}

	return (
		<div className={styles.links}>
			<Link
				href='/profile'
				className={pathname === '/profile' ? styles.active : ''}
			>
				<FaRegUser
					size={30}
					color={pathname === '/profile' ? '#121214' : '#B0B0B0'}
				/>
				<h4>Мой профиль</h4>
			</Link>

			<Link
				href='/profile/history-order'
				className={pathname === '/profile/history-order' ? styles.active : ''}
			>
				<RxHamburgerMenu
					size={30}
					color={pathname === '/profile/history-order' ? '#121214' : '#B0B0B0'}
				/>
				<h4>Заказы</h4>
			</Link>
			<Link
				href='/profile/likes-products'
				className={pathname === '/profile/likes-products' ? styles.active : ''}
			>
				<CiStar
					size={40}
					color={pathname === '/profile/likes-products' ? '#121214' : '#B0B0B0'}
				/>
				<h4>Избранные товары</h4>
			</Link>
			<Link
				href='/profile/edit'
				className={pathname === '/profile/edit' ? styles.active : ''}
			>
				<GrUserSettings
					size={30}
					color={pathname === '/profile/edit' ? '#121214' : '#B0B0B0'}
				/>
				<h4>Редактировать профиль</h4>
			</Link>
			<Link
				href='/profile/password'
				className={pathname === '/profile/password' ? styles.active : ''}
			>
				<MdOutlineLockOpen
					size={30}
					color={pathname === '/profile/password' ? '#121214' : '#B0B0B0'}
				/>
				<h4>Изменить пароль</h4>
			</Link>
			<Link href='/' onClick={exitProfileClickHandler}>
				<IoExitOutline size={30} color='#B0B0B0' />
				<h4>Выход</h4>
			</Link>
		</div>
	)
}

export default ProfileLinks
