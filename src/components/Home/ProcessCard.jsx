import React from 'react'

function ProcessCard(props) {
    const { id, title, text, img } = props.data
    
    return (
        <section className='proccesCard'>
            <div className='h-56 relative overflow-hidden'>
                <hr />
                <img className='w-full h-full duration-300 hover:scale-125' src={img} alt="roktodibo" />
            <p className='absolute left-0 bottom-0 text-4xl font-bold bg-red-500 px-3 py-2 text-wshite'>{id}</p>
            </div>
            <hr className='mt-2' />
            <div className='px-2 py-4'>
                <h2 className='text-center font-semibold text-lg sm:text-xl mb-3 text-slate-600'>{title}</h2>
                <p>{text}</p>
            </div>
        </section>
    )
}

export default ProcessCard