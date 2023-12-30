import React, { useState } from 'react'
import { motion } from 'framer-motion' 
import uploadFile from '../../../utils/UploadFile';
import { useContext } from 'react';
import { GlobalState } from '../../../../State/State';
import Loading from '../../../utils/Loading';
import Images from './Images';

function Add_logo(props) {
  const { isLoading, handleLogoDelete } = useContext(GlobalState)
  const { handleAddLogo , logo } = props;
  const [imgLoading, setImgIsLoading] = useState(false)
  const [register, setRegister] = useState({})

  const handleFileChange = async (e) => {
    const image = e.target.files[0];
    await uploadFile(image, setRegister, setImgIsLoading);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: '2'
      }}
      className='dFormWrap'
    >
      <h1 className="manageHeading">Add logo</h1>
      <form onSubmit={(e) => handleAddLogo(e, register)}>
        <input required onChange={handleFileChange} type="file" name='profilePic' className='form-control' />
        <small>
          {
            imgLoading ? <small className='text-red-500'>Image Uploding . . .</small> :
              <small className='text-white'>Upload a photo</small>
          }
        </small>
        <button className='sidebarBtn'>
          {
            isLoading ? <Loading size='sm' /> : "Change Now"
          }
        </button>
      </form>

      <div className='flex justify-start h-48 bg-black items-start flex-wrap px-2  gap-3 w-full overflow-y-scroll scroll-none' >
        {
          logo  && logo.map(lg => (
            <Images handleDelete={handleLogoDelete} element={lg} key={lg._id} />
          ))
        }
      </div>

    </motion.div>
  )
}

export default Add_logo