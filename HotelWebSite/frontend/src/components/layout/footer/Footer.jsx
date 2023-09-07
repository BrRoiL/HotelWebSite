import class_name from 'clsx'
import NewSletter from '../../modules/newsletter/NewSletter'
import styles from './Footer.module.scss'

import { NavLink } from 'react-router-dom'
import { data } from '../../../API/layout/Footer.data.js'
import Icon from '../../modules/icon/Icon'

const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<NewSletter />
				<div className={class_name('container', styles.container)}>
					<div className={styles.information}>
						{data.logotype ? (
							<div
								className={styles.logotype}
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
								<Icon
									name={'logotype'}
									width={110}
									height={30}
									color={'#484848'}
								/>
							</div>
						)}
						<div className={styles.text}>{data.text}</div>
						<div className={styles.buttons}>
							{data.buttons.map((item, index) => (
								<a href={item.link} className={styles.button} key={index}>
									<Icon
										name={item.icon.name}
										width={item.icon.size.width}
										height={item.icon.size.height}
										color={item.icon.size.color}
									/>
									<div className={styles.name}>{item.name}</div>
								</a>
							))}
						</div>
					</div>
					<div className={styles.menus}>
						{data.menus.map((item, index) => (
							<nav className={styles.menu} key={index}>
								<div className={styles.caption}>{item.caption}</div>
								<ul className={styles.items}>
									{item.menu.map((item, index) => (
										<li className={styles.item} key={index}>
											<NavLink
												className={class_name('link', styles.link)}
												to={item.href}
											>
												{item.name}
											</NavLink>
										</li>
									))}
								</ul>
							</nav>
						))}
					</div>
					<div className={styles.contacts}>
						<div className={styles.caption}>{data.contacts.caption}</div>
						{data.contacts.contact.map((item, index) => (
							<div className={styles.contact} key={index}>
								<div className={styles.name}>{item.name}</div>:
								<a
									href={item.href}
									className={class_name('link', styles.link)}
									target={item.target}
								>
									{item.text}
								</a>
							</div>
						))}
						<div className={styles.messengers}>
							{data.contacts.messengers &&
								data.contacts.messengers.map((item, index) => (
									<a
										href={item.href}
										className={styles.messenger}
										key={index}
										dangerouslySetInnerHTML={{
											__html: item.svg,
										}}
										style={{
											'--width': item.width,
											'--width-px': `${item.width}px`,
											'--height': item.height,
											'--height-px': `${item.height}px`,
										}}
									/>
								))}
						</div>
					</div>
				</div>
				<div className={styles.line}></div>
				<div className={class_name('container', styles.container)}>
					<div className={styles.copyrights_and_create}>
						<div className={styles.copyrights}>{data.copyrights}</div>
						<div className={styles.create}>
							{data.create.text}
							&nbsp;
							<a
								href={data.create.href}
								className={class_name('link', styles.link)}
							>
								{data.create.href_text}
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
