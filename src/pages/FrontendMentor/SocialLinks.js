import React from "react";
import '../../assets/styles/sociallink.css'


export default function SocialLinkRender() {
    return (
        <div className="social_link_component grid justify-items-center content-center">
            <div className="bg-[#1F1F1F] text-center grid content-center justify-items-center py-6 min-w-80">
                <img className='w-24' src={require("../../assets/images/frontendmentor/avatar-jessica.jpeg")} alt="Jessica Randall" />
                <h2 className="text-white">Jessica Randall</h2>
                <h4 className="text-social-green">London, United Kingdom</h4>
                <p className="text-white">"Front-end developer and avid reader."</p>
                <div className="grid bg-[#1F1F1F]v">
                        <button href='#' className="h-11 mt-3.5 bg-[#333333] text-center text-white hover:text-black hover:bg-social-green">GitHub</button>
                        <button href='#' className="h-11 mt-3.5 bg-[#333333] text-center text-white hover:text-black hover:bg-social-green">Frontend Mentor</button>
                        <button href='#' className="h-11 mt-3.5 bg-[#333333] text-center text-white hover:text-black hover:bg-social-green">LinkedIn</button>
                        <button href='#' className="h-11 mt-3.5 bg-[#333333] text-center text-white hover:text-black hover:bg-social-green">Twitter</button>
                        <button href='#' className="h-11 mt-3.5 bg-[#333333] text-center text-white hover:text-black hover:bg-social-green">Instagram</button>
                </div>
            </div>
            <div className="attribution text-center my-4 text-white">
                Challenge by
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'> Frontend Mentor</a>Coded by<a href="mailto: JeffSokolDev@gmail.com">Jeff Sokol - JeffSokolDev@gmail.com</a>
            </div>
        </div>
    )
}