import React, { useState, useContext, useEffect } from 'react'
import Inputs from './Inputs'
import uploadFile from './UploadFile';
import TextArea from './TextArea';
import { GlobalState } from '../../State/State';
import Notification from './Notification';
import Loading from './Loading';
import { useLocation } from 'react-router-dom';

function AddBlog() {

  const state = useLocation().state;
  const { handleAddBlog, handleEditBlog, isLoading, message } = useContext(GlobalState)
  const [blog, setBlog] = useState({});
  const [imgLoading, setImgIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value })
  }


  const handleFileChange = async (e) => {
    const image = e.target.files[0];
    await uploadFile(image, setBlog, setImgIsLoading);
  };

  useEffect(() => {

    if (state) {
      setBlog(state)
    }
  }, [])

  return (
    <div className='login_page_bg w-full py-20 px-4'>
      <form
        onSubmit={state ?
          (e) => handleEditBlog(e, state._id, blog)
          :
          (e) => handleAddBlog(e, blog)

        }
        className='w-full md:w-2/5 m-auto bg-gray-100 p-4 '>
        <h3 className='text-center my-4 text-slate-700 text-3xl uppercase'>
          {state ? "Update Blog" : "Add Blog"}
        </h3>
        <Inputs
          name="title"
          value={blog.title}
          handleChange={handleChange}
          required={true}
          placeholder="Enter Title"
          lable="Enter  Blog Title"
        />
        <TextArea
          name="desc"
          value={blog.desc}
          handleChange={handleChange}
          required={true}
          placeholder="Enter Description"
          lable="Enter  Blog Description"
        />
        <input onChange={handleFileChange} type="file" name='profilePic' className='form-control mt-4' />
        <small className='text-green-800 my-3'>
          {imgLoading ? <p className='text-red-600'>Uploading Image</p> : <p>Add Photo</p>}
        </small>
        <br />
        <button disabled={imgLoading} className='button bg-slate-800 hover:bg-slate-900 text-white my-2'>
          {  isLoading ? <Loading size='sm' /> : state ? "Update Blog" : "Add Blog"}
        </button>
        { }
        {
          message && <Notification />
        }
      </form>
    </div>
  )
}

export default AddBlog