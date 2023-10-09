import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import { motion } from 'framer-motion'
function Slider() {
    const images = [
        { id: 1, img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77771305&ga=GA1.2.1449515847.1696692634&semt=sph" },
        { id: 2, img: "https://img.freepik.com/free-photo/young-attractive-handsome-guy-feels-delighted-gladden-amazed_295783-535.jpg?w=900&t=st=1696737911~exp=1696738511~hmac=f5e9306c4b1982b61258a59295b1a0b72db9569aa70c40fea13695ae6dfe6e25https://img.freepik.com/free-photo/young-attractive-handsome-guy-feels-delighted-gladden-amazed_295783-535.jpg?w=900&t=st=1696737911~exp=1696738511~hmac=f5e9306c4b1982b61258a59295b1a0b72db9569aa70c40fea13695ae6dfe6e25" },
        { id: 3, img: "https://img.freepik.com/free-photo/bearded-happy-looking-man-with-brunette-hair-has-piercing-wearing-black-sweater-holding-pointing-finger-smartphone-copy-space-isolated-yellow-wall_295783-14549.jpg?t=st=1696697097~exp=1696697697~hmac=686ab97843fcf63878d2d8d60407b5c9fe6f28eaa37c4b09df533e26a6cc22b7" },
        { id: 4, img: "https://img.freepik.com/free-photo/portrait-happy-contented-satisfied-attractive-man-denim-trendy-shirt-showing-with-his-index-finger-top-right-cornerxt_295783-1217.jpg" },
    ]
    const [image, setImage] = useState(0)
 
    const handlePrev = () => {
        // Decrement the index to go to the previous image
        setImage((prevIndex) => {
          const newIndex = prevIndex - 1; 
          return newIndex < 0 ? images.length - 1 : newIndex;
        });
      };
    
      const handleNext = () => { 
        setImage((prevIndex) => {
          const newIndex = prevIndex + 1; 
          return newIndex >= images.length ? 0 : newIndex;
        });
      }; 
    return (
        <div className='relative'>
            <motion.img 
             initial={{opacity : 0}}
             whileInView={{opacity : 1}}
            className='w-full h-96 duration-500 ' src={images[image].img} alt="slider" />
            {/*  arrow */}
            <div>
                 <BsFillArrowLeftCircleFill onClick={handlePrev} className="icons inset-center left-0 ml-4 cursor-pointer"/>
                 <BsFillArrowRightCircleFill onClick={handleNext}  className="icons inset-center right-0 mr-2 cursor-pointer"/>
            </div>
        </div>
    )
}

export default Slider