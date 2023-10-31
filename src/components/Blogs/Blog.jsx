import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function Blog(props) {
    const { title, image, text } = props.blog;

    let evenNumber;
        if (props.index % 2 === 0) {
            evenNumber = true
        } else {
            evenNumber = false
        }
   
    return (
        <motion.div 
         initial={{y: 50}}
         whileInView={{y: 0}}
         transition={{
             duration : '1'
         }}
        className={`${evenNumber ? 'flex-row-reverse' : 'flex-row'} shadow-sm flex-b flex-wrap my-5`}>
            <div className='w-full md:w-48'>
                <h2 className='text-5xl text-slate-500 font-bold italic shadow-sm block'>{`${props.index < 10 ? '0'+(props.index + 1) : props.index + 1}`}</h2>
                <h1 className='text-3xl my-3 font-bold'>{title}</h1>
                <p>{text.slice(0,350)}</p>
               <Link to='/blog-details' state={props.blog}>
               <button className='button text-white hover:bg-red-600 my-3 '>Read More</button>
               </Link>
            </div>
            <div className={`w-full md:w-48 ${evenNumber ? ' md:mr-10' : ' md:ml-10'}`}>
                <img className='w-full h-auto rounded-sm' src={image} alt={`${image}`} />
            </div>
        </motion.div>
    )
}

export default Blog