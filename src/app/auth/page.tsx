import { NextPage } from 'next'
import styles from './page.module.scss'
import AuthForm from '@/widgets/auth/auth-form/AuthForm'
import RegisterForm from '@/widgets/auth/register-form/RegisterForm'
import { navAuth, navHome } from '@/features/nav/nav.types'
import { Nav } from '@/features/nav/Nav'

const AuthPage: NextPage = () => {
	const nav = new Nav([navHome(false), navAuth(true)])

	return (
		<div className='container'>
			{nav.getHtmlItems()}
			<h1 className={styles.title}>Аккаунт</h1>
			<div className={styles.forms}>
				<AuthForm />
				<RegisterForm />
			</div>
		</div>
	)
}

export default AuthPage
