import React from 'react';
import Heading from './Components/Heading'


const Contact = () => {
  return (
    <div style={styles.container}>
      <Heading head="Contact Heading" subhead="Contact Sub heading " />

      <p>
      A Contact Us page is essential to building a brand
       website as it allows visitors to contact you easily
        without leaving their browser.
      </p>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid black',
    padding: '30px',
    margin: '10px'
  },
};

export default Contact;
