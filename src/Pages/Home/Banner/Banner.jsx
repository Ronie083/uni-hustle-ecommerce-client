import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { Autoplay, EffectCards, Pagination } from 'swiper/modules';
import './Banner.css'
import bgImg from '../../../assets/photo-1664455340023-214c33a9d0bd.jpeg'


const Banner = () => {
    return (
        <div className='hero min-h-screen p-0' style={{ backgroundImage: `url("${bgImg}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className='flex flex-col-reverse lg:flex-row text-center lg:text-left justify-between items-center mx-auto'>
                <div className='text-white mt-16 lg:mt-0'>
                    <h1 className="text-5xl font-bold">Empowering Student <br /> Entrepreneurs</h1>
                    <p className="py-6">The University Marketplace. Where Innovation <br />  Meets Opportunity.</p>
                    <button className='btn btn-outline rounded-none border-0 bg-[#FED456]'>Explore Now</button>
                </div>
                <div className='lg:ml-32 mt-10'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectCards, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1691531315982-f6bccf4bd875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1690735322802-f2ece8d3edce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1669149264833-166d27a7d32b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1690984806714-f1899508d7ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1691485455368-8b8f6f7583d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=432&q=80" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1691276317069-84cdd25b3d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1568394824200-457c8c3cb6dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=378&q=80" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1567706054157-20351ef60c87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=384&q=80" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://images.unsplash.com/photo-1567505707002-98a430a003ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=432&q=80" alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Banner;