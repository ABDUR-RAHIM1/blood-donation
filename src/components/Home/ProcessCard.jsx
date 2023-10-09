import React from 'react'

function ProcessCard(props) {
    const { id, title, text, img } = props.data
    console.log(id)
    return (
        <section className='w-full my-3 md:my-0 md:w-23 h-450 bg-gray-100 rounded-sm shadow-sm duration-200 hover:bg-red-500 hover:text-white'>
            <div className='h-56 relative overflow-hidden'>
                <hr />
                <img className='w-full h-full duration-300 hover:scale-125' src={img} alt="roktodibo" />
            <p className='absolute left-0 bottom-0 text-4xl font-bold bg-red-500 px-3 py-2 text-wshite'>{id}</p>
            </div>
            <hr className='mt-2' />
            <div className='px-2 py-4'>
                <h2 className='text-center font-semibold text-xl mb-3 text-red-500'>{title}</h2>
                <p>{text}</p>
            </div>
        </section>
    )
}

export default ProcessCard