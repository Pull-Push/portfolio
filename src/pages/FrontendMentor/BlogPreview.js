import React from 'react';
import styles from '../../assets/styles/blogpreview.module.css'
import { BlogLogo } from '../../assets/images/frontendmentor/bloglogo';
export default function BlogCardRender() {
    return (
        <div className='page'>
            <div className="card">
                <BlogLogo />
                <p>Learning</p>
                <p>Publshed 21 Dec 2023</p>
                <p>HTML & CSS foundations</p>
                <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
                <div className="lower">
                    <img src="" alt="" className="avatar" />
                    <p>Greg Hooper</p>
                </div>
                <div className="attribution text-center my-4">
                    Challenge by
                    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. Coded by<a href="mailto: JeffSokolDev@gmail.com">Jeff Sokol - JeffSokolDev@gmail.com</a>.
                </div>
            </div>
        </div>
    )
}