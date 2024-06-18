import { FC } from 'react'
import styles from './HomeAboutUs.module.scss'
import Image from 'next/image'
import boxImage from '@/assets/images/home-about-us/box.svg'
import memberImage from '@/assets/images/home-about-us/member.svg'
import okImage from '@/assets/images/home-about-us/ok.svg'

const HomeAboutUs: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.text}>
				<h1>
					О интернет-
					<br />
					магазине xwear
				</h1>
				<p>
					Команда XWEAR предоставляет услугу доставки только оригинальных
					товаров c крупнейшего китайского маркетплейса Poizon, чтобы наши
					клиенты экономили более 40% на каждой покупке. Работаем без
					посредников, благодаря чему можем предоставлять лучшую цену. Быстрая,
					бесплатная доставка. Сайт, на котором можно будет удобно оформить
					покупку, не скачивая китайское мобильное приложение Poizon, с удобной
					фильтрацией огромного количества товаров, а так же с возможностью
					сразу увидеть окончательную цену товара.
				</p>
			</div>
			<div className={styles.criteria}>
				<div className={styles.column}>
					<Image src={boxImage} alt={boxImage} />
					<div>
						<h2>Бесплатная доставка до Украине</h2>
						<p>Доставим вам заказ абсолютно бесплатно до Украины</p>
					</div>
				</div>
				<div className={styles.column}>
					<Image src={memberImage} alt={memberImage} />
					<div>
						<h2>мы Работаем без посредников</h2>
						<p>Между нами и клиентом нет третьего лишнего</p>
					</div>
				</div>
				<div className={styles.column}>
					<Image src={okImage} alt={okImage} />
					<div>
						<h2>простота в заказе и использовании</h2>
						<p>Для заказа с Poizon не нужно никаких приложений</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeAboutUs
