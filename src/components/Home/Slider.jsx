import React, {  useEffect, useState } from 'react' 
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import SliderCard from './SliderCard';
import useFetch from '../../hooks/usefetch';

export default function Slider() {

    const [showBanner, setShowBanner] = useState(true);


    const API = `/slider/sliders`;
    const { isLoading, data } = useFetch(API);

    useEffect(() => {
        const timer = setTimeout(() => {
            isLoading == true ? setShowBanner(true) : setShowBanner(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [isLoading])


    return (
        <div className=" w-full relative  ">
            {
                isLoading ?
                    <div className='w-full h-[85vh] bg-black flex items-center justify-between'>
                        <SliderCard />
                    </div>
                    :
                    <Fade >
                        {data && data.map((fadeImage, index) => (
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
