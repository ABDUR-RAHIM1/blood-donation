import React from 'react'
import AdminDashboard from '../../Dashboard/AdminDashboard'
import Add_logo from './Add_logo'
import Change_colors from './Change_colors'
import Add_slider from '../Add_slider'
import { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalState } from '../../../../State/State'

function Manage_content() {
    const {handleGetSlider, sliders, handleAddSlider , isLoading} = useContext(GlobalState)
    useEffect(()=>{
        handleGetSlider()
    } , [])
    console.log(sliders)
    return (
        <AdminDashboard>

            <div>
                <Add_slider handleAddSlider={handleAddSlider} sliders={sliders} isLoading={isLoading}/>
                <Add_logo />
                <Change_colors />
            </div>


        </AdminDashboard>
    )
}

export default Manage_content