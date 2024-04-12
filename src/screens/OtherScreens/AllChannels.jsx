import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import CategoroyChannelCont from '../../components/ChannelsComponents/CategoroyChannelCont';

export default function AllChannels() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${apiUrl}/category/getallcategories`);
                if (response.status === 200) {
                    const { categories } = response.data;
                    console.log(categories);
                    setCategories(categories);
                } else {
                    console.error('Failed to fetch categories:', response.statusText);
                    setError('Failed to fetch categories');
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Error fetching categories');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);
    if(loading){
        return <div>Loading ....</div>
    }
    if(error || categories?.length <1){
        return <div>Something went wrong!</div>
    }
    return (
        <section className='mx-20 my-10'>
            {
                categories.map((category)=>{
                    return (
                        <div key={category.id}>
                            <h3 className='font-bold text-xl my-5 '>{category.category_name}</h3>
                            <CategoroyChannelCont category={category} />
                        </div>
                    )
                })
            }
        </section>
    )
}
