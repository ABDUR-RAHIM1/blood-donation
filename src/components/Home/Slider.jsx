import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../../State/State'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import SliderCard from './SliderCard';

export default function Slider() {
    const { handleGetSlider, sliders, isLoading } = useContext(GlobalState)
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        handleGetSlider()
        const timer = setTimeout(() => {
            isLoading == true ? setShowBanner(true) : setShowBanner(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [])



    return (
        <div className=" w-full relative  ">
            {
                isLoading ?
                    <div className='w-full h-[85vh] bg-black flex items-center justify-between'>
                        <SliderCard />
                        <div className=' flex-1 px-5'>
                            <h2 className=' text-3xl text-red-500 font-bold '>RoktoJoddha  . . . </h2>
                        </div>
                    </div>
                    :
                    <Fade >
                        {sliders.map((fadeImage, index) => (
                            <div key={index} className='w-full h-[85vh] z-[-1]'>
                                <img className='w-full h-full' src={fadeImage.profilePic} />

                            </div>
                        ))}
                    </Fade>
            }


            <div className={` ${showBanner ? "scale-1" : "scale-0"}  duration-500 w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 z-[1] flex items-center justify-start px-10 `}>
                <SliderCard />
            </div>
        </div>
    )
}
