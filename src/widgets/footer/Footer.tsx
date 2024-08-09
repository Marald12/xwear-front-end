import { FC } from 'react'
import styles from './Footer.module.scss'
import { QueryClient } from '@tanstack/react-query'
import { categoryApi } from '@/shared/api/category/category.api'
import Link from 'next/link'
import logoPath from '@/assets/images/logo.svg'
import Image from 'next/image'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Footer: FC = async () => {
	const queryClient = new QueryClient()

	const data = await queryClient.fetchQuery({
		queryKey: ['categories'],
		queryFn: () => categoryApi.findAll()
	})

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.column}>
					<h1>Каталог</h1>
					<ul>
						{data &&
							data.map(category => (
								<li key={category._id}>
									<Link href={`/products?category=${category._id}`}>
										{category.title}
									</Link>
								</li>
							))}
					</ul>
					<Link href='/' className={styles.logo}>
						<Image src={logoPath} alt='Logo path' />
					</Link>
				</div>
				<div className={styles.column}>
					<h1>Информация</h1>
					<ul>
						<li>
							<Link href={`/`}>Блог</Link>
						</li>
						<li>
							<Link href={`/`}>Контакты</Link>
						</li>
						<li>
							<Link href={`/`}>Доставка</Link>
						</li>
						<li>
							<Link href={`/`}>Оплата</Link>
						</li>
						<li>
							<Link href={`/`}>FAQ</Link>
						</li>
					</ul>
				</div>
				<div className={styles.column}>
					<h1>Контакты</h1>
					<span className={styles.email}>info@xwear.info</span>
					<span className={styles.phoneNumber}>+380 66 535 7890</span>
					<div className={styles.social}>
						<h1>Мессенджеры</h1>
						<div>
							<Link href='' target='_blank'>
								<FaTelegram size={30} />
							</Link>
							<Link href='' target='_blank'>
								<FaWhatsapp size={30} />
							</Link>
						</div>
					</div>
					<div className={styles.social}>
						<h1>Наши соц.сети</h1>
						<div>
							<Link href='' target='_blank'>
								<SlSocialVkontakte size={30} />
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.column}>
					<h1>Подписка на новости</h1>
					<span className={styles.email}>Будьте в курсе скидок и новостей</span>
					<div className={styles.form}>
						<Input type='email' placeholder='Ваш email' />
						<Button>
							<MdOutlineKeyboardArrowRight size={30} color='#000' />
						</Button>
					</div>
					<p className={styles.subscribe}>
						Подписываясь на рассылку вы соглашатесь с обработкой персональных
						данных
					</p>
					<div className={styles.linksTwo}>
						<Link href='/'>Политика конфиденциальности</Link>
						<Link href='/'>Пользовательское соглашение</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
