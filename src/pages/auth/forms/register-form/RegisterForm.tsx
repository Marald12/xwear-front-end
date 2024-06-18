'use client'
import { FC } from 'react'
import styles from './RegisterForm.module.scss'
import DefaultButton from '@/shared/ui/buttons/default-button/DefaultButton'
import { useForm } from 'react-hook-form'
import { authApi } from '@/shared/api/auth/auth.api'

const RegisterForm: FC = () => {
	const { handleSubmit, register, formState } = useForm()

	const login = async (data: any) => {
		const response = await authApi.register(data)
		console.log(response)
	}

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(login)}
			name='register'
		>
			<h4>Регистрация</h4>
			<input placeholder='Email адрес:' {...register('email')} />
			<input placeholder='Пароль:' type='password' {...register('password')} />
			<input
				placeholder='Повторите пароль:'
				type='password'
				{...register('repeatPassword')}
			/>
			<div className='flex justify-center mt-[30px]'>
				<DefaultButton>Зарегистрироваться</DefaultButton>
			</div>
		</form>
	)
}

export default RegisterForm
