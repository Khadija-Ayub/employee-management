import { useState } from "react";
import FormField from "../components/common/FormField";
import Button from "../components/common/Button";

import "../styles/settings.css";

function Settings() {

    const [settings, setSettings] = useState({
        name: "Khadija Ayub",
        email: "khadijaayub1@gmail.com",
        emailNotifications: true,
        attendanceNotifications: true
    });

    const [saved, setSaved] = useState(false);

    function handleChange(e) {

        const { name, value, type, checked } = e.target;

        setSettings({
            ...settings,
            [name]: type === "checkbox" ? checked : value
        });

        setSaved(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSaved(true);
    }

    return (
        <div className="settings-page">

            <div className="page-header">
                <div>
                    <h1>Settings</h1>
                    <p>
                        Manage your account and application preferences.
                    </p>
                </div>
            </div>

            <div className="settings-card">

                <form onSubmit={handleSubmit}>

                    <div className="settings-section">

                        <h2>Profile</h2>

                        <FormField
                            name="name"
                            label="Full Name"
                            value={settings.name}
                            onChange={handleChange}
                        />

                        <FormField
                            name="email"
                            type="email"
                            label="Email"
                            value={settings.email}
                            onChange={handleChange}
                        />

                    </div>


                    <div className="settings-section">

                        <h2>Notifications</h2>

                        <label className="setting-option">

                            <input
                                type="checkbox"
                                name="emailNotifications"
                                checked={settings.emailNotifications}
                                onChange={handleChange}
                            />

                            <span>
                                Email notifications
                            </span>

                        </label>


                        <label className="setting-option">

                            <input
                                type="checkbox"
                                name="attendanceNotifications"
                                checked={settings.attendanceNotifications}
                                onChange={handleChange}
                            />

                            <span>
                                Attendance notifications
                            </span>

                        </label>

                    </div>


                    <div className="settings-actions">

                        {saved && (
                            <small className="success-message">
                                Settings saved successfully.
                            </small>
                        )}

                        <Button
                            type="submit"
                            variant="primary"
                            size="medium"
                        >
                            Save Changes
                        </Button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default Settings;