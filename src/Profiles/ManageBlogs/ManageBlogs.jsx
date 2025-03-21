import React, { useContext, useEffect, useState } from 'react'
import ProifleLayout from '../ProifleLayout'
import { GlobalState } from '../../State/State'
import BlogTable from './BlogTable'
import ProfileLoading from '../Loading/ProfileLoading'
import { motion } from 'framer-motion'
import DataNotFound from '../../components/utils/DataNotFound'
import { getAuthenticatUserBlog } from '../../API/API'

export default function ManageBlogs() {
    const { fetchData } = useContext(GlobalState)
    const [isLoading, setIsLoading] = useState(false);
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        setIsLoading(true);

        const getData = async () => {
            try {
                const data = await fetchData(getAuthenticatUserBlog);
                setBlogs(data);

            } catch (error) {
                console.error("Failed to fetch authenticated user info", error);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, []);

    if (isLoading) {
        return <ProfileLoading />
    }


    return (
        <ProifleLayout>

            <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >


                {
                    blogs && blogs.length > 0 ? <BlogTable blogs={blogs} /> : <DataNotFound />
                }

            </motion.div>
        </ProifleLayout>
    )
}
