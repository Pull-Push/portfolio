import React from 'react';
import '../../assets/styles/blogpreview.css'
import BlogLogo  from '../../assets/images/frontendmentor/bloglogo';
export default function BlogCardRender() {
    return (
        <div className='blog-component grid justify-items-center content-center'>
            <div className="card bg-white p-5 rounded-2xl w-5/6 justify-items-center max-w-sm border-2 border-black min-w-min">
                <BlogLogo />
                <div className='justify-items-left'>
                <div className='bg-yellow-400 w-fit px-3.5'>
                    <p className='text-black font-bold my-3.5'>Learning</p>
                </div>
                <p className='text-black text-sm font-bold mb-3.5'>Publshed 21 Dec 2023</p>
                <p className='hover:text-yellow-400 text-black text-xl font-extrabold mb-3.5'>HTML & CSS foundations</p>
                <p className='mb-5'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
                <div className="flex justify-items-center content-end">
                    <img src={require("../../assets/images/frontendmentor/image-avatar.webp")} alt="" className="avatar w-1/12 mr-3.5" />
                    <p className='text-black font-extrabold mt-1'>Greg Hooper</p>
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