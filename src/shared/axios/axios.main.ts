import axios from 'axios'
import { getCookie } from 'cookies-next'

const token = getCookie('token', { priority: 'high' }) || ''

const BASE_URL = 'http://localhost:4080/api'

const axiosMain = () =>
	axios.create({
		baseURL: BASE_URL,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
	})

export default axiosMain()
