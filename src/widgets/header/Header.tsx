import { FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logoPath from '@/assets/images/logo.svg'
import { FaRegStar, FaRegUser, FaSearch } from 'react-icons/fa'
import HeaderCategories from '@/widgets/header/ui/categories/HeaderCategories'
import HeaderBrands from '@/widgets/header/ui/brands/HeaderBrands'
import HeaderInfo from '@/widgets/header/ui/info/HeaderInfo'
import { MdOutlineShoppingCart } from 'react-icons/md'
import Burger from '@/widgets/header/ui/burger/Burger'

const Header: FC = async () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link href='/'>
						<Image
							src={logoPath}
							alt='Logo image'
							priority
							style={{ minWidth: '84px' }}
						/>
					</Link>
					<Burger />
				</div>
				<div className={styles.links}>
					<HeaderCategories />
					<HeaderBrands />
					<Link href='/'>Расчет стоимости</Link>
					<HeaderInfo />
				</div>
				<div className={styles.icons}>
					<Link href='/products' className={styles.search}>
						<FaSearch size={17.6} />
					</Link>
					<Link href='/profile/likes-products'>
						<FaRegStar size={17.6} />
					</Link>
					<Link href='/auth'>
						<FaRegUser size={17.6} />
					</Link>
					<div className={styles.basket}>
						<Link href='/profile/basket'>
							<MdOutlineShoppingCart size={17.6} />
						</Link>
						<span className={styles.price}>11 899 ₽</span>
						<span className={styles.count}>7</span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
