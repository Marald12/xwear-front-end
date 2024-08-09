'use client'
import { FC, useState } from 'react'
import styles from './DetailInfoOfProduct.module.scss'
import { IDetailInfoOfProductPageProps } from './detailInfoOfProduct.interface'
import classNames from 'classnames'
import DetailInfo from './details/DetailInfo'
import DeliveryInfo from './delivery/DeliveryInfo'
import PayInfo from '@/widgets/product/detail-info-of-product/pay/PayInfo'
import FaqInfo from '@/widgets/product/detail-info-of-product/faq/FaqInfo'

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
				{activeInfo === headerInfo[2] && <PayInfo />}
				{activeInfo === headerInfo[3] && <FaqInfo />}
			</div>
		</div>
	)
}

export default DetailInfoOfProduct
