import "./../styles/Navbar.css"
import React, { useState } from "react";
import { useTheme } from './ThemeContext';
function Navbar() {
    const { isDarkTheme, toggleTheme } = useTheme();
    return(
        <div className={`container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div class = "navbar-default">
                <div class = "row">
                    <div class ="col-6"><h1 className="title-logo">iVOX</h1><h6 className="desc-logo">IT.Edtech. Design</h6></div>
                    <div class = "col-3">
                    <label class = "switch">
                          <input type="checkbox" class = "switch__input"checked={isDarkTheme}
                                onChange={toggleTheme}></input>
                          <span class ="switch__slider"></span>
                    </label>
                </div>
                <div class = "col-3"><span className="language">RU KZ</span></div>
           </div>
            </div>
        </div>
    );
}
export default Navbar;  