import class_name from 'clsx'
import { data } from './NewSletter.data'

import styles from './NewSletter.module.scss'

import { useForm } from 'react-hook-form'
import Icon from '../../modules/icon/Icon'

const getValue = value =>
	value ? options.find(option => option.value == value) : ''

const NewSletter = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control,
	} = useForm({
		mode: 'onChange',
	})

	const onSubmit = data => {
		reset()
	}

	return (
		<section id={styles.newsletter}>
			<div className={class_name('container', styles.container)}>
				<div className={styles.information_text}>
					<div className={styles.caption}>{data.caption}</div>
					<div className={styles.text}>{data.text}</div>
				</div>

				<form className={styles.get_news} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.input}>
						<input
							{...register('email', {
								required: 'ENTER EMAIL',
								pattern: {
									value: data.form.inputPattern.value,
									message: data.form.inputPattern.message,
								},
							})}
							type='email'
							placeholder={data.form.inputPlaceholder}
						/>
						{errors.email && (
							<label className={styles.error}>*{errors.email.message}</label>
						)}
					</div>
					<button className={styles.send}>
						<Icon
							name={data.form.buttonIcon.name}
							width={data.form.buttonIcon.size.width}
							height={data.form.buttonIcon.size.height}
							color={data.form.buttonIcon.color}
						/>
					</button>
				</form>
			</div>
		</section>
	)
}

export default NewSletter
