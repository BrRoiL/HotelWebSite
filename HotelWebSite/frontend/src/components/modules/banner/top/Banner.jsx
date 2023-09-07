import class_name from 'clsx'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import { data } from './Banner.data.js'

import 'swiper/scss'
import styles from './Banner.module.scss'

const Banner = () => {
	const swiper = useSwiper()

	return (
		<section id={styles.banner}>
			<div className={class_name('container', styles.container)}>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={0}
					slidesPerView={1}
					loop={true}
					navigation
					pagination={{ clickable: false }}
					scrollbar={{ draggable: false }}
				>
					{data.images.map((item, index) => (
						<SwiperSlide key={index}>
							<img src={item.src} alt={item.name} />
						</SwiperSlide>
					))}
				</Swiper>
				<div>
					FIND
					{data.images.map((item, index) => (
						<button onClick={() => swiper.slideNext()} key={index}>
							{item.name}
						</button>
					))}
				</div>
			</div>
		</section>
	)
}

export default Banner
