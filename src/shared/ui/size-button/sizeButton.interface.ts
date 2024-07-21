import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export interface ISizeButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	size: number
}
