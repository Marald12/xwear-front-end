'use client'
import { FC, useState } from 'react'
import styles from './DetailInfoOfProduct.module.scss'
import { IDetailInfoOfProductPageProps } from './detailInfoOfProduct.interface'
import classNames from 'classnames'
import DetailInfo from './details/DetailInfo'
import DeliveryInfo from './delivery/DeliveryInfo'

const DetailInfoOfProduct: FC<IDetailInfoOfProductPageProps> = ({
	product
}) => {
	const headerInfo = ['Детали', 'Доставка', 'Оплата', 'FAQ']
	const [activeInfo, setActiveInfo] = useState(headerInfo[0])

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				{headerInfo.map(title => (
					<div
						key={title}
						className={classNames(title === activeInfo && styles.active)}
					>
						<span onClick={() => setActiveInfo(title)}>{title}</span>
					</div>
				))}
			</div>
			<div className={styles.content}>
				{activeInfo === headerInfo[0] && <DetailInfo product={product} />}
				{activeInfo === headerInfo[1] && <DeliveryInfo />}
			</div>
		</div>
	)
}

export default DetailInfoOfProduct
