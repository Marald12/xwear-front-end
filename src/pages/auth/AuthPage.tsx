import { NextPage } from 'next'
import { navAuth, navHome } from '@/shared/ui/nav/nav.types'
import { Nav } from '@/shared/ui/nav/Nav'
import styles from './AuthPage.module.scss'
import AuthForm from '@/pages/auth/forms/auth-form/AuthForm'
import RegisterForm from '@/pages/auth/forms/register-form/RegisterForm'

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
