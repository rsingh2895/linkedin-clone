// src/PostsContext.js
import React, { createContext, useState, useEffect } from 'react';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Load posts from localStorage
        const savedPosts = localStorage.getItem('posts');
        if (savedPosts) setPosts(JSON.parse(savedPosts));
    }, []);

    useEffect(() => {
        // Save posts to localStorage
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    return <PostsContext.Provider value={{ posts, setPosts }}>{children}</PostsContext.Provider>;
};
