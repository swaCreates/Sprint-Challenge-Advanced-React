import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import './NavBar.scss';

export default function NavBar() {

    const [darkMode, setDarkMode]= useDarkMode(false);

    const toggleMode= evt => {
        evt.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
        <nav className="navbar">
            <div className="dark-mode__toggle">
                <div
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
                />
                </div>
                <span>{darkMode ? (<p>Light Mode</p>) : (<p>Dark Mode</p>)}</span>
        </nav>
    )
}
