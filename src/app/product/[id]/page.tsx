'use client'
import { productApi } from '@/shared/api/product/product.api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { NextPage } from 'next'
import { ISingleProductPage } from './page.interface'
import { Nav } from '@/features/nav/Nav'
import {
	navCatalogItems,
	navHome,
	navMainCategory,
	navProduct,
	navProductCategory
} from '@/features/nav/nav.types'
import Loader from '@/shared/ui/loader/Loader'
import styles from './page.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import SizeButton from '@/shared/ui/size-button/SizeButton'
import Button from '@/shared/ui/buttons/button/Button'
import classNames from 'classnames'
import DetailInfoOfProduct from '@/widgets/product-page/detail-info-of-product/DetaiInfoOfProduct'
import SneakerList from '@/widgets/home-page/sneaker-list/SneakerList'
import { basketApi } from '@/shared/api/basket/basket.api'
import { useAuth } from '@/shared/hooks/useAuth'
import { toast } from 'react-toastify'

const SinglePageProduct: NextPage<ISingleProductPage> = ({ params }) => {
	const queryClient = useQueryClient()
	const { data, isLoading } = useQuery({
		queryKey: ['product'],
		queryFn: () => productApi.findOne(params.id)
	})

	const { mutate } = useMutation({
		mutationFn: (id: string) => basketApi.addItem(id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['basket'] })
	})

	const nav = new Nav([
		navHome(false),
		navCatalogItems(false),
		navMainCategory(false, data?.maincategory),
		navProductCategory(false, data?.category),
		navProduct(true, data)
	])
	const [activeImageIndex, setActiveImageIndex] = useState(0)
	const [activeSize, setActiveSize] = useState(37.5)
	const isAuth = useAuth()

	const clickHandler = (index: number) => {
		setActiveImageIndex(index)
	}

	const clickAddToBasketHandler = async () => {
		if (isAuth) mutate(data!._id)
		else toast.error('Вы не авторизованы либо перезагрузите страницу')
	}

	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{nav.getHtmlItems()}
					<div className={styles.container}>
						<div className={styles.columnSneaker}>
							<div className={styles.images}>
								<div className={styles.bigImage}>
									<Image
										src={String(data?.images[activeImageIndex])}
										alt={String(data?.images[activeImageIndex])}
										width={664}
										height={489}
									/>
								</div>
								{data!.images.length > 1 && (
									<>
										<div className={styles.smallImages}>
											{data?.images?.map((_, index) => (
												<div
													key={index}
													onClick={() => clickHandler(index)}
													className={classNames(
														styles.image,
														activeImageIndex === index && styles.imageActive
													)}
												>
													<Image
														src={String(data?.images[index])}
														alt={String(data?.images[index])}
														width={105}
														height={96}
													/>
												</div>
											))}
										</div>
										<div className={styles.downImageLine} />
									</>
								)}
							</div>
						</div>
						<div className={styles.columnPrice}>
							<h1>{data?.title}</h1>
							<div className={styles.sizes}>
								<span className={styles.sizesTitle}>EU размеры:</span>
								<div>
									{data?.sizes.map(size => (
										<SizeButton
											key={size._id}
											size={size.size}
											className={classNames(
												size.size === activeSize && styles.sizeActive
											)}
											onClick={() => setActiveSize(size.size)}
										/>
									))}
								</div>
							</div>
							<div className={styles.priceBlock}>
								<div className={styles.priceText}>
									<span>{data?.price} UAH</span>
									<span>Размер - {activeSize}</span>
								</div>
								<Button onClick={clickAddToBasketHandler}>
									Добавить в корзину
								</Button>
							</div>
						</div>
					</div>
					<DetailInfoOfProduct product={data!} />
					<SneakerList
						url='661adaa5508e0f6a8bfa0ba7'
						name='Интересные предложения'
					/>
				</>
			)}
		</div>
	)
}

export default SinglePageProduct
