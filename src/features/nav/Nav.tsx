import styles from './Nav.module.scss'
import Link from 'next/link'
import { cn } from '@/shared/utils'

export class Nav {
	private items: any[] = []

	constructor(items: any[]) {
		this.items = items
	}

	public getHtmlItems() {
		return (
			<nav className={styles.nav}>
				{this.items.map((item, index) => (
					<div key={item.title} className={cn(!item.isOpen && styles.hidden)}>
						<Link href={item.url}>{item.title}</Link>
						{this.items.length - 1 !== index && <span>/</span>}
					</div>
				))}
			</nav>
		)
	}
}
