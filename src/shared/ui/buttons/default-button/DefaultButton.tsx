import { FC, PropsWithChildren } from 'react'
import { IButton } from '@/shared/ui/buttons/button.interface'
import classNames from 'classnames'
import styles from './DefaultButton.module.scss'

const DefaultButton: FC<PropsWithChildren<IButton>> = ({
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
		</button>
	)
}

export default DefaultButton
