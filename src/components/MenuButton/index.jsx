import React from "react";
import "./style.css";

const MenuButton = ({ handleNavDrop, openNavDrop }) => {
    return (
        <div
            className="burger s1180:!hidden"
            for="burger"
            onClick={handleNavDrop}
        >
            <input type="checkbox" id="burger" checked={openNavDrop} />
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default MenuButton;
