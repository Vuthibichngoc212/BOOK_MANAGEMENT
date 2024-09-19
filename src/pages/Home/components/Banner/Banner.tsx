import { Swiper, SwiperSlide } from 'swiper/react';

import bannerImg from '@/assets/image/bg-login.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import '@/pages/Home/components/Banner/styles.css';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
	return (
		<div className="banner">
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				navigation
				pagination={{ clickable: true }}
				modules={[Pagination, Navigation, Autoplay]}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
			>
				<SwiperSlide>
					<img src={bannerImg} alt="Banner 1" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={bannerImg} alt="Banner 2" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={bannerImg} alt="Banner 3" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
