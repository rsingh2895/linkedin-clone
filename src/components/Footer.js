import { useState } from "react";

const Footer = () => {
    const [showPrivacyDropdown, setShowPrivacyDropdown] = useState(false);
    const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
                <div className="flex justify-between items-center">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="company logo"
                        className="w-12 h-12 rounded"
                    />
                    <span className="bg-gray-200 text-sm px-2 py-1 rounded-full text-gray-700">Promoted</span>
                </div>
                <div className="mt-2">
                    <h3 className="text-lg font-semibold">Hitachi</h3>
                    <p className="text-sm text-gray-600">
                        Hitachi Social Innovation is POWERING GOOD. Follow Hitachi and stay updated on DX & AI.
                    </p>
                </div>
                <div className="mt-2 flex items-center">
                    <div className="flex -space-x-1">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="friend1"
                            className="w-8 h-8 rounded-full border-2 border-white"
                        />
                        <img
                            src="https://via.placeholder.com/40"
                            alt="friend2"
                            className="w-8 h-8 rounded-full border-2 border-white"
                        />
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                        Harshit & 74 other connections also follow
                    </span>
                </div>
                <div className="mt-4">
                    <button className="w-full text-sm bg-blue-500 text-white py-2 rounded-lg">Follow</button>
                </div>
            </div>
            <div className="bg-white p-4 mt-6 rounded-lg shadow-lg">
                <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-600">
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Accessibility</a>
                    <a href="#" className="hover:underline">Help Center</a>
                    <div className="relative">
                        <button
                            onClick={() => setShowPrivacyDropdown(!showPrivacyDropdown)}
                            className="hover:underline focus:outline-none"
                        >
                            Privacy & Terms
                        </button>
                        {showPrivacyDropdown && (
                            <div className="absolute bg-white border rounded-lg mt-2 p-2 shadow-lg z-10">
                                <a href="#" className="block px-2 py-1 hover:bg-gray-100">Privacy Policy</a>
                                <a href="#" className="block px-2 py-1 hover:bg-gray-100">Terms of Service</a>
                                <a href="#" className="block px-2 py-1 hover:bg-gray-100">Cookie Policy</a>
                            </div>
                        )}
                    </div>

                    <a href="#" className="hover:underline">Ad Choices</a>
                    <div className="relative">
                        <button
                            onClick={() => setShowBusinessDropdown(!showBusinessDropdown)}
                            className="hover:underline focus:outline-none"
                        >
                            Business Services
                        </button>
                        {showBusinessDropdown && (
                            <div className="absolute bg-white border rounded-lg mt-2 p-2 shadow-lg z-10">
                                <a href="#" className="block px-2 py-1 hover:bg-gray-100">Talent Solutions</a>
                                <a href="#" className="block px-2 py-1 hover:bg-gray-100">Marketing Solutions</a>
                                <a href="#" className="block px-2 py-1 hover:bg-gray-100">Sales Solutions</a>
                            </div>
                        )}
                    </div>

                    <a href="#" className="hover:underline">Advertising</a>
                    <a href="#" className="hover:underline">Get the LinkedIn app</a>
                    <a href="#" className="hover:underline">More</a>
                </div>
                <div className="text-center mt-4 text-gray-500 text-xs">
                    LinkedIn Corporation © 2024
                </div>
            </div>
        </>
    )
}

export default Footer;