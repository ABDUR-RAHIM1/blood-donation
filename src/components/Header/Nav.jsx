import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GlobalState } from '../../State/State';
import demoImg from "../../images/demo.jpg"

export default function Nav(props) {
    const { show } = props
    const pathname = useLocation().pathname;




    const navItems = [
        { name: "Home", path: "/" },
        { name: "Donors", path: "/donars" },
        { name: "Recipients", path: "/recipients" },
        { name: "About Us", path: "/about" },
        { name: "Blogs", path: "/blogs" },
    ];

    const { token, handleGetLogo, logo } = useContext(GlobalState)
    const [photoRole, setPhotoRole] = useState({});
    useEffect(() => {
        const isPhoto_role = localStorage.getItem("photo_role");
        if (isPhoto_role) {
            const photoRole = JSON.parse(isPhoto_role)

            setPhotoRole({ ...photoRole, profilePic: photoRole.profilePic, role: photoRole.role })
        }
        handleGetLogo()
    }, [setPhotoRole, token,]);



    return (
        <div className={` ${show ? " scale-x-1" : " scale-x-0"} origin-left w-[75%] md:w-[48%] primaryBg duration-200 h-screen  z-[20] fixed top-0 left-0 px-10 py-10 overflow-y-auto`}>

            <div className=' w-full h-[100px] flex items-center justify-between flex-col md:flex-row gap-3'>
                <Link to={"/"} className=' text-2xl md:text-5xl font-bold   border-b md:border-0' >Roktojoddha</Link>

                <div>
                    {
                        logo && logo.map((lg, index) => (
                            <img key={index} className=' w-[70px] h-[70px] rounded-full' src={lg.profilePic || demoImg} alt="" />
                        ))
                    }
                </div>
            </div>

            <div className='w-full h-full my-10 flex flex-col items-center gap-6 md:gap-10  text-2xl md:text-3xl font-medium  '>
                {
                    navItems.map((n, i) => (
                        <Link to={n.path} key={i}>
                            {n.name}
                        </Link>
                    ))
                }
                {
                    token && photoRole
                        ? <Link to="/profile" className=' py-3 px-6 bg-red-800 text-white font-bold rounded-sm hover:shadow-md duration-200'>
                            Profile
                        </Link>
                        :
                        <Link as={Link} to='/auth' className=' py-3 px-6 bg-red-800 text-white font-bold rounded-sm hover:shadow-md duration-200'>
                            Log-in
                        </Link>


                }

            </div>

        </div>
    )
}
