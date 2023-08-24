import React from 'react'
import '../App.css';

const Heading = ({ head, subhead }) => {
    return (
        <div>
            <h1>{head}</h1>
            <h4>{subhead}</h4>
        </div>
    )
}

export default Heading
