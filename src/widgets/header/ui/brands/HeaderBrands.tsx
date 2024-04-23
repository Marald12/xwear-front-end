import { FC } from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/components/ui/dropdown-menu'
import styles from '../categories/HeaderCategories.module.scss'
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'
import { QueryClient } from '@tanstack/react-query'
import { brandApi } from '@/shared/api/brand/brand.api'

const HeaderBrands: FC = async () => {
	const queryClient = new QueryClient()

	const data = await queryClient.fetchQuery({
		queryKey: ['brands'],
		queryFn: () => brandApi.findAll()
	})

	return (
		<>
			{data && (
				<DropdownMenu>
					<DropdownMenuTrigger className={styles.dropdown_trigger}>
						Бренды
						<span className={styles.dropdown_arrow}>
							<IoIosArrowDown color='#59595a' />
						</span>
					</DropdownMenuTrigger>
					<DropdownMenuContent className={styles.dropdown_content}>
						{data.map(item => (
							<DropdownMenuItem key={item._id} className={styles.dropdown_item}>
								<Link href={`/products?brand=${item._id}`}>{item.title}</Link>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</>
	)
}

export default HeaderBrands
