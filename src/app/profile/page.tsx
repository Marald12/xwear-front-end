import styles from './page.module.scss'
import { NextPage } from 'next'
import ProfileLinks from '@/widgets/profile/ui/links/ProfileLinks'
import ProfileWelcomeText from '@/widgets/profile/ui/welcome-text/ProfileWelcomeText'
import ProfileOrders from '@/widgets/profile/ui/orders/ProfileOrders'

const ProfilePage: NextPage = () => {
	return (
		<div className={styles.wrapper}>
			<ProfileWelcomeText />
			<ProfileLinks />
			<ProfileOrders />
		</div>
	)
}
export default ProfilePage
