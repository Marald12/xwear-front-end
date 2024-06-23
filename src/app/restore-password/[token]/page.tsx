'use client'
import { NextPage } from 'next'
import { IForm, IRestorePasswordFromTokenPageProps } from './page.interface'
import styles from './page.module.scss'
import Button from '@/shared/ui/buttons/button/Button'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import { userApi } from '@/shared/api/user/user.api'
import { IUpdatePasswordFromTokenBody } from '@/shared/api/user/user.interface'
import { useRouter } from 'next/navigation'

const RestorePasswordFromTokenPage: NextPage<
	IRestorePasswordFromTokenPageProps
> = ({ params }) => {
	const { handleSubmit, register, formState } = useForm<IForm>()
	const { mutate, data } = useMutation({
		mutationFn: (data: IUpdatePasswordFromTokenBody) =>
			userApi.updatePasswordFromToken(data)
	})
	const router = useRouter()

	const checkErrorClickHandler = () => {
		if (formState.errors.password)
			toast.error(formState.errors.password.message)
		if (formState.errors.repeatPassword)
			toast.error(formState.errors.repeatPassword.message)
	}

	const submitHandler = (data: IForm) => {
		if (data.password !== data.repeatPassword)
			return toast.error('Пароли не совпадают')

		mutate({
			password: data.password,
			token: params.token
		})

		if (data) {
			toast.success('Пароль успешно изменён')
			router.push('/auth')
		}
	}

	return (
		<div className='container'>
			<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
				<h4>Восстановление пароля</h4>
				<input
					placeholder='Пароль'
					type='password'
					{...register('password', {
						required: {
							value: true,
							message: 'Поле пароль обязательно'
						}
					})}
				/>
				<input
					placeholder='Повторите пароль'
					type='password'
					{...register('repeatPassword', {
						required: {
							value: true,
							message: 'Поле повторение пароля обязательно'
						}
					})}
				/>
				<Button onClick={checkErrorClickHandler}>Восстановить</Button>
			</form>
		</div>
	)
}

export default RestorePasswordFromTokenPage
