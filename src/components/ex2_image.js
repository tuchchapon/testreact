import React from 'react'
export default function ex2_image(props) {
    return (
        <div>
            <img src="/logo512.png" height='100'></img>
            <img src="/images/1.jpg" height='100'></img>
            <img src="/images/1.jpg" height='110'></img>
            {props.image && <img src={props.image} height='120'></img>}
        </div>
    )
}
