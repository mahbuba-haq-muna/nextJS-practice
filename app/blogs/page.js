import Link from 'next/link';
import React from 'react';

const Blogs = () => {
    const blogs = [
        {
            id : 1,
            title: "Blog 1",
            description: "this is blog 1" 
        },
        {
            id : 2,
            title: "Blog 2",
            description: "this is blog 2" 
        }
    ]
    return (
        <main>
            <ul>
                {blogs?.map((blog)=><li key={blog.id}>
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>)}
            </ul>
        </main>
    );
};

export default Blogs;