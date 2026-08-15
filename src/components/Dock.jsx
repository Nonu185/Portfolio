import React from 'react'
import "./dock.scss"

const Dock = ({ windowsState, setWindowsState }) => {
    return (
        <footer className='dock' >
            <div
                onClick={() => { setWindowsState(state => ({ ...state, note: true })) }}
                className="icon note"><img src="/doc-icons/note.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, resume: true })) }}
                className="icon pdf"><img src="/doc-icons/pdf.svg" alt="" /></div>
            <div
                onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
            
             className="icon calender"><img src="/doc-icons/calender.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, spotify: true })) }}
                className="icon spotify"><img src="/doc-icons/spotify.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, safari: true })) }}
                className="icon safari"><img src="/doc-icons/Safari.svg" alt="Safari" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, ai: true })) }}
                className="icon siri">
                <img src="/doc-icons/ASiri.svg" alt="Siri AI" />
                {windowsState.ai && <div className="dot"></div>}
            </div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, cli: true })) }}
                className="icon cli"><img src="/doc-icons/cli.svg" alt="" /></div>
        </footer>
    )
}

export default Dock