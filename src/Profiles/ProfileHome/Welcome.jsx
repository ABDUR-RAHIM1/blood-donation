import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../../State/State';
import { getAuthenticatUser } from '../../API/API';

export default function Welcome() {
    const { fetchData } = useContext(GlobalState);
    const [isLoading, setIsLoading] = useState(false)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        const getData = async () => {
            try {
                const data = await fetchData(getAuthenticatUser);
                setUserInfo(data)
            } catch (error) {
                console.log("failed to fetch authenticat User Info")
            } finally {
                setIsLoading(false)
            }
        };
        getData();
    }, [])

 
        if (isLoading || !userInfo) {
            return <p className=' p-5'> Loading . . . </p>
        }

 
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-700 capitalize">Welcome, {userInfo?.name || "N/A"}</h2>
            <p className="text-gray-500 mt-2">Thank you for being a dedicated donor. Here’s an overview of your blood donation activity.</p>
        </div>
    )
}
