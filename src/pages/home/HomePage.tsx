import { NextPage } from 'next'
import styles from './HomePage.module.scss'
import MainSlider from '@/pages/home/ui/main-slider/MainSlider'

const HomePage: NextPage = () => {
	return (
		<div className={styles.container}>
			<MainSlider />
		</div>
	)
}

export default HomePage
