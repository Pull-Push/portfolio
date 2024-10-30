import React from 'react'
import '../../assets/styles/qrstyle.css'


export default function QRCodeRender(){
    return(
        <div className='qr-component justify-items-center content-center'>
            <div className="bg-white p-3.5 rounded-2xl w-5/6 justify-items-center max-w-sm" >
                <img src={require('../../assets/images/frontendmentor/image-qr-code.png')} alt='QR Code for Frontend Mentor' />
                <h3 className='text-center pt-7 text-xl font-bold'>Improve your front-end skills by building projects </h3>
                <p className='text-center pt-5'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
            <div className="attribution text-center my-4">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>- Coded by<a href="mailto: JeffSokolDev@gmail.com">Jeff Sokol - JeffSokolDev@gmail.com</a>
    </div>
        </div>
    )
}