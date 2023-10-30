import React, { useContext } from 'react'
import { GlobalState } from '../../State/State'
import Home from '../Admin/Admin/Home'
import AddBLog from '../Admin/Admin/AddBLog'
import GetBlogs from '../Admin/Admin/GetBlogs'
import Add_Volunteer from '../Admin/Admin/Add_Volunteer'
import Manage_volunteer from '../Admin/Admin/Manage_volunteer'
import Get_request from '../Admin/Admin/Get_request'
import Add_slider from '../Admin/Admin/Add_slider'
import Add_logo from '../Admin/Admin/Add_logo'


    const {  btnText , setActiveComponent} = useContext(GlobalState)
      //  set btnTextbased on click dashboard button
      if(btnText=== 'HOME') setActiveComponent(<Home/>)
      if(btnText=== 'ADD BLOG') setActiveComponent(<AddBLog/>)
      if(btnText=== 'GET BLOG') setActiveComponent(<GetBlogs/>)
      if(btnText=== 'ADD VOLUNTEER') setActiveComponent(<Add_Volunteer/>)
      if(btnText=== 'MANAGE VOLUNTEER') setActiveComponent(<Manage_volunteer/>)
      if(btnText=== 'GET REQUEST') setActiveComponent(<Get_request/>)
      if(btnText=== 'ADD SLIDER') setActiveComponent(<Add_slider/>)
      if(btnText=== 'ADD LOGO') setActiveComponent(<Add_logo/>)
    //  set btnTextbased on click dashboard button

 