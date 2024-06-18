'use client'
import imagePathMainSliderOne from '@/assets/images/main-slider/main-slider-one.jpg'
import imagePathMainSliderTwo from '@/assets/images/main-slider/main-slider-two.png'
import styles from './MainSlider.module.scss'
import Button from '@/shared/ui/buttons/button/Button'
import { useRouter } from 'next/navigation'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'
import classNames from 'classnames'

const MainSlider = () => {
	const router = useRouter()
	const [isActiveSlider, setIsActiveSlider] = useState(false)

	const useProductClickHandler = () => {
		router.push('/products')
	}

	return (
		<div
			style={{
				backgroundImage: `url("${isActiveSlider ? imagePathMainSliderTwo.src : imagePathMainSliderOne.src}")`
			}}
			className={styles.container}
		>
			<h1>
				Широкий <br /> ассортимент <br /> Одежды
			</h1>
			<p>
				{isActiveSlider
					? 'В нашем каталоге представлена одежда от известных брендов. Мы гарантируем только высокое качество товаров.'
					: 'Одежда от известные брендов у нас в каталоге. Только качественные вещи.'}
			</p>
			<Button onClick={useProductClickHandler}>Перейти в каталог</Button>
			<div className={styles.buttons}>
				<button
					onClick={() => setIsActiveSlider(false)}
					className={classNames(
						styles.button,
						!isActiveSlider && styles.silver
					)}
				>
					<IoIosArrowBack size={27} />
				</button>
				<button
					onClick={() => setIsActiveSlider(true)}
					className={classNames(styles.button, isActiveSlider && styles.silver)}
				>
					<IoIosArrowForward size={27} />
				</button>
			</div>
		</div>
	)
}

export default MainSlider
