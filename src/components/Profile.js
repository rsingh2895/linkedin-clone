// src/components/Profile.js
import React, { useContext } from 'react';
import { PostsContext } from '../context/PostContext';
import Post from './Post';

function Profile({ user }) {
    const userDeatils = JSON.parse(user)
    const { posts } = useContext(PostsContext);
    const userPosts = posts.filter((post) => post.user === user.name);

    return (
        // <div>
        //     <h2>{userDeatils?.name}'s Profile</h2>
        //     <p>Phone: {userDeatils?.phone}</p>
        //     <h3>Your Posts</h3>
        //     {userPosts.map((post) => (
        //         <Post key={post?.id} post={post} user={userDeatils} />
        //     ))}
        // </div>
        <>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center">
                    <img
                        className="w-16 h-16 rounded-full"
                        src="https://via.placeholder.com/150"
                        alt="profile"
                    />
                    <div className="ml-4">
                        <h2 className="text-xl font-semibold">{userDeatils?.name} Singh</h2>
                        <p className="text-sm text-gray-600">Software Developer at XYZ company</p>
                        <p className="text-sm text-gray-400">Gurugram, Haryana</p>
                    </div>
                </div>
                <img
                    className="w-6 h-6 mt-4"
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="linkedin-logo"
                />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
                <h3 className="text-md font-semibold">Strengthen your profile with an AI writing assistant</h3>
                <button className="mt-4 text-sm bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Reactivate Premium: 50% Off
                </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Profile viewers</span>
                    <span className="text-sm font-bold">98</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Post impressions</span>
                    <span className="text-sm font-bold">1</span>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
                <div className="flex space-x-4">
                    <button className="text-blue-500 text-sm">Saved items</button>
                    <button className="text-blue-500 text-sm">Groups</button>
                    <button className="text-blue-500 text-sm">Events</button>
                </div>
            </div>
        </>
    );
}

export default Profile;
