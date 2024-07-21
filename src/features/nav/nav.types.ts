import { ICategory } from '@/shared/api/category/category.interface'
import { IProductCategory } from '@/shared/api/product-category/product-category.interface'
import { IProduct } from '@/shared/api/product/product.interface'

interface INavLink {
	url: string
	title: string
	isOpen: boolean
}

type INav = (isOpen: boolean) => INavLink

type INavCategory = (
	isOpen: boolean,
	category: ICategory | IProductCategory | undefined
) => INavLink

type INavProduct = (isOpen: boolean, product: IProduct | undefined) => INavLink

export const navHome: INav = (isOpen: boolean) => ({
	url: '/',
	title: 'Главная',
	isOpen
})

export const navCatalogItems: INav = (isOpen: boolean) => ({
	url: '/products',
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

export const navMainCategory: INavCategory = (
	isOpen: boolean,
	category: ICategory | IProductCategory | undefined
) => ({
	url: `/products?category=${category?._id}`,
	title: category?.title || '',
	isOpen
})

export const navProductCategory: INavCategory = (
	isOpen: boolean,
	category: ICategory | IProductCategory | undefined
) => ({
	url: `/products?mainCategory=${category?._id}`,
	title: category?.title || '',
	isOpen
})

export const navProduct: INavProduct = (
	isOpen: boolean,
	product: IProduct | undefined
) => ({
	url: `/product/${product?._id}`,
	title: product?.title || '',
	isOpen
})
