'use client'
import { FC } from 'react'
import styles from './ProfileOrders.module.scss'
import { useQuery } from '@tanstack/react-query'
import { userApi } from '@/shared/api/user/user.api'
import dayjs from 'dayjs'

const ProfileOrders: FC = () => {
	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userApi.getProfile()
	})

	return (
		<div className={styles.wrapper}>
			<h4>Текущие заказы</h4>
			<div className={styles.column}>
				<div className={styles.title}>
					<span>Номер</span>
					<span>Дата</span>
					<span>Статус</span>
					<span>Итог</span>
				</div>
				{data &&
					data.orders.map(item => (
						<div key={item._id}>
							<span>#{item._id.slice(-4)}</span>
							<span>{dayjs(item.createdAt).format('D/M/YYYY')}</span>
							<span>{item.status}</span>
							<span>
								{item.items.map(i => (
									<b key={i._id}>
										{new Intl.NumberFormat('ru-RU').format(
											i.product.price * i.count
										)}{' '}
										UAH
									</b>
								))}
							</span>
						</div>
					))}
			</div>
		</div>
	)
}

export default ProfileOrders
