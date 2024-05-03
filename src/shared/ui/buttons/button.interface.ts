import { HTMLAttributes } from 'react'

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
	color?: 'black' | 'blue'
}

export interface IButtonMoreProducts extends HTMLAttributes<HTMLButtonElement> {
	href: string
}
