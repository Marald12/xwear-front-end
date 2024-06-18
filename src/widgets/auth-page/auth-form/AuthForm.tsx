'use client'
import { FC, useState } from 'react'
import styles from './AuthForm.module.scss'
import DefaultButton from '@/shared/ui/buttons/default-button/DefaultButton'
import { useForm } from 'react-hook-form'
import { authApi } from '@/shared/api/auth/auth.api'
import { validateEmail } from '@/shared/utils/validateEmail'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { Checkbox } from '@/shared/components/ui/checkbox'
import { Label } from '@/shared/components/ui/label'
import Link from 'next/link'
import { IForm } from './authForm.interface'

const AuthForm: FC = () => {
	const { handleSubmit, register, formState } = useForm<IForm>()
	const router = useRouter()
	const [isRemember, setIsRemember] = useState(false)

	const clickHandler = () => {
		if (formState.errors.email) toast.error(formState.errors.email.message)
		if (formState.errors.password)
			toast.error(formState.errors.password.message)
	}

	const login = async (data: IForm) => {
		const response = await authApi.login(data, isRemember)

		if (response) {
			router.push('/')
			router.refresh()
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(login)} name='login'>
			<h4>Войти</h4>
			<input
				placeholder='Email адрес:'
				{...register('email', {
					pattern: {
						value: validateEmail,
						message: 'Email не валидный'
					},
					required: {
						value: true,
						message: 'Поле email обязательно'
					}
				})}
			/>
			<input
				placeholder='Пароль:'
				type='password'
				{...register('password', {
					required: {
						value: true,
						message: 'Поле пароль обязательно'
					}
				})}
			/>
			<div className={styles.content}>
				<div className='flex items-center'>
					<Checkbox
						id='remember'
						checked={isRemember}
						onClick={() => setIsRemember(!isRemember)}
					/>
					<Label htmlFor='remember'>Запомнить меня</Label>
				</div>
				<Link href='/restore-password' className={styles.restorePassword}>
					Забыли пароль?
				</Link>
			</div>
			<div className='flex justify-center mt-[30px]'>
				<DefaultButton onClick={clickHandler}>Войти</DefaultButton>
			</div>
		</form>
	)
}

export default AuthForm
