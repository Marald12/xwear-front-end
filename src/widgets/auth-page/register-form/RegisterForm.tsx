'use client'
import { FC } from 'react'
import styles from './RegisterForm.module.scss'
import DefaultButton from '@/shared/ui/buttons/default-button/DefaultButton'
import { useForm } from 'react-hook-form'
import { authApi } from '@/shared/api/auth/auth.api'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { IForm } from './registerForm.interface'

const RegisterForm: FC = () => {
	const { handleSubmit, register, formState } = useForm<IForm>()
	const router = useRouter()

	const clickHandler = () => {
		if (formState.errors.email) toast.error(formState.errors.email.message)
		if (formState.errors.password)
			toast.error(formState.errors.password.message)
	}

	const login = async (data: IForm) => {
		const response = await authApi.register(data)

		if (response) {
			router.push('/')
			router.refresh()
		}
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
