import getAllPosts from '@/lib/getAllApi';
import Link from 'next/link';
import React from 'react';

 export default async function Posts()  {

    const posts = await getAllPosts()
    
    return (
        <div>
            <h2>All posts</h2>
            <div className='my-20'>
                <ul>
                    {posts?.map((post)=><li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}
                </ul>
            </div>
        </div>
    );
};

