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

const HeaderInfo: FC = () => {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger className={styles.dropdown_trigger}>
					Информация
					<span className={styles.dropdown_arrow}>
						<IoIosArrowDown color='#59595a' />
					</span>
				</DropdownMenuTrigger>
				<DropdownMenuContent className={styles.dropdown_content}>
					<DropdownMenuItem className={styles.dropdown_item}>
						<Link href={`/blog`}>Наш блог</Link>
					</DropdownMenuItem>
					<DropdownMenuItem className={styles.dropdown_item}>
						<Link href={`/`}>Наши контакты</Link>
					</DropdownMenuItem>
					<DropdownMenuItem className={styles.dropdown_item}>
						<Link href={`/`}>Доставка</Link>
					</DropdownMenuItem>
					<DropdownMenuItem className={styles.dropdown_item}>
						<Link href={`/`}>Оплата</Link>
					</DropdownMenuItem>
					<DropdownMenuItem className={styles.dropdown_item}>
						<Link href={`/`}>FAQ</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}

export default HeaderInfo
