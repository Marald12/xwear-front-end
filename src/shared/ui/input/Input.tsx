import { FC } from 'react'
import classNames from 'classnames'
import styles from './Input.module.scss'
import { IInput } from '@/shared/ui/input/input.interface'

const Input: FC<IInput> = ({ className, ...rest }) => {
	return <input className={classNames(styles.input, className)} {...rest} />
}

export default Input
