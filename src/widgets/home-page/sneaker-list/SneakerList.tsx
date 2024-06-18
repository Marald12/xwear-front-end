'use client'
import { FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import ItemList from '@/shared/ui/item-list/ItemList'
import styles from './SneakerList.module.scss'
import MoreProductsButton from '@/shared/ui/buttons/more-products-button/MoreProductsButton'
import { productApi } from '@/shared/api/product/product.api'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from '@/shared/components/ui/pagination'

interface ISneakerListProps {
	url: string
	name: string
}

const SneakerList: FC<ISneakerListProps> = ({ url, name }) => {
	const [limit, setLimit] = useState(4)
	const [page, setPage] = useState(0)
	const pages: number[] = []

	const { data: products } = useQuery({
		queryKey: [url, page],
		queryFn: () =>
			productApi.findAll({
				mainCategory: url,
				limit,
				skip: page * limit
			})
	})

	const { data: productsNoPagination } = useQuery({
		queryKey: [url + name],
		queryFn: () =>
			productApi.findAll({
				mainCategory: url
			})
	})

	if (productsNoPagination) {
		for (let i = 0; i < Math.ceil(productsNoPagination.length / limit); i++) {
			pages.push(i)
		}
	}

	const clickLeftHandler = () => {
		if (page === 0) return
		setPage(prev => prev - 1)
	}

	const clickRightHandler = () => {
		if (productsNoPagination) {
			if (pages[pages.length - 1] === page) return
		}
		setPage(prev => prev + 1)
	}

	return (
		<div className={styles.sneakerList}>
			<div className={styles.header}>
				<h2>{name}</h2>
				<MoreProductsButton href={`/products?category=${url}`} />
			</div>
			{products && <ItemList products={products} />}
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious onClick={clickLeftHandler} />
					</PaginationItem>
					<PaginationItem>
						{pages.map(item => (
							<PaginationLink key={item} onClick={() => setPage(item)}>
								{item + 1}
							</PaginationLink>
						))}
					</PaginationItem>
					<PaginationItem>
						<PaginationNext onClick={clickRightHandler} />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	)
}

export default SneakerList
