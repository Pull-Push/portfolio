import React from 'react'
import '../assets/styles/landingstyle.css'
import { Link } from 'react-router-dom'


export default function Landing() {
    return (
        <div>
            <div className="main mx-auto w-5/6 absolute inset-0 h-5/6">
                <img className='min-w-52' id='logo' src={require("../assets/images/landing/logo2.png")} alt="logo" />
                    <div className="links">
                        <a href="https://github.com/Pull-Push">github</a>
                        <a href="https://www.linkedin.com/in/jeffrey-sokol/">linkedin</a>
                        {/* <a href="/html/projects.html">projects</a> */}
                        <Link to="../../public/docs/JEFFREY_SOKOL_RESUME.pdf" target='_blank' download>resume</Link>
                    </div>
            </div>
        </div>
    )
}