import { FC } from 'react'
import { IButtonMoreProducts } from '@/shared/ui/buttons/button.interface'
import classNames from 'classnames'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'
import styles from './MoreProductsButton.module.scss'

const MoreProductsButton: FC<IButtonMoreProducts> = ({
	className,
	href,
	...rest
}) => {
	return (
		<button className={classNames(className, styles.button)} {...rest}>
			<Link href={href}>Больше товаров</Link>
			<span>
				<MdKeyboardArrowRight size={21} />
			</span>
		</button>
	)
}

export default MoreProductsButton
