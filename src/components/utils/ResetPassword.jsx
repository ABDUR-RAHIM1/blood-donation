import React from 'react';
import { useContext } from 'react';
import { useState } from 'react'; 
import Modal from 'react-bootstrap/Modal';
import { GlobalState } from '../../State/State';
import Inputs from './Inputs';
import Loading from './Loading';
import Notification from './Notification';

function ResetPassword() {
    const [show, setShow] = useState(true);
    const {handleDonarAccountPassword , isLoading, setMessage, setIsDonarLogin } = useContext(GlobalState)
    const [authInfo, setAuthInfo] = useState({name:"" , email:"", gender :"" , password :"" })
    const handleClose = () => setShow(false);

      //   donar reset changer
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthInfo({ ...authInfo, [name]: value, role: 'donar' })

  }



    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reset Your Password</Modal.Title>
                </Modal.Header>
                <Modal.Body >


                    <form onSubmit={(e)=>handleDonarAccountPassword(e, authInfo)} className='w-full bg-slate-600 p-6'>
   

                                <Inputs
                                    type='text'
                                    name='name' 
                                    value={authInfo.name }
                                    required={true}
                                    placeholder='Enter Your Name'
                                    lable='Enter Your Good Name'
                                    handleChange={handleChange}
                                />
                                <Inputs
                                    type='text'
                                    name='gender' 
                                    value={authInfo.gender }
                                    required={true}
                                    placeholder='Gender'
                                    lable='Your Gender'
                                    handleChange={handleChange}
                                /> 
                                
                        <Inputs
                            type='email'
                            name='email' 
                            value={authInfo.email }
                            required={true}
                            placeholder='Enter Your Email'
                            lable='Enter Your Email'
                            handleChange={handleChange}
                        />
                        <Inputs
                            type='password'
                            name='password' 
                            value={authInfo.password }
                            required={true}
                            placeholder='********'
                            lable='Enter Your Password'
                            handleChange={handleChange}
                        />

                        <button className='button mr-2 bg-slate-700 text-white my-4'>Reset Now</button>
                        {
                            isLoading ? <Loading size='sm' /> : ''
                        }
                     


                        <Notification />
                    </form>



                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose} className='button bg-red-600 text-white hover:bg-red-700'>Go Back</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ResetPassword;