
import React, { useContext, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { GlobalState } from '../../State/State';
import heroImg from "../../images/hero.jpg";

function Slider() {
    const { handleGetSlider, sliders, isLoading } = useContext(GlobalState)
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    useEffect(() => {
        handleGetSlider()
    }, [])


    console.log(isLoading)

    return (
        <div className='wrap bg-red-500'>
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
                {
                    sliders.length === 0 ?
                        (
                            <img className='w-full h-400' src={heroImg} alt="" />
                        ) :
                        (
                            sliders.slice().reverse().map(sl => (
                                <SwiperSlide key={sl._id}>
                                    <img src={sl.profilePic} alt="" />
                                </SwiperSlide>
                            ))
                        )
                }

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    )
}

export default Slider