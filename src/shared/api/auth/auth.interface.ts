export interface IAuthBody {
	email: string
	password: string
}

export interface IAuth {
	token: string
	user: any
}
