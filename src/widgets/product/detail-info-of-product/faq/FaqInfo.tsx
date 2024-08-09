import { FC } from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/shared/components/ui/accordion'
import styles from './FaqInfo.module.scss'

const FaqInfo: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Accordion type='multiple' className={styles.generalIssues}>
				<h3>ОБЩИЕ ВОПРОСЫ</h3>
				<AccordionItem value='item-1' className={styles.item}>
					<AccordionTrigger className={styles.itemHeader}>
						ЧЕМ ЗАНИМАЕТСЯ ВАШ ИНТЕРНЕТ-МАГАЗИН?
					</AccordionTrigger>
					<AccordionContent className={styles.itemContent}>
						Мы гарантируем полную безопасность ваших персональных данных. Если у
						вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой
						конфиденциальности.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2' className={styles.item}>
					<AccordionTrigger className={styles.itemHeader}>
						ГАРАНТИРОВАНА ЛИ БЕЗОПАСНОСТЬ МОИХ ДАННЫХ?
					</AccordionTrigger>
					<AccordionContent className={styles.itemContent}>
						Мы гарантируем полную безопасность ваших персональных данных. Если у
						вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой
						конфиденциальности.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3' className={styles.item}>
					<AccordionTrigger className={styles.itemHeader}>
						ГАРАНТИРОВАНА ЛИ БЕЗОПАСНОСТЬ МОИХ ДАННЫХ?
					</AccordionTrigger>
					<AccordionContent className={styles.itemContent}>
						Мы гарантируем полную безопасность ваших персональных данных. Если у
						вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой
						конфиденциальности.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<Accordion type='multiple' className={styles.generalIssues}>
				<h3>ТОВАРЫ</h3>
				<AccordionItem value='item-1' className={styles.item}>
					<AccordionTrigger className={styles.itemHeader}>
						ВЫ РЕАЛИЗУЕТЕ ОРИГИНАЛЬНЫЕ ТОВАРЫ?
					</AccordionTrigger>
					<AccordionContent className={styles.itemContent}>
						Мы гарантируем полную безопасность ваших персональных данных. Если у
						вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой
						конфиденциальности.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2' className={styles.item}>
					<AccordionTrigger className={styles.itemHeader}>
						В ВАШЕМ МАГАЗИНЕ ПРЕДСТАВЛЕНЫ НОВЫЕ ТОВАРЫ?
					</AccordionTrigger>
					<AccordionContent className={styles.itemContent}>
						Мы гарантируем полную безопасность ваших персональных данных. Если у
						вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой
						конфиденциальности.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3' className={styles.item}>
					<AccordionTrigger className={styles.itemHeader}>
						ПОЧЕМУ ЦЕНА ЗАВИСИТ ОТ РАЗМЕРА?
					</AccordionTrigger>
					<AccordionContent className={styles.itemContent}>
						Мы гарантируем полную безопасность ваших персональных данных. Если у
						вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой
						конфиденциальности.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-4' className={styles.item}>
					<AccordionTrigger className={styles.itemHeader}>
						СТОИМОСТЬ ТОВАРов ОКОНЧАТЕЛЬНая?
					</AccordionTrigger>
					<AccordionContent className={styles.itemContent}>
						Мы гарантируем полную безопасность ваших персональных данных. Если у
						вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой
						конфиденциальности.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<Accordion type='multiple' className={styles.generalIssues}>
				<h3>ДОСТАВКА</h3>
				<AccordionItem value='item-1' className={styles.item}>
					<AccordionTrigger className={styles.itemHeader}>
						СКОЛЬКО ИДЕТ ДОСТАВКА?
					</AccordionTrigger>
					<AccordionContent className={styles.itemContent}>
						Мы гарантируем полную безопасность ваших персональных данных. Если у
						вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой
						конфиденциальности.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2' className={styles.item}>
					<AccordionTrigger className={styles.itemHeader}>
						МОЖНО ЛИ ВЕРНУТЬ ТОВАР?
					</AccordionTrigger>
					<AccordionContent className={styles.itemContent}>
						Мы гарантируем полную безопасность ваших персональных данных. Если у
						вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой
						конфиденциальности.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default FaqInfo
