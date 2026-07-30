import { FiMenu, FiSun, FiMoon } from "react-icons/fi";
import "../../styles/layout/header.css";
import Button from "../common/Button";
import { useState, useEffect } from "react";


function Header({ collapsed, setCollapsed }) {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <header className="header" >
            <div className="header-left" >
                <Button
                    variant="icon"
                    icon={<FiMenu />}
                    onClick={() => setCollapsed(!collapsed)}
                />
                <span className="title" > Employee Management System</span>
            </div>
            <div className="header-right">
                <Button
                    variant="theme"
                    size="small"
                    icon={theme === "light" ? <FiMoon /> : <FiSun />}
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    ariaLabel={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                />
                
            </div>
        </header>
    );
}

export default Header