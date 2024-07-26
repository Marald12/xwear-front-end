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
				<AccordionItem value='item-2'>
					<AccordionTrigger>
						ЧЕМ ЗАНИМАЕТСЯ ВАШ ИНТЕРНЕТ-МАГАЗИН?
					</AccordionTrigger>
					<AccordionContent>
						Yes. It comes with default styles that matches the other components
						aesthetic.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default FaqInfo
