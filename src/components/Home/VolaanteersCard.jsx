import React from 'react'

function VolaanteersCard(props) {
    const { name, title, image, social } = props.vt;
    return (
        <div className='mt-3 bg-gray-50 w-full md:w-31 shadow-md'>
            <img className='w-full' src={image} alt={`${image}`} />
            <div className='py-3 bg-white'>
                <h1 className='text-2xl text-center font-semibold uppercase'>{name}</h1>
                <p className='text-lg text-center uppercase font-semibold text-slate-600'>{title}</p>
            </div>
            <div className='py-3 flex items-center justify-center'>
               {
                 social.map((sc, index) => (
                     <a key={index} className='m-2 icons text-red-500 bg-gray-300 p-1' title={sc.name} href={sc.link}>{sc.icon}</a>
                 ))
               }
            </div>
        </div>
    )
}

export default VolaanteersCard