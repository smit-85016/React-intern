import React from 'react'
import './BusinessCard.css'


const BusinessCard1 = (props) => {
  return (
    <>
    <div className='BusinessCard1'>
    <h3 className="Contact">{props.contact} </h3>
    <h3 className="Name"> {props.name} </h3>
    <h1 className="CompanyName"> {props.companyname} </h1>
    <h3 className="Designation"> {props.designation} </h3>
    <p className="Address"> {props.address} </p>
    </div>
</>

  )
}

export default BusinessCard1

