import React, { useState } from "react";

const Settings = () => {
  // States
  const [profile, setProfile] = useState({
    name: "Alsadir Ebrahim",
    email: "alsadir@example.com",
    password: "",
  });
  const [theme, setTheme] = useState("light");
  const [accent, setAccent] = useState("violet");
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    reports: true,
  });
  const [privacy, setPrivacy] = useState({
    online: true,
    dataCollection: false,
  });

  const [confirmDelete, setConfirmDelete] = useState(false);

  // Handlers
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    alert("✅ Settings saved successfully!");
  };

  const handleDelete = () => {
    if (confirmDelete) {
      alert("❌ Account deleted!");
    } else {
      setConfirmDelete(true);
    }
  };

  return (
    <div className=" p-6 bg-gradient-to-r from-violet-100 via-pink-200 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto  dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-10">
        
        {/* Profile */}
        <section>
          <h2 className="text-2xl font-bold mb-4">👤 Profile</h2>
          <div className="flex items-center gap-6">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="space-y-3 w-full">
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="w-full p-2 border rounded-lg dark:bg-gray-700"
                placeholder="Your name"
              />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full p-2 border rounded-lg dark:bg-gray-700"
                placeholder="Email address"
              />
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleProfileChange}
                className="w-full p-2 border rounded-lg dark:bg-gray-700"
                placeholder="New password"
              />
            </div>
          </div>
        </section>

        {/* Theme & Appearance */}
        <section>
          <h2 className="text-2xl font-bold mb-4">🎨 Appearance</h2>
          <div className="flex items-center justify-between">
            <p>Theme</p>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="px-4 py-2 rounded-lg border dark:border-gray-600"
            >
              {theme === "light" ? "🌞 Light" : "🌙 Dark"}
            </button>
          </div>

          <div className="mt-4">
            <p className="mb-2">Accent Color</p>
            <div className="flex gap-2">
              {["violet", "pink", "blue", "emerald", "orange"].map((c) => (
                <button
                  key={c}
                  onClick={() => setAccent(c)}
                  className={`w-8 h-8 rounded-full bg-${c}-500 ${
                    accent === c ? "ring-4 ring-gray-300 dark:ring-gray-600" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section>
          <h2 className="text-2xl font-bold mb-4">🔔 Notifications</h2>
          <div className="space-y-3">
            {Object.entries(notifications).map(([key, value]) => (
              <label
                key={key}
                className="flex items-center justify-between cursor-pointer"
              >
                <span className="capitalize">{key} notifications</span>
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      [key]: !notifications[key],
                    })
                  }
                  className="w-5 h-5 accent-violet-500"
                />
              </label>
            ))}
          </div>
        </section>

        {/* Privacy */}
        <section>
          <h2 className="text-2xl font-bold mb-4">🔒 Privacy</h2>
          <div className="space-y-3">
            {Object.entries(privacy).map(([key, value]) => (
              <label
                key={key}
                className="flex items-center justify-between cursor-pointer"
              >
                <span className="capitalize">
                  {key === "online" ? "Show Online Status" : "Allow Data Collection"}
                </span>
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() =>
                    setPrivacy({ ...privacy, [key]: !privacy[key] })
                  }
                  className="w-5 h-5 accent-pink-500"
                />
              </label>
            ))}
          </div>
        </section>

        {/* Danger Zone */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-500">⚠️ Danger Zone</h2>
          <button
            onClick={handleDelete}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          >
            {confirmDelete ? "Confirm Delete Account ❌" : "Delete Account"}
          </button>
        </section>

        {/* Save/Cancel */}
        <div className="flex justify-end gap-4 border-t pt-6">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 rounded-lg border dark:border-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

