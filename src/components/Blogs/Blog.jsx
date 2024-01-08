import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import demoImg from "../../images/demo.jpg";
import { useContext } from 'react';
import { GlobalState } from '../../State/State';

function Blog(props) {
    const { name,role , postAt, title, profilePic, desc } = props.blog;
    const isEvenNumber = props.index % 2 === 0;
    const {times} = useContext(GlobalState)
    return (
        <motion.div
            initial={{opacity : 0}}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: '1',
            }}
            className={`w-full wrap flex justify-between items-center my-4 ${isEvenNumber ? 'flex-row-reverse' : 'flex-row'}`}
        >  
            <div className='w-70 px-1 border border-gray-50'>
                <h2 className=' text-2xl md:text-5xl text-slate-400 font-bold italic'>
                  <q>{`${props.index < 9 ? '0' + (props.index + 1) : props.index + 1}`}</q>
                </h2>
                <div className=' bg-gray-50 py-2 px-1'>
                    <small className='uppercase underline'>Author : {name} <span className='text-green-800'> ({role}) </span> </small> <br />
                    <small>Post on : {times(postAt)}</small>
                </div>

                <h1 className='text-lg md:text-2xl my-1 font-semi-bold'>{title && title.slice(0, 40)+ ". . ."}</h1>
                <p className='text-sm'>{desc && desc.slice(0, 200)}</p>
                <Link to='/blog-details' state={props.blog}>
                    <button className='button bg-green-700 text-white hover:bg-green-800 my-3 '>Read More</button>
                </Link>
            </div>
            <div className='w-28 bg-black'>
                <img className='w-full h-52 rounded-sm' src={profilePic || demoImg} alt={`${profilePic}`} />
            </div>
        </motion.div>
    );
}

export default Blog;
