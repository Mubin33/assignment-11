import React from 'react';
import Loading from '../Loading/Loading';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import ServiceCard from '../../Page/Services/ServiceCard';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';

const TopService = () => {
    const { data: response, isLoading, isError, error } = useQuery({
        queryKey: ['allService'], // Using search in the query key to refetch data when search changes
        queryFn: async () => {
            const res =  await axios.get('https://mubins-server-project.vercel.app/service2');
            return res.data;
        },
    });

    if (isLoading) {
        return <Loading />; 
    }

    if (isError) {
        return <p>Error: {error.message}</p>;  
    }


    const sortedServices = response.sort((a, b) => b.bid - a.bid).slice(0, 6)
    return (
        <div className='mt-28 bg-base-200 py-10'>
            <Title title={'Popular Services'}/>
            <div className="my-1 px-5 lg:grid grid-cols-2 lg:gap-5 md:px-5">
                {sortedServices?.map(item => (
                    <ServiceCard key={item._id} service={item} />
                ))}
            </div>
            <div className='mt-7 flex justify-center'>
                <Link to="/services">
                <button className='btn bg-green-500 text-white'>All service</button>
                </Link>
            </div>
        </div>
    );
};

export default TopService;