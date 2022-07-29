import React from "react"
import {Outlet} from "react-router-dom"
import "./navigation.styles.css"

function NavigationComponent () {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="/" className="nav-link">Home</a>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="/" className="nav-link">Home</a>
                            <a href="/shop" className="nav-link">Shop</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavigationComponent