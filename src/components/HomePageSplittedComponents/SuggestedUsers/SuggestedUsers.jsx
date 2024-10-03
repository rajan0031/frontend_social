import React from 'react';
import { FaUserCircle, FaUsers } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { MdChat } from 'react-icons/md';
import { BiBookmarks } from 'react-icons/bi';

const SuggestedUsers = () => {
    return (
        <div className="w-full p-6 bg-gray-100 rounded-lg shadow-lg h-full">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaUsers className="inline-block mr-2 text-purple-500" /> Suggested Users
            </h2>

            {/* Dummy user profiles */}
            {["User1", "User2", "User3", "User4"].map((user, index) => (
                <div key={index} className="flex items-center mb-2 p-2 border rounded hover:bg-gray-300 cursor-pointer transition duration-200 ease-in-out">
                    <FaUserCircle size={40} className="mr-2 text-purple-600" />
                    <span className="text-lg">{user}</span>
                </div>
            ))}

            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <GiNotebook className="inline-block mr-2 text-blue-500" /> Discover LibertyPost!
                </h3>
                <p className="text-sm text-gray-700 mb-1">
                    📖 **Write & Share!** Unleash your creativity with ease! ✍️
                </p>
                <p className="text-sm text-gray-700 mb-1">
                    💬 **Engage!** Connect through comments and discussions! 🗨️
                </p>
                <p className="text-sm text-gray-700 mb-1">
                    🔔 **Stay Updated!** Follow your favorite writers! 📬
                </p>
                <p className="text-sm text-gray-700 mb-1">
                    📚 **Bookmark!** Save your top picks for later! 💾
                </p>
                <p className="text-sm text-gray-700 mb-1">
                    💌 **Chat with Friends!** Direct messages are here! 📲
                </p>
                <p className="text-sm text-gray-700 mb-1">
                    🛡️ **Respect Voices!** Share your thoughts responsibly! 🌟
                </p>
            </div>
        </div>
    );
};

export default SuggestedUsers;
