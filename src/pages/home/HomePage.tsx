import { NextPage } from 'next'
import styles from './HomePage.module.scss'
import MainSlider from '@/pages/home/ui/main-slider/MainSlider'
import SneakerList from '@/pages/home/ui/sneaker-list/SneakerList'
import ApiProvider from '@/features/api-provider/ApiProvider'
import HomeAboutUs from '@/pages/home/ui/about-us/HomeAboutUs'

const HomePage: NextPage = async () => {
	return (
		<ApiProvider>
			<div className={styles.container}>
				<MainSlider />
				<SneakerList url='661adaa5508e0f6a8bfa0ba7' name='Обувь' />
				<SneakerList url='661f5d44a38e7e9c9f3873b7' name='Одежда' />
				<SneakerList url='661f618ea38e7e9c9f3874a1' name='Аксессуары' />
				<HomeAboutUs />
			</div>
		</ApiProvider>
	)
}

export default HomePage
