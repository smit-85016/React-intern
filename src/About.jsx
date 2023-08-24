import React from 'react'
import Heading from './Components/Heading'

const About = () => {
  return (
    <div style={styles.container}>

  <Heading head="About Page Heading" subhead="About Sub heading " />

      <p>
      The About Us page of your website is an essential 
      source of information for all who want to know more 
      about your business.
      </p>
    </div>
  )
}

const styles = {
  container: {
    border: '1px solid black', 
    padding: '30px', 
    margin: '10px'
  },
};

export default About