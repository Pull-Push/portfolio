import React from 'react'
import '../../assets/styles/qrstyle.css'


export default function QRCodeRender(){
    return(
        <div>
            <div className="container">
                <img src={require('../../assets/images/frontendmentor/image-qr-code.png')} alt='QR Code for Frontend Mentor' />
                <h4>Improve your front-end skills by building projects</h4>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}