import React from 'react';
import Heading from './Components/Heading'


const Home = () => {
  return (
    <div style={styles.container}>

      <Heading head="Home Heading" subhead="Home Sub heading " />

      <p>
        Welcome to the Home page of our website. We are thrilled to have you here!
        Whether you are a new visitor or a returning one, we hope you enjoy exploring
        our platform and find the information you're looking for.
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

export default Home;
