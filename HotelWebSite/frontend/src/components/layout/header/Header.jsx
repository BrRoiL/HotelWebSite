import class_name from 'clsx'
import styles from './Header.module.scss'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import { NavLink } from 'react-router-dom'
import { data } from '../../../API/layout/Header.data.js'
import Icon from '../../modules/icon/Icon'

const Header = () => {
	const { isShow, setIsShow } = useOnClickOutside(true)

	return (
		<header id={styles.header}>
			<div className={class_name('container', styles.container)}>
				{data.logotype ? (
					<NavLink
						className={styles.logotype}
						to='/'
						dangerouslySetInnerHTML={{
							__html: data.logotype.svg,
						}}
						style={{
							'--width': data.logotype.width,
							'--width-px': `${data.logotype.width}px`,
							'--height': data.logotype.height,
							'--height-px': `${data.logotype.height}px`,
						}}
					/>
				) : (
					<div className={styles.logotype}>
						<Icon name={'logotype'} width={110} height={30} color={'#484848'} />
					</div>
				)}

				<nav className={styles.menu}>
					<ul className={styles.items}>
						{data.menu.map((item, index) => (
							<li className={styles.item} key={index}>
								<a className={class_name('link', styles.link)} href={item.href}>
									{item.name}
								</a>
							</li>
						))}
					</ul>

					<a href={data.button.href} className={styles.button}>
						{data.button.name}
					</a>

					<div className={styles.popup_menu}>
						<div className={styles.menu}>
							<Icon name='menu' width='20' height='15' color='#484848' />
						</div>
						{!data.popupMenu.icon ? (
							<Icon name='user' width='34' height='34' color='#C2C6CC' />
						) : (
							data.popupMenu.icon
						)}
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
