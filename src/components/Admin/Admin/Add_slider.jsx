import React from 'react'
import { useState } from 'react';
import uploadFile from '../../utils/UploadFile';
import Loading from '../../utils/Loading';

function Add_slider(props) {
  const { handleAddSlider, sliders, isLoading } = props;
  const [register, setRegister] = useState({});
  const [imgLoading, setImgIsLoading] = useState(false);

  const handleFileChange = async (e) => {
    const image = e.target.files[0];
    await uploadFile(image, setRegister, setImgIsLoading);
  };
  console.log(register)
  return (
    <div className='dFormWrap' >
      <form onSubmit={(e) => {
        handleAddSlider(e, register)
      }}>
        <input required onChange={handleFileChange} type="file" name='profilePic' className='form-control' />
        {
          imgLoading ? <small className=' text-red-600'>Image Uploading . . .</small> : <small className=' text-white'>Add Slider Image</small>
        }
        <button disabled={imgLoading} className='sidebarBtn my-3'>
          {
            isLoading ? <Loading size='sm' /> : "Add Slider"
          }
        </button>
      </form>

      <div className='flex justify-start items-start gap-3 w-full overflow-x-scroll ' >
        {
          sliders && sliders.map(sl => (
            <Slider slider={sl} key={sl._id} />
          ))
        }
      </div>

    </div>
  )
}

export default Add_slider

export function Slider(props) {
  const { profilePic } = props.slider
  return (
    <>
      <img className='  w-32 h-20' src={profilePic} alt={profilePic} /> 
    </>

  )
}