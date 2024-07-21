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
import { brandApi } from '@/shared/api/brand/brand.api'
import { modelApi } from '@/shared/api/model/model.api'
import { RiCloseFill } from 'react-icons/ri'
import { categoryApi } from '@/shared/api/category/category.api'
import SizeButton from '@/shared/ui/size-button/SizeButton'

const ProductsPage: NextPage = () => {
	const queryClient = useQueryClient()
	const searchParams = useSearchParams()
	const nav = new Nav([navHome(false), navCatalogItems(true)])
	const [categoryId, setCategoryId] = useState<string | null>(
		searchParams.get('mainCategory' || '')
	)
	const [brandId, setBrandId] = useState<string | null>(null)
	const [modelId, setModelId] = useState<string | null>(null)
	const [size, setSize] = useState<number | null>(null)
	const [mainCategoryId, setMainCategoryId] = useState<string | null>(
		searchParams.get('category') || ''
	)

	const category = useQuery({
		queryKey: ['categoryFilter'],
		queryFn: () => productCategoryApi.findAll()
	})

	const sizes = useQuery({
		queryKey: ['sizeFilter'],
		queryFn: () => sizeApi.findAll()
	})

	const brands = useQuery({
		queryKey: ['brandFilter'],
		queryFn: () => brandApi.findAll()
	})

	const models = useQuery({
		queryKey: ['modelFilter'],
		queryFn: () => modelApi.findAll()
	})

	const mainCategory = useQuery({
		queryKey: ['mainCategoryFilter'],
		queryFn: () => categoryApi.findOne(mainCategoryId || '')
	})

	const products = useQuery({
		queryKey: ['productsList'],
		queryFn: () =>
			productApi.findAll({
				category: categoryId,
				size,
				mainCategory: mainCategoryId,
				brand: brandId,
				model: modelId
			})
	})

	const invalidateTagsAndRefetchProducts = async () => {
		await queryClient.invalidateQueries({
			queryKey: ['productsList']
		})
		await products.refetch()
	}

	const clickCategoryHandler = async (id: string) => {
		setCategoryId(id)
		await invalidateTagsAndRefetchProducts()
	}

	const clickBrandHandler = async (id: string) => {
		setBrandId(id)
		await invalidateTagsAndRefetchProducts()
	}

	const clickModelHandler = async (id: string) => {
		setModelId(id)
		await invalidateTagsAndRefetchProducts()
	}

	const clickSizeHandler = async (size: number) => {
		setSize(size)
		await invalidateTagsAndRefetchProducts()
	}

	const resetAllFilters = async () => {
		setSize(null)
		setCategoryId(null)
		setBrandId(null)
		setModelId(null)
		setMainCategoryId(null)
		await invalidateTagsAndRefetchProducts()
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
											<SizeButton
												key={item._id}
												onClick={() => clickSizeHandler(item.size)}
												className={classNames(
													size == item.size && styles.sizeActive
												)}
												size={item.size}
											/>
										))}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
					<div className={styles.block}>
						<Accordion type='single' collapsible className='w-full'>
							<AccordionItem value='categories'>
								<AccordionTrigger>Бренды</AccordionTrigger>
								{brands.data &&
									brands.data.map(item => (
										<AccordionContent key={item._id} className={styles.link}>
											<span onClick={() => clickBrandHandler(item._id)}>
												{item.title}
											</span>
										</AccordionContent>
									))}
							</AccordionItem>
						</Accordion>
					</div>
					<div className={styles.block}>
						<Accordion type='single' collapsible className='w-full'>
							<AccordionItem value='categories'>
								<AccordionTrigger>Модель</AccordionTrigger>
								{models.data &&
									models.data.map(item => (
										<AccordionContent key={item._id} className={styles.link}>
											<span onClick={() => clickModelHandler(item._id)}>
												{item.title}
											</span>
										</AccordionContent>
									))}
							</AccordionItem>
						</Accordion>
					</div>
					<button className={styles.resetFilters} onClick={resetAllFilters}>
						<RiCloseFill size={21} />
						Сбросить все фильтры
					</button>
				</div>
				<div className={styles.products}>
					<h2>Каталог</h2>
					<div className={styles.list}>
						{products.data &&
							products.data.map(product => (
								<ProductItem key={product._id} product={product} />
							))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductsPage
