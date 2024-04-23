
import Button from '@/app/component/Button';
import React from 'react';
import table from '@/public/table.jpg'
import Image from 'next/image';

const mission = () => {
    return (
        <div>
            mission page

           <div className='w-[400px] my-10'> 
            <Image src={table} alt={table}/>
            </div>

            <Button></Button>
        </div>
    );
};

export default mission;