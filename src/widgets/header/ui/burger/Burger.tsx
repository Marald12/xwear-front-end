'use client'
import styles from './Burger.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import classNames from 'classnames'
import { IoClose } from 'react-icons/io5'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/shared/components/ui/accordion'
import { useQuery } from '@tanstack/react-query'
import { categoryApi } from '@/shared/api/category/category.api'
import Link from 'next/link'
import { brandApi } from '@/shared/api/brand/brand.api'

const Burger = () => {
	const [isActive, setIsActive] = useState(false)

	const { data: categories } = useQuery({
		queryKey: ['categories'],
		queryFn: () => categoryApi.findAll()
	})

	const { data: brands } = useQuery({
		queryKey: ['brands'],
		queryFn: () => brandApi.findAll()
	})

	return (
		<>
			<button className={styles.burger}>
				<GiHamburgerMenu size={21} onClick={() => setIsActive(true)} />
			</button>
			<div className={classNames(styles.popup, isActive && styles.active)}>
				<button className={styles.close} onClick={() => setIsActive(false)}>
					<IoClose size={31} />
				</button>
				<div className={styles.links}>
					{categories &&
						categories.map(item => (
							<Accordion type='single' collapsible key={item._id}>
								<AccordionItem value='item-1' className='border-none'>
									<AccordionTrigger className={styles.title}>
										{item.title}
									</AccordionTrigger>
									<AccordionContent>
										<ul className={styles.ul}>
											{item.categories.map(category => (
												<li key={category._id}>
													<Link href={`/products?category=${category._id}`}>
														{category.title}
													</Link>
												</li>
											))}
										</ul>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						))}

					<Accordion type='single' collapsible>
						<AccordionItem value='item-1' className='border-none'>
							<AccordionTrigger className={styles.title}>
								Бренды
							</AccordionTrigger>
							{brands && (
								<AccordionContent>
									<ul className={styles.ul}>
										{brands.map(item => (
											<li key={item._id}>
												<Link href={`/products?brand=${item._id}`}>
													{item.title}
												</Link>
											</li>
										))}
									</ul>
								</AccordionContent>
							)}
						</AccordionItem>
					</Accordion>
					<Link href='/' className={styles.title}>
						Расчет стоимости
					</Link>
					<Accordion type='single' collapsible>
						<AccordionItem value='item-1' className='border-none'>
							<AccordionTrigger>Информация</AccordionTrigger>
							<AccordionContent>
								<ul>
									<li className={styles.link}>
										<Link href={`/blog`}>Наш блог</Link>
									</li>
									<li className={styles.link}>
										<Link href={`/`}>Наши контакты</Link>
									</li>
									<li className={styles.link}>
										<Link href={`/`}>Доставка</Link>
									</li>
									<li className={styles.link}>
										<Link href={`/`}>Оплата</Link>
									</li>
									<li className={styles.link}>
										<Link href={`/`}>FAQ</Link>
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</>
	)
}

export default Burger
