import React from "react";
import { NavLink } from "react-router-dom";

const linksStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white"
};

function NavBar() {
    return (
        <div>
            <NavLink to="/" exact style={linksStyles} activeStyle={{ background: "darkblue", }}>
                Home
            </NavLink>
            <NavLink to="/about" exact style={linksStyles} activeStyle={{ background: "darkblue", }}>
                About
            </NavLink>
            <NavLink to="/login" exact style={linksStyles} activeStyle={{ background: "darkblue", }}>
                Login
            </NavLink>
        </div>
    );
}
export default NavBar;