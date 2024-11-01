import React from 'react';
import '../../assets/styles/blogpreview.css'
import BlogLogo  from '../../assets/images/frontendmentor/bloglogo';
export default function BlogCardRender() {
    return (
        <div className='blog-component grid justify-items-center content-center'>
            <div className="card bg-white p-3.5 rounded-2xl w-5/6 justify-items-center max-w-sm border-2 border-black">
                <BlogLogo />
                <div className='justify-items-left'>
                <p>Learning</p>
                <p>Publshed 21 Dec 2023</p>
                <p>HTML & CSS foundations</p>
                <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
                <div className="lower">
                    <img src={require("../../assets/images/frontendmentor/image-avatar.webp")} alt="" className="avatar" />
                    <p>Greg Hooper</p>
                </div>
                </div>
            </div>
                <div className="attribution text-center my-4">
                    Challenge by
                    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'> Frontend Mentor</a>. Coded by<a href="mailto: JeffSokolDev@gmail.com">Jeff Sokol - JeffSokolDev@gmail.com</a>.
                </div>
        </div>
    )
}