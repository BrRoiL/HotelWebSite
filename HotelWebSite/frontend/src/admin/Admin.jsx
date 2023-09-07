import { BrowserRouter, Route, Router } from 'react-router-dom'
import { data } from './API/Admin.data'
import styles from './Admin.module.scss'
import Home from './screens/Home/Home'

const Admin = () => {
	return (
		<div className={styles.main}>
			{data.user.active ? (
				<Home />
			) : (
				<BrowserRouter>
					<Router>
						<Route path='login' />
					</Router>
				</BrowserRouter>
			)}
		</div>
	)
}

export default Admin
