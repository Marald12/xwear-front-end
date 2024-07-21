import { FC } from 'react'
import styles from './SizeButton.module.scss'
import { ISizeButtonProps } from './sizeButton.interface'
import classNames from 'classnames'

const SizeButton: FC<ISizeButtonProps> = ({ size, className, ...rest }) => {
	return (
		<button className={classNames(styles.button, className)} {...rest}>
			{size}
		</button>
	)
}

export default SizeButton
