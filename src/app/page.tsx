import { NextPage } from 'next'
import styles from './page.module.scss'
import MainSlider from '@/widgets/home-page/main-slider/MainSlider'
import SneakerList from '@/widgets/home-page/sneaker-list/SneakerList'
import HomeAboutUs from '@/widgets/home-page/about-us/HomeAboutUs'

const HomePage: NextPage = async () => {
	return (
		<div className={styles.container}>
			<MainSlider />
			<SneakerList url='661adaa5508e0f6a8bfa0ba7' name='Обувь' />
			<SneakerList url='661f5d44a38e7e9c9f3873b7' name='Одежда' />
			<SneakerList url='661f618ea38e7e9c9f3874a1' name='Аксессуары' />
			<HomeAboutUs />
		</div>
	)
}

export default HomePage
