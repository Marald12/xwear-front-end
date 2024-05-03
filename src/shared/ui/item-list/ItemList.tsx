import { FC } from 'react'
import { IItemListProps } from '@/shared/ui/item-list/item-list.interface'
import ProductItem from '@/shared/ui/product-item/ProductItem'
import styles from './ItemList.module.scss'

const ItemList: FC<IItemListProps> = ({ products }) => {
	return (
		<div className={styles.itemList}>
			<div className={styles.list}>
				{products.map(product => (
					<ProductItem product={product} key={product._id} />
				))}
			</div>
		</div>
	)
}

export default ItemList
