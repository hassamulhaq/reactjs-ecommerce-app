import React from "react"
import {Outlet, Link} from "react-router-dom"
import WebLogo from "../../assets/images/return-box-logo.png"

import "./navigation.styles.css"

function NavigationComponent() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link className="nav-link" to="/">
                        <img src={WebLogo} alt="logo"/>
                        <span>React eCom</span>
                    </Link>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/shop" className="nav-link">Shop</Link>
                        </li>
                    </ul>
                </div>
                <div className="toggle-theme">
                    <input type="checkbox" id="switch" className="switch"/>
                    <label htmlFor="switch">Toggle</label>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default NavigationComponent