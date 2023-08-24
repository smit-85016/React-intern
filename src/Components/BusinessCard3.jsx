import React from 'react'


const BusinessCard3 = (props) => {
  return (
    <>
    <div className='BusinessCard3'>
    <h3 className="Contact">{props.contact} </h3>
    <h3 className="Name"> {props.name} </h3>
    <h1 className="CompanyName"> {props.companyname} </h1>
    <h3 className="Designation"> {props.designation} </h3>
    <p className="Address"> {props.address} </p>
    </div>
</>

  )
}

export default BusinessCard3