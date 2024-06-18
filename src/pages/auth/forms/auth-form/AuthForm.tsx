'use client'
import { FC } from 'react'
import styles from './AuthForm.module.scss'
import DefaultButton from '@/shared/ui/buttons/default-button/DefaultButton'
import { useForm } from 'react-hook-form'
import { authApi } from '@/shared/api/auth/auth.api'
import { validateEmail } from '@/shared/utils/validateEmail'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { IAuthBody } from '@/shared/api/auth/auth.interface'

interface IForm {
	email: string
	password: string
}

const AuthForm: FC = () => {
	const mutate = useMutation({
		mutationFn: (data: IAuthBody) => authApi.login(data)
	})
	const { handleSubmit, register, formState } = useForm<IForm>()
	const router = useRouter()

	const clickHandler = () => {
		if (formState.errors.email) toast.error(formState.errors.email.message)
		if (formState.errors.password)
			toast.error(formState.errors.password.message)
	}

	const login = (data: IForm) => {
		mutate.mutate(data)

		console.log(mutate)

		if (mutate.data) {
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
			<div className='flex justify-center mt-[30px]'>
				<DefaultButton onClick={clickHandler}>Войти</DefaultButton>
			</div>
		</form>
	)
}

export default AuthForm
