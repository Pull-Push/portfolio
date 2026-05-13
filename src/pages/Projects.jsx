import React from "react";
import '../assets/styles/projectstyle.css'

export default function ProjectRender() {
    return (
            <div className="project-component bg-black flex items-center justify-center">
                <div className="container flex flex-col justify-evenly bg-stone-900 pt-10">
                <div className="left text-white">
                <h2>Here are just a few of the the things I've been working on lately</h2>
                </div>
                <div className="right py-10">
                <div className="proj-example">
                    <img src="https://placehold.co/200" alt="" />
                </div>
                <div className="proj-example">
                    <img src="https://placehold.co/200" alt="" />
                </div>
                <div className="proj-example">
                    <img src="https://placehold.co/200" alt="" />
                </div>
                <div className="proj-example">
                    <img src="https://placehold.co/200" alt="" />
                </div>
                <div className="proj-example">
                    <img src="https://placehold.co/200" alt="" />
                </div>
                <div className="proj-example">
                    <img src="https://placehold.co/200" alt="" />
                </div>
                </div>
                </div>
            </div>
    )
}