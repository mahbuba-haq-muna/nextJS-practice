import getPost from '@/lib/getApi';
import React from 'react';

export default async function PostPage  ({params}) {
    const {id} = params;
    const post = await getPost(id);
    return (
        <div>
            <h2 className='text-xl text-red-500 my-3'>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

