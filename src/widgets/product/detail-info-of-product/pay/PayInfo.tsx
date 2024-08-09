import { FC } from 'react'
import styles from './PayInfo.module.scss'
import Image from 'next/image'
import cardsImage from '@/assets/images/cards.png'

const PayInfo: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.blockPaymentsMethods}>
				<h4>Способы оплаты:</h4>
				<p>
					Команда XWEAR предоставляет услугу доставки только оригинальных
					товаров c крупнейшего китайского маркетплейса Poizon, чтобы наши
					клиенты экономили более 40% на каждой покупке.
				</p>
			</div>
			<div className={styles.blockBankCards}>
				<h4>Мы принимаем оплату банковскими картами:</h4>
				<Image src={cardsImage} alt={String(cardsImage)} />
				<p>
					Стоимость каждого товара окончательная. В нее входит выкуп товара на
					Poizon, доставка его на наш склад в Китае, доставка из Китая до склада
					в городе Екатеринбург, все таможенные сборы и пошлины уже включены в
					стоимость. <br />
					<br /> Если вам нужно отправить товар по России, вы сможете выбрать
					адрес доставки во время оформления заказа. Доставка оплачивается
					отдельно при получении посылки, обычно это не более 350 рублей.
				</p>
			</div>
		</div>
	)
}

export default PayInfo
