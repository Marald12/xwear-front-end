'use client'
import { FC } from 'react'
import styles from './HeaderBasket.module.scss'
import Link from 'next/link'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import { userApi } from '@/shared/api/user/user.api'

const HeaderBasket: FC = () => {
	const { data } = useQuery({
		queryKey: ['basket'],
		queryFn: () => userApi.getTotalPriceAndCountItemsInBasket()
	})

	return (
		<>
			{data && (
				<div className={styles.basket}>
					<Link href='/profile/basket'>
						<MdOutlineShoppingCart size={17.6} />
					</Link>
					<span className={styles.price}>
						{new Intl.NumberFormat('ru-RU').format(data.totalPrice)} UAH
					</span>
					<span className={styles.count}>{data.countItemsInBasket}</span>
				</div>
			)}
		</>
	)
}

export default HeaderBasket
