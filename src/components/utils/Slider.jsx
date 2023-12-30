
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Slider() {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full h-72' src="https://img.freepik.com/free-photo/butterfly-blossom_23-2150636449.jpg?ga=GA1.2.1449515847.1696692634" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-72' src="https://img.freepik.com/free-photo/front-view-people-celebrating-christmas_23-2150977060.jpg?ga=GA1.2.1449515847.1696692634" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-72' src="https://img.freepik.com/free-photo/futuristic-christmas-celebration-concept_23-2150979825.jpg?ga=GA1.2.1449515847.1696692634" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/medium-shot-people-celebrating-christmas_23-2150977244.jpg?ga=GA1.2.1449515847.1696692634" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/medium-shot-people-celebrating-christmas_23-2150977252.jpg?ga=GA1.2.1449515847.1696692634" alt="" />
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    )
}

export default Slider