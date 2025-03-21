import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../State/State';
import ErrorMessage from '../../components/utils/ErrorMessage';
import CountDown from '../../components/utils/CountDown';
import { getAuthenticatDonarCard } from '../../API/API';

export default function DonationInfo() {
    const [nextDonationDate, setNextDonationDate] = useState(null);
    const [remainingDays, setRemainingDays] = useState(0);
    const { fetchData } = useContext(GlobalState);
    const [donarInfo, setDonarInfo] = useState(null)
    const [isLoading, setIsLoading] = useState()


    useEffect(() => {
        setIsLoading(true)
        const getData = async () => {
            try {
                const data = await fetchData(getAuthenticatDonarCard);
                setDonarInfo(data)
            } catch (error) {
                console.log("failed to fetch authenticat User Info")
            } finally {
                setIsLoading(false)
            }
        };

        getData();
    }, [])


    useEffect(() => {
        if (donarInfo && donarInfo.donationDate) {
            const { nextDonationDate, remainingDays } = CountDown(donarInfo.donationDate);
            setNextDonationDate(nextDonationDate);
            setRemainingDays(remainingDays);
        }
    }, [donarInfo]);

    if (isLoading) {
        return <p className=' p-5'> Loading . . . </p>
    }

    if (!donarInfo) {
        return <ErrorMessage message="No Data Found" />;
    }

    const { donationDate, beforeDonation, bloodGroup } = donarInfo;

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Last Donation */}
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-sm font-semibold text-gray-500">Last Donation</h3>
                    <p className="text-3xl font-bold text-red-500">
                        {new Date(donationDate).toLocaleDateString()}
                    </p>
                </div>

                {/* Total Donations */}
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-sm font-semibold text-gray-500">Total Donations</h3>
                    <p className="text-3xl font-bold text-blue-500">{beforeDonation}</p>
                </div>

                {/* Eligible for Next Donation */}
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-sm font-semibold text-gray-500">Next Donation Eligibility</h3>
                    {nextDonationDate && (
                        <>
                            <small>{new Date(nextDonationDate).toDateString()}</small>
                            <p className="text-2xl font-bold text-green-500">
                                {`in ${remainingDays} Days`}
                            </p>
                        </>
                    )}
                </div>

                {/* Blood Type */}
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-sm font-semibold text-gray-500">Blood Type</h3>
                    <p className="text-3xl font-bold text-purple-500">{bloodGroup}</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Your Recent Donations</h3>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b-2">Date</th>
                                <th className="py-2 px-4 border-b-2">Location</th>
                                <th className="py-2 px-4 border-b-2">Donation Type</th>
                                <th className="py-2 px-4 border-b-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border-b">June 12, 2024</td>
                                <td className="py-2 px-4 border-b">City Hospital</td>
                                <td className="py-2 px-4 border-b">Whole Blood</td>
                                <td className="py-2 px-4 border-b text-green-500">Completed</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b">March 9, 2024</td>
                                <td className="py-2 px-4 border-b">Red Cross</td>
                                <td className="py-2 px-4 border-b">Plasma</td>
                                <td className="py-2 px-4 border-b text-green-500">Completed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}
