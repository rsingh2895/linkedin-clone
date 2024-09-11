// src/components/CreatePost.js
import React, { useState, useContext } from 'react';
import { PostsContext } from '../context/PostContext';
import { json, useNavigate } from 'react-router-dom';
import userLogo from '../images/user-logo.png'

function CreatePost({ user }) {
    const userDetails = JSON.parse(user)
    const [content, setContent] = useState('');
    const { setPosts } = useContext(PostsContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            user: userDetails?.name,
            content,
            likes: 0,
            comments: [],
        };
        setPosts((prevPosts) => [newPost, ...prevPosts]);
        navigate('/');
        setContent("")
    };

    return (
        <div className='bg-white rounded-lg shadow-lg'>
            <div className='flex'>
                <img className='w-14 h-14 ml-3 my-6 mix-blend-hard-light' src={userLogo} />
                <form onSubmit={handleSubmit} className='m-3 relative'>
                    <textarea
                        className='p-3 border-2 rounded-md'
                        cols="44"
                        placeholder="What's on your mind?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit" className='absolute bottom-3 right-2 bg-blue-500 py-1 px-3 rounded-lg text-sm text-white'>Post</button>
                </form>
            </div>
            <div className='flex justify-evenly'>
                <button className='bg-blue-500 py-1 px-3 rounded-lg mb-3 text-sm text-white'>Media</button>
                <button className='bg-blue-500 py-1 px-3 rounded-lg mb-3 text-sm text-white'>Jobs</button>
                <button className='bg-blue-500 py-1 px-3 rounded-lg mb-3 text-sm text-white'>Write article</button>
            </div>
        </div>
    );
}

export default CreatePost;
