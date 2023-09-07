import class_name from 'clsx'
import Icons from '../../../assets/images/svg/icons.svg'
import styles from './Icon.module.scss'

const Icon = ({ name, width, height, color }) => {
	return (
		<svg
			className={class_name(styles.icon, `icon-${name}`)}
			fill={color}
			style={{
				'--icon-width': width,
				'--icon-width-px': `${width}px`,
				'--icon-height': height,
				'--icon-height-px': `${height}px`,
			}}
		>
			<use xlinkHref={`${Icons}#icon-${name}`} />
		</svg>
	)
}

export default Icon
