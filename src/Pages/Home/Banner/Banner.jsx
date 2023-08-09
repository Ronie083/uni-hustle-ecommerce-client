import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { EffectCards, Pagination } from 'swiper/modules';
import './Banner.css'
import bgImg from '../../../assets/photo-1664455340023-214c33a9d0bd.jpeg'


const Banner = () => {
    return (
        <div className='hero min-h-screen p-0' style={{ backgroundImage: `url("${bgImg}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=' flex justify-between items-center mx-auto'>
                <div className='text-white'>
                    <h1 className="text-5xl font-bold">Empowering Student <br /> Entrepreneurs</h1>
                    <p className="py-6">The University Marketplace. Where Innovation <br />  Meets Opportunity.</p>
                    <button className='btn btn-outline rounded-none border-0 bg-[#FED456]'>Explore Now</button>
                </div>
                <div className='ml-32 '>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectCards, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Banner;