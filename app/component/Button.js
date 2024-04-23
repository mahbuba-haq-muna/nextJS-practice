"use client"

import React from 'react';

const Button = () => {
    return (
        <div>
            <div>
                <button className='btn bg-green-500 ' onClick={()=>console.log("I have click here")}>click here</button>
            </div>
        </div>
    );
};

export default Button;