import { FC } from 'react'
import styles from './DeliveryInfo.module.scss'
import Image from 'next/image'
import checkImage from '@/assets/images/check.svg'

const DeliveryInfo: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.blockInfo}>
				<h4>Доставка</h4>
				<p>
					Команда XWEAR предоставляет услугу доставки только оригинальных
					товаров c крупнейшего китайского маркетплейса Poizon, чтобы наши
					клиенты экономили более 40% на каждой покупке. Мы ценим вас, поэтому
					постоянно работаем над логистикой, чтобы ускорить время доставки
					заказов! <br />
					<br /> Все заказы отправляются из-за границы с возможностью доставки в
					любой город России, перед отправкой товар всегда проходит проверку на
					подлиность.
					<br />
					<br /> Доставляем вещи из-за границы за 12-16 дней до России, включая
					день оплаты, с возможностью самовывоза из города Екатеринбург. В
					другие города отправляем СДЭКом.
					<br />
					<br /> СДЭК оплачивается при получении. Цена доставки зависит от
					города вашего проживания, в среднем это 350 ₽.
				</p>
			</div>
			<div className={styles.blockStatus}>
				<h4>В личном кабинете вы сможете отслеживать статус заказа:</h4>
				<div className={styles.statusContainer}>
					<div className={styles.status}>
						<Image src={checkImage} alt={checkImage} />
						<h5>В обработке</h5>
						<span>
							Заказ ожидает <br /> подтверждения платежа.
						</span>
					</div>
					<div className={styles.status}>
						<Image src={checkImage} alt={checkImage} />
						<h5>Оплачен</h5>
						<span>
							Заказ оплачен и в течении дня будет выкуплен с китайского
							маркетплейса Poizon.
						</span>
					</div>
					<div className={styles.status}>
						<Image src={checkImage} alt={checkImage} />
						<h5>Доставка на склад в Китае</h5>
						<span>Заказ выкуплен и уже направляется на наш склад в Китае.</span>
					</div>
					<div className={styles.status}>
						<Image src={checkImage} alt={checkImage} />
						<h5>На складе в Китае</h5>
						<span>
							Заказ поступил на наш склад в Китае и скоро будет отправлен в
							Россию.
						</span>
					</div>
					<div className={styles.status}>
						<Image src={checkImage} alt={checkImage} />
						<h5>Доставка на склад в РФ</h5>
						<span>Заказ отправился на наш склад в России.</span>
					</div>

					<div className={styles.status}>
						<Image src={checkImage} alt={checkImage} />
						<h5>На складе в РФ</h5>
						<span>
							Заказ поступил на наш склад и в скором времени отправиться на
							указанный вами адрес.
						</span>
					</div>
					<div className={styles.status}>
						<Image src={checkImage} alt={checkImage} />
						<h5>Доставляется</h5>
						<span>Заказ уже направляется на указанный вами адрес.</span>
					</div>
					<div className={styles.status}>
						<Image src={checkImage} alt={checkImage} />
						<h5>Завершен</h5>
						<span>Заказ прибыл в место вручения.</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeliveryInfo
