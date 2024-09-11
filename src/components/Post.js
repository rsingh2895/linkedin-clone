// src/components/Post.js
import React, { useState, useContext } from 'react';
import { PostsContext } from '../context/PostContext';
import userLogo from '../images/user-logo.png'
import likeLogo from '../images/like-logo.png'
import messageLogo from '../images/message-log.jpg'

function Post({ post, user }) {
    console.log(post, user)
    const userDeatils = JSON.parse(user)
    console.log(userDeatils)
    const { setPosts } = useContext(PostsContext);
    const [commentText, setCommentText] = useState('');
    const [isCommenting, setIsCommenting] = useState(false);

    const handleLike = () => {
        setPosts((prevPosts) =>
            prevPosts.map((p) => (p.id === post.id ? { ...p, likes: p.likes + 1 } : p))
        );
    };

    const handleCommentClick = () => {
        setIsCommenting(!isCommenting);
    };

    const handleAddComment = () => {
        const newComment = {
            id: Date.now(),
            text: commentText,
            user: userDeatils?.name,
        };
        setPosts((prevPosts) =>
            prevPosts?.map((p) =>
                p?.id === post?.id ? { ...p, comments: [...p?.comments, newComment] } : p
            )
        );
        setCommentText('');
    };

    return (
        <div className='bg-white p-5 mb-3 rounded-lg shadow-lg'>
            <div className='flex w-full'>
                <div className='flex w-9/12'>
                    <img src={userLogo} className='w-14 h-14 mix-blend-hard-light mr-3' />
                    <div>
                        <h3>{post?.user}</h3>
                        <p className='text-sm text-slate-400'>Description of Profile</p>
                    </div>
                </div>
                <div className='w-1/4 flex items-center justify-center'>
                    <button className='text-blue-600'>+ Follow</button>
                </div>
            </div>
            <p className='text-neutral-500'>{post?.content}</p>
            <div className='flex justify-between mt-3'>
                <div className='flex'>
                    <img src={likeLogo} className='w-6 h-6' />
                    <span className='text-slate-400'>{post?.likes}</span>
                </div>
                <div>
                    <span className='text-slate-400'>{post?.comments.length} comments</span>
                </div>
            </div>
            <div className=' bg-slate-300 h-[1px]'></div>
            <div className='flex justify-between'>
                <button onClick={handleLike} className='flex px-3 pt-3'>
                    <img src={likeLogo} className='w-6 h-6 mr-2' />
                    Like</button>
                <button onClick={handleCommentClick} className='flex px-3 pt-3'>
                    <img src={messageLogo} className='w-6 h-6 mix-blend-hard-light mr-2' />
                    Comment</button>
            </div>
            <div>
                {isCommenting && (
                    <div>
                        {post?.comments?.map((comment) => (
                            <p key={comment?.id}>
                                <strong>{comment?.user}:</strong> {comment?.text}
                            </p>
                        ))}
                        <input
                            type="text"
                            placeholder="Add a comment..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        />
                        <button onClick={handleAddComment}>Comment</button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Post;
