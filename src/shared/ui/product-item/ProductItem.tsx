import { FC } from 'react'
import styles from './ProductItem.module.scss'
import { IProductItemProps } from '@/shared/ui/product-item/product-item.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegStar, FaStar } from 'react-icons/fa'

const ProductItem: FC<IProductItemProps> = ({ product }) => {
	return (
		<div className={styles.item}>
			<button className={styles.star}>
				{true ? <FaRegStar size={21} /> : <FaStar size={21} />}
			</button>
			<div className={styles.image}>
				<Image
					src={product.images[0]}
					alt={product.images[0]}
					width={318}
					height={318}
				/>
			</div>

			<Link href={`product/${product._id}`} className={styles.titles}>
				<h3>{product.title}</h3>
				<span>от {product.price} UAH</span>
			</Link>
		</div>
	)
}

export default ProductItem
