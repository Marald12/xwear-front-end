import { FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logoPath from '@/assets/images/logo.svg'
import { FaRegStar, FaSearch } from 'react-icons/fa'
import HeaderInfo from '@/widgets/header/ui/info/HeaderInfo'
import HeaderBrands from '@/widgets/header/ui/brands/HeaderBrands'
import Burger from '@/widgets/header/ui/burger/Burger'
import HeaderCategories from '@/widgets/header/ui/categories/HeaderCategories'
import AuthLink from '@/widgets/header/ui/auth-link/AuthLink'
import HeaderBasket from '@/widgets/header/ui/basket/HeaderBasket'

const Header: FC = () => {
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
					<AuthLink />
					<HeaderBasket />
				</div>
			</div>
		</header>
	)
}

export default Header
