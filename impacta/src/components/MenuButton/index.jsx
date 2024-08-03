import React from "react";
import "./style.css";

const MenuButton = () => {
    return (
        <label className="burger s1180:!hidden" for="burger">
            <input type="checkbox" id="burger" />
            <span></span>
            <span></span>
            <span></span>
        </label>
    );
};

export default MenuButton;
