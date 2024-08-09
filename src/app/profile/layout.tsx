'use client'
import { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from '@/app/profile/layout.module.scss'
import Link from 'next/link'
import { FaRegUser } from 'react-icons/fa'
import { GrUserSettings } from 'react-icons/gr'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { MdOutlineLockOpen } from 'react-icons/md'
import { IoExitOutline } from 'react-icons/io5'
import { Nav } from '@/features/nav/Nav'
import { navHome, navProfile } from '@/features/nav/nav.types'
import { usePathname, useRouter } from 'next/navigation'
import { authApi } from '@/shared/api/auth/auth.api'
import { useQueryClient } from '@tanstack/react-query'

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
	const pathname = usePathname()
	const router = useRouter()
	const queryClient = useQueryClient()
	const nav = new Nav([navHome(false), navProfile(true)])

	const exitClickHandler = async () => {
		authApi.exitFromProfile()
		router.refresh()
		await queryClient.refetchQueries({ queryKey: ['basket', 'checkAuth'] })
	}

	return (
		<div className={classNames(styles.wrapper, 'container')}>
			{nav.getHtmlItems()}
			<h2>Личный кабинет</h2>
			<div className={styles.container}>
				<div className={styles.sidebar}>
					<Link
						href='/profile'
						className={classNames(pathname == '/profile' && styles.active)}
					>
						<FaRegUser
							size={19}
							color={pathname === '/profile' ? '#121214' : '#B0B0B0'}
						/>
						<span>Мой аккаунт</span>
					</Link>
					<Link
						href='/profile/edit'
						className={classNames(pathname == '/profile/edit' && styles.active)}
					>
						<GrUserSettings
							size={19}
							color={pathname === '/profile/edit' ? '#121214' : '#B0B0B0'}
						/>
						<span>Редактировать профиль</span>
					</Link>
					<Link
						href='/profile/history-order'
						className={classNames(
							pathname == '/profile/history-order' && styles.active
						)}
					>
						<RxHamburgerMenu
							size={19}
							color={
								pathname === '/profile/history-order' ? '#121214' : '#B0B0B0'
							}
						/>
						<span>История заказов</span>
					</Link>
					<Link
						href='/profile/orders'
						className={classNames(
							pathname == '/profile/orders' && styles.active
						)}
					>
						<AiOutlineUnorderedList
							size={19}
							color={pathname === '/profile/orders' ? '#121214' : '#B0B0B0'}
						/>
						<span>Мои заказы</span>
					</Link>
					<Link
						href='/profile/password'
						className={classNames(
							pathname == '/profile/password' && styles.active
						)}
					>
						<MdOutlineLockOpen
							size={19}
							color={pathname === '/profile/password' ? '#121214' : '#B0B0B0'}
						/>
						<span>Пароль</span>
					</Link>
					<Link href='/' onClick={exitClickHandler}>
						<IoExitOutline size={19} color='#B0B0B0' />
						<span>Выход</span>
					</Link>
				</div>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	)
}

export default ProfileLayout
