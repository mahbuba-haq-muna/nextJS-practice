import Link from 'next/link';
import React from 'react';

const aboutLayout = ({ children }) => {
    return (
        <div>
            <nav className='my-6'>
                <ul className="flex gap-5">
                    <li> <Link href="/about/mission">Mission</Link></li>
                    <li> <Link href="/about/vision">vision</Link></li>

                </ul>
            </nav>
            {children}
        </div>
    );
};

export default aboutLayout;