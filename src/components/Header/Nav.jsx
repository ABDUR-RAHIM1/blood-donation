import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GlobalState } from '../../State/State';
import { MdOutlineExpandLess } from "react-icons/md"

const navItems = [
    { name: "Home", nameBN: "হোম ", path: "/" },
    { name: "Donors", nameBN: "ডোনার তালিকা", path: "/donars" },
    { name: "Recipients", nameBN: " গ্রহীতার তালিকা", path: "/recipients" },
    { name: "About Us", nameBN: "আমাদের সম্পর্কে", path: "/about" },
    { name: "Blogs", nameBN: "ব্লগ সমুহ ", path: "/blogs" },
];

export default function Nav(props) {
    const { show, setShow } = props
    const path = useLocation().pathname;
    const { token } = useContext(GlobalState)


    const handleCloseNavbar = () => {
        setShow(false)
    }


    return (
        <div className={` ${show ? " scale-x-1" : " scale-x-0"} origin-left w-[75%] md:w-[48%] primaryBg duration-200 h-screen  z-[20] fixed top-0 left-0 px-10 py-10 md:pb-10 overflow-y-auto`}>

            <div className=' w-full h-[100px] flex items-center justify-between flex-col md:flex-row gap-3'>
                <Link to={"/"} className=' text-3xl md:text-5xl font-bold   border-b md:border-0' >Roktojoddha</Link>

            </div>

            <div onClick={handleCloseNavbar} className=' w-full md:w-[75%] m-auto flex flex-col text-xl font-bold gap-5 my-5'>

                {
                    navItems.map((n, i) => (
                        <Link to={n.path} key={i} className={` flex items-center justify-between ${path === n.path ? "scale-110 text-black font-extrabold" : ""}`}>
                            <span>{n.nameBN}</span>
                            <span className=' text-4xl text-white rotate-[90deg]'>
                                <MdOutlineExpandLess />
                            </span>
                        </Link>
                    ))
                }

                <div className=' my-10 w-full'>
                    {
                        token
                            ? <Link to="/profile" className=' py-3 px-6 bg-red-800 text-white font-bold rounded-sm hover:shadow-md duration-200 text-center'>
                                Profile
                            </Link>
                            :
                            <Link as={Link} to='/auth' className=' py-3 px-6 bg-red-800 text-white font-bold rounded-sm hover:shadow-md duration-200 text-center'>
                                Log-in
                            </Link>


                    }
                </div>

            </div>

        </div>
    )
}
