'use client'
import { NextPage } from 'next'
import { Nav } from '@/features/nav/Nav'
import { navHome, navRestorePassword } from '@/features/nav/nav.types'
import classNames from 'classnames'
import styles from './page.module.scss'
import DefaultButton from '@/shared/ui/buttons/default-button/DefaultButton'
import { useForm } from 'react-hook-form'
import { validateEmail } from '@/shared/utils/validateEmail'
import { userApi } from '@/shared/api/user/user.api'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { TbInfoSquareRounded } from 'react-icons/tb'

type IForm = {
	email: string
}

const RestorePasswordPage: NextPage = () => {
	const nav = new Nav([navHome(false), navRestorePassword(true)])
	const [isSendEmail, setIsSendEmail] = useState(false)

	const { handleSubmit, register, formState } = useForm<IForm>()

	const checkErrorHandler = () =>
		formState.errors.email && toast.error(formState.errors.email.message)

	const submitHandler = async (data: IForm) => {
		const response = await userApi.restorePassword(data)

		if (response) {
			setIsSendEmail(true)
		}
	}

	return (
		<div className={classNames('container', styles.wrapper)}>
			{nav.getHtmlItems()}
			<div className={styles.container}>
				<h2>Восстановление пароля</h2>
				{isSendEmail ? (
					<div className={styles.send}>
						<TbInfoSquareRounded size={33} color='#8C8F96' />
						<p>
							Ссылка для сброса пароля и дальнейших инструкций отправлена вам на
							почту. Перейдите по ссылке и следуйте дальнейшим инструкциям.
						</p>
					</div>
				) : (
					<>
						<p>
							Забыли свой пароль? Укажите свой Email или имя пользователя.
							Ссылку на создание нового пароля вы получите по электронной почте.
						</p>
						<form
							className={styles.form}
							onSubmit={handleSubmit(submitHandler)}
						>
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
							<div className='flex justify-center mt-[30px]'>
								<DefaultButton onClick={checkErrorHandler}>
									сброс пароля
								</DefaultButton>
							</div>
						</form>
					</>
				)}
			</div>
		</div>
	)
}

export default RestorePasswordPage
