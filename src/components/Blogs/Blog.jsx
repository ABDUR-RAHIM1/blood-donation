import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import demoImg from "../../images/demo.jpg";

function Blog(props) {
    const { name, email, postAt, title, profilePic, desc } = props.blog;
    const isEvenNumber = props.index % 2 === 0;

    return (
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{
                duration: '1',
            }}
            className={`w-full wrap flex justify-between items-center my-4 ${isEvenNumber ? 'flex-row-reverse' : 'flex-row'}`}
        >
            <div className='w-70 border border-gray-50'>
                <h2 className='text-5xl text-slate-500 font-bold italic'>
                    {`${props.index < 9 ? '0' + (props.index + 1) : props.index + 1}`}
                </h2>
                <div className='mt-2 bg-gray-50 py-2 px-1'>
                    <small className='uppercase underline'>Author : {name}</small> <br />
                    <small>email : {email}</small> <br />
                    <small>Post on : {postAt}</small>
                </div>

                <h1 className='text-3xl my-3 font-bold'>{title}</h1>
                <p>{desc && desc.slice(0, 350)}</p>
                <Link to='/blog-details' state={props.blog}>
                    <button className='button bg-gray-500 text-white hover:bg-slate-600 my-3 '>Read More</button>
                </Link>
            </div>
            <div className='w-28 bg-black'>
                <img className='w-full h-52 rounded-sm' src={profilePic || demoImg} alt={`${profilePic}`} />
            </div>
        </motion.div>
    );
}

export default Blog;
