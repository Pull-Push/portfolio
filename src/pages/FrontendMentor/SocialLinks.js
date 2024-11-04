import React from "react";
import '../../assets/styles/sociallink.css'


export default function SocialLinkRender() {
    return (
        <div className="social_link_component">
            <div className="card text-center grid content-center justify-items-center">
                <img src={require("../../assets/images/frontendmentor/avatar-jessica.jpeg")} alt="Jessica Randall" />
                <h2>Jessica Randall</h2>
                <h4 className="text-social-green">London, United Kingdom</h4>
                <p>"Front-end developer and avid reader."</p>
                <div className="links grid">
                        <button href='#' className="text-center text-white hover:text-black hover:bg-social-green">GitHub</button>
                        <button href='#' className="text-center text-white hover:text-black hover:bg-social-green">Frontend Mentor</button>
                        <button href='#' className="text-center text-white hover:text-black hover:bg-social-green">LinkedIn</button>
                        <button href='#' className="text-center text-white hover:text-black hover:bg-social-green">Twitter</button>
                        <button href='#' className="text-center text-white hover:text-black hover:bg-social-green">Instagram</button>

                </div>
            </div>
            <div className="attribution text-center my-4">
                Challenge by
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'> Frontend Mentor</a>. Coded by<a href="mailto: JeffSokolDev@gmail.com">Jeff Sokol - JeffSokolDev@gmail.com</a>.
            </div>
        </div>
    )
}