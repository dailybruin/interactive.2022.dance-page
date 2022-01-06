import React from 'react'

const Pictures = () => (
    <div className="grid-container-mobile">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ce-line-as-the-rose-fairy-in-the-nutcracker-candrew-ross-1516980032.jpg" alt="Snow" style= {{width: "100%", padding: "40px 5px 0 40px"}} />
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ce-line-as-the-rose-fairy-in-the-nutcracker-candrew-ross-1516980032.jpg" alt="Forest" style= {{width: "100%", padding: "40px 5px 0 5px"}} />
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ce-line-as-the-rose-fairy-in-the-nutcracker-candrew-ross-1516980032.jpg" alt="Mountains" style= {{width: "100%", padding: "40px 40px 0 5px"}} />
    </div>
);

const Credits = () => (
    <p className = 'cred-text'> <b>PHOTOGRAPHER</b>/Daily Bruin</p>
)

const Caption = () => (
    <p className = 'caption-box'>caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption caption captioncaption caption caption caption caption caption caption caption caption caption caption caption caption caption caption </p>
) 
function PictureRow() {
    return (
        <div className = 'background'>
            <Pictures />
            <Credits />
            <Caption />
            {/* <hr className = 'divider'/> */}
            {/* <Pictures />
            <Credits />
            <Caption /> */}
        </div>
    )
}

export default PictureRow
