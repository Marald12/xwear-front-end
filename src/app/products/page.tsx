'use client'
import { NextPage } from 'next'
import styles from './page.module.scss'
import { Nav } from '@/features/nav/Nav'
import { navCatalogItems, navHome } from '@/features/nav/nav.types'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/shared/components/ui/accordion'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { productCategoryApi } from '@/shared/api/product-category/product-category.api'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { sizeApi } from '@/shared/api/size/size.api'
import { productApi } from '@/shared/api/product/product.api'
import ProductItem from '@/shared/ui/product-item/ProductItem'
import classNames from 'classnames'

const ProductsPage: NextPage = () => {
	const queryClient = useQueryClient()
	const searchParams = useSearchParams()
	const nav = new Nav([navHome(false), navCatalogItems(true)])
	const [categoryId, setCategoryId] = useState<string | null>(null)
	const [size, setSize] = useState<number | null>(null)

	const category = useQuery({
		queryKey: ['categoryFilter'],
		queryFn: () => productCategoryApi.findAll()
	})

	const sizes = useQuery({
		queryKey: ['sizeFilter'],
		queryFn: () => sizeApi.findAll()
	})

	const products = useQuery({
		queryKey: ['productsList'],
		queryFn: () =>
			productApi.findAll({
				category: categoryId,
				size,
				mainCategory: searchParams.get('category')
			})
	})

	const clickCategoryHandler = async (id: string) => {
		setCategoryId(id)
		await queryClient.invalidateQueries({
			queryKey: ['productsList']
		})
		await products.refetch()
	}

	const clickSizeHandler = async (size: number) => {
		setSize(size)
		await queryClient.invalidateQueries({
			queryKey: ['sizeFilter']
		})
		await products.refetch()
	}

	return (
		<div className={styles.container}>
			{nav.getHtmlItems()}
			<div className={styles.wrapper}>
				<div className={styles.filter}>
					<div className={styles.block}>
						<Accordion type='single' collapsible className='w-full'>
							<AccordionItem value='categories'>
								<AccordionTrigger>Категории</AccordionTrigger>
								{category.data &&
									category.data.map(item => (
										<AccordionContent key={item._id} className={styles.link}>
											<span onClick={() => clickCategoryHandler(item._id)}>
												{item.title}
											</span>
										</AccordionContent>
									))}
							</AccordionItem>
						</Accordion>
					</div>
					<div className={styles.blockTwo}>
						<Accordion type='single' collapsible className='w-full'>
							<AccordionItem value='sizes'>
								<AccordionTrigger>Размеры (EU)</AccordionTrigger>
								<AccordionContent className={styles.size}>
									{sizes.data &&
										sizes.data.map(item => (
											<button
												key={item._id}
												onClick={() => clickSizeHandler(item.size)}
												className={classNames(
													size == item.size && styles.sizeActive
												)}
											>
												{item.size}
											</button>
										))}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
				<div className={styles.products}>
					{products.data &&
						products.data.map(product => (
							<ProductItem key={product._id} product={product} />
						))}
				</div>
			</div>
		</div>
	)
}

export default ProductsPage
