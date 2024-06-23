interface INavLink {
	url: string
	title: string
	isOpen: boolean
}

type INav = (isOpen: boolean) => INavLink

export const navHome: INav = (isOpen: boolean) => ({
	url: '/',
	title: 'Главная',
	isOpen
})

export const navCatalogItems: INav = (isOpen: boolean) => ({
	url: '/catalog',
	title: 'Каталог товаров',
	isOpen
})

export const navAuth: INav = (isOpen: boolean) => ({
	url: '/auth',
	title: 'Авторизация',
	isOpen
})

export const navRestorePassword: INav = (isOpen: boolean) => ({
	url: '/restore-password',
	title: 'Восстановление пароля',
	isOpen
})
