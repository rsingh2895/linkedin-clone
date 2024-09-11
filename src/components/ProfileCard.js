import React from 'react';

const ProfileCard = () => {
    return (
        <>
            <div className="w-[70%] mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                {/* Top Section - Profile with Highlight */}
                <div className="flex">
                    {/* Left Sidebar - Highlights */}

                    {/* Main Profile Section */}
                    <div className="w-3/4 p-4">
                        <div className="flex items-center">
                            {/* Profile Picture */}
                            <img
                                className="w-16 h-16 rounded-full"
                                src="https://via.placeholder.com/150"
                                alt="Profile"
                            />
                            <div className="ml-4">
                                {/* Name and Title */}
                                <h2 className="text-xl font-bold text-gray-900">Vijay Barma</h2>
                                <p className="text-gray-600">AI Enthusiast | Looking to join Expat Communities in Kuwait</p>
                                <p className="text-sm text-gray-500">Kuwait City Metropolitan Area</p>
                            </div>
                        </div>
                        {/* Action Buttons */}
                        <div className="mt-4 flex space-x-2">
                            <button className="bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600">+ Follow</button>
                            <button className="bg-white border border-gray-300 py-1 px-4 rounded-full text-blue-500 hover:bg-gray-100">Connect</button>
                            <button className="bg-white border border-gray-300 py-1 px-4 rounded-full text-gray-500 hover:bg-gray-100">More</button>
                        </div>
                        {/* Follower Stats */}
                        <div className="mt-4 text-sm text-gray-500">
                            <p>73,440 followers · 500+ connections</p>
                            <p className="mt-1">Shruti Mishra, Diksha Singh, and 10 others mutual connections</p>
                        </div>
                    </div>
                </div>
                {/* Bottom Section - Banner */}
                <div className="relative">
                    {/* Banner Image */}
                    <div className="bg-orange-400 text-white py-8 text-center font-bold text-lg">
                        ONLY YOU CAN DEFINE YOUR OWN SUCCESS
                    </div>
                    {/* Bottom Profile Pic (Absolute positioning to overlap banner) */}
                    <div className="absolute -bottom-6 left-6 w-12 h-12 bg-gray-100 rounded-full border border-gray-300">
                        {/* Placeholder for additional avatar */}
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProfileCard;
