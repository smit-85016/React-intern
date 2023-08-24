import React from 'react'
import BusinessCard1 from './BusinessCard1'
import BusinessCard2 from './BusinessCard2'
import BusinessCard3 from './BusinessCard3'
import './BusinessCard.css'



const BusinessCardCall = () => {
    return (
        <>
            <div className="BS-cards">
                <div>
                    <BusinessCard1 contact="+919263259427" companyname="PERFETTO SOLUTIONS" designation="Software company" address="Ajay Arcade, Surendranagar, Gujarat" />

                    <BusinessCard2 contact="+919664641756"  companyname="Devdutt Technologies" designation="Software company" address="Ajay Arcade, Surendranagar, Gujarat" />

                    <BusinessCard3 contact="+917352738392"  companyname="Findpro IT Solution" designation="Software company" address=" New 80 Feet Rd, Surendranagar, Gujarat" />
                </div>       
            </div>
        </> 
    )
}

export default BusinessCardCall
