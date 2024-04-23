import { FC } from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/components/ui/dropdown-menu'
import styles from './HeaderCategories.module.scss'
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'
import { QueryClient } from '@tanstack/react-query'
import { categoryApi } from '@/shared/api/category/category.api'

const HeaderCategories: FC = async () => {
	const queryClient = new QueryClient()

	const data = await queryClient.fetchQuery({
		queryKey: ['categories'],
		queryFn: () => categoryApi.findAll()
	})

	return (
		<>
			{data &&
				data.map(item => (
					<DropdownMenu key={item._id}>
						<DropdownMenuTrigger className={styles.dropdown_trigger}>
							{item.title}{' '}
							<span className={styles.dropdown_arrow}>
								<IoIosArrowDown color='#59595a' />
							</span>
						</DropdownMenuTrigger>
						<DropdownMenuContent className={styles.dropdown_content}>
							{item.categories.map(category => (
								<DropdownMenuItem
									key={category._id}
									className={styles.dropdown_item}
								>
									<Link href={`/products?category=${category._id}`}>
										{category.title}
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				))}
		</>
	)
}

export default HeaderCategories
