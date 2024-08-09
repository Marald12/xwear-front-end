import { FC } from 'react'
import styles from './DetailInfo.module.scss'
import { IDetailInfoOfProductPageProps } from '../detailInfoOfProduct.interface'

const DetailInfo: FC<IDetailInfoOfProductPageProps> = ({ product }) => {
	return (
		<div className={styles.container}>
			<div className={styles.block}>
				<span>Артикул</span>
				<span>{product._id}</span>
			</div>
			<div className={styles.block}>
				<span>Категория</span>
				<span>{product.category.title}</span>
			</div>
			<div className={styles.block}>
				<span>Бренд</span>
				<span>{product.brand.title}</span>
			</div>
			<div className={styles.block}>
				<span>Модель</span>
				<span>{product.model.title}</span>
			</div>
		</div>
	)
}

export default DetailInfo
