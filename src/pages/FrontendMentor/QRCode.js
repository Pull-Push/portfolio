import React from 'react'
import '../../assets/styles/qrstyle.css'


export default function QRCodeRender(){
    return(
        <div>
            <div className="container p-7 mt-16 w-5/6 sm:w-1/5 sm:mt-48">
                <img src={require('../../assets/images/frontendmentor/image-qr-code.png')} alt='QR Code for Frontend Mentor' />
                <h3 className='text-center pt-7 text-xl font-bold'>Improve your front-end skills by building projects </h3>
                <p className='text-center py-5'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
            <div class="attribution text-center my-4">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. Coded by <a href="mailto: JeffSokolDev@gmail.com">Jeff Sokol - JeffSokolDev@gmail.com</a>.
    </div>
        </div>
    )
}