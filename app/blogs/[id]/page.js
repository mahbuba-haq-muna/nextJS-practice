import { notFound } from 'next/navigation';
import React from 'react';

const page = ({params}) => {
    const {id} = params

    if(id === "3") {
        notFound()
    }
    return (
        <div className='text-2xl mt-5'>
            the blog id is {id}
        </div>
    );
};

export default page;