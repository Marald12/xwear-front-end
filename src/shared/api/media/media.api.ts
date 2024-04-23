import axiosMain from '@/shared/axios/axios.main'
import { IMedia } from '@/shared/api/media/media.interface'

export const mediaApi = {
	async upload(media: FormData) {
		try {
			const request = await axiosMain.post<IMedia>('/media', media, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			return request.data
		} catch (e) {
			console.log(e)
		}
	}
}
