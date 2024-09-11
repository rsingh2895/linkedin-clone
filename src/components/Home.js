// src/components/Feed.js
import React, { useContext } from 'react';
import { PostsContext } from '../context/PostContext';
import Post from './Post';
import CreatePost from './CreatePost'
import Profile from './Profile';

function Home({ user }) {
    const { posts } = useContext(PostsContext);

    return (
        <div className='flex w-9/12'>
            <div className='w-[37.5%]'><Profile user={user} /></div>

            <div className='w-9/12 mx-5'>
                <CreatePost user={user} />
                <div className='m-5 bg-slate-400 h-[1px]'></div>
                {posts.map((post) => (
                    <Post key={post.id} post={post} user={user} />
                ))}
            </div>


        </div>
    );
}

export default Home;
