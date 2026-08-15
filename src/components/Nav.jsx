import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'

const Nav = ({ setWindowsState, changeWallpaper }) => {
    return (
        <nav>
            <div className="left">
                <div className="apple-icon">
                    <img src="./navbar-icons/apple.svg" alt="" />
                </div>

                <div 
                    className="nav-item clickable"
                    onClick={() => setWindowsState && setWindowsState(state => ({ ...state, resume: true }))}
                >
                    <p>Divyansh</p>
                </div>

                <div 
                    className="nav-item clickable"
                    onClick={() => setWindowsState && setWindowsState(state => ({ ...state, ai: true }))}
                >
                    <p>Ai</p>
                </div>
                <div 
                    className="nav-item clickable"
                    onClick={() => changeWallpaper && changeWallpaper()}
                >
                    <p>Wallpaper</p>
                </div>
                <div 
                    className="nav-item clickable"
                    onClick={() => setWindowsState && setWindowsState(state => ({ ...state, cli: true }))}
                >
                    <p>Terminal</p>
                </div>

            </div>
            <div className="right">

                <div className="nav-icon">
                    <img src="/navbar-icons/wifi.svg" alt="" />
                </div>
                <div className="nav-item">
                    <DateTime />
                </div>

            </div>
        </nav>
    )
}

export default Nav