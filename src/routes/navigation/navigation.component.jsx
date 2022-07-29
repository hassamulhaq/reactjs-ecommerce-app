import React from "react"
import {Outlet, Link} from "react-router-dom"
import "./navigation.styles.css"

function NavigationComponent() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link className="nav-link" to="/">Home</Link>
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
                    <input type="checkbox" className="toggler"/>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default NavigationComponent