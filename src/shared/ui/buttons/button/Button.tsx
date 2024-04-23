import { FC, PropsWithChildren } from 'react'
import { IButton } from '@/shared/ui/buttons/button.interface'
import classNames from 'classnames'
import styles from './Button.module.scss'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	color = 'black',
	...rest
}) => {
	return (
		<button
			className={classNames(
				styles.button,
				className,
				color === 'blue' && styles.blue
			)}
			{...rest}
		>
			{children}
			<span>
				<MdKeyboardArrowRight size={21} />
			</span>
		</button>
	)
}

export default Button
