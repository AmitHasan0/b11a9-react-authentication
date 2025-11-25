import React, { use, useEffect, useState } from "react";
import guest from "../assets/userIcon.png";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
const Profile = () => {
  const { user } = use(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState(user?.displayName || "");

  const handleSave = () => {
    if (!newName.trim()) return;

    updateProfile(user, {
      displayName: newName,
    })
      .then(() => {
        alert("Profile updated!");
        setIsOpen(false);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    document.title = "Profile | App Store";
  }, []);
  return (
    <div className="max-w-3xl mx-auto mt-10 p-5">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center gap-4">
        {/* Avatar */}
        <img
          src={`${user ? user.photoURL : guest}`}
          className="w-28 h-28 rounded-full object-cover border-4 border-primary shadow-md"
          alt="avatar"
        />

        {/* User Info */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">{user?.displayName}</h1>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mt-4 w-full">
          <div className="bg-indigo-50 p-4 rounded-xl text-center shadow-sm">
            <h2 className="text-2xl font-bold text-indigo-600">12</h2>
            <p className="text-gray-600 text-sm">Apps Installed</p>
          </div>

          <div className="bg-indigo-50 p-4 rounded-xl text-center shadow-sm">
            <h2 className="text-2xl font-bold text-indigo-600">48</h2>
            <p className="text-gray-600 text-sm">Downloads</p>
          </div>

          <div className="bg-indigo-50 p-4 rounded-xl text-center shadow-sm">
            <h2 className="text-2xl font-bold text-indigo-600">7</h2>
            <p className="text-gray-600 text-sm">Reviews</p>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="mt-5 bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-primary transition-all shadow-md cursor-pointer"
        >
          Edit Profile
        </button>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white shadow-md p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-3">Recent Activity</h2>

        <ul className="space-y-4">
          <li className="p-3 bg-gray-50 rounded-lg border-l-4 border-indigo-500">
            Installed **Music Player App**
          </li>

          <li className="p-3 bg-gray-50 rounded-lg border-l-4 border-indigo-500">
            Reviewed **PDF Reader App**
          </li>

          <li className="p-3 bg-gray-50 rounded-lg border-l-4 border-indigo-500">
            Uninstalled **Game Booster App**
          </li>
        </ul>
      </div>

      {/* ✨ Edit Name Modal ✨ */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

            <label className="text-sm">Name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full p-2 border rounded-lg mt-1"
            />

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
