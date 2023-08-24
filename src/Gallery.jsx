// import React from 'react';

// const Gallery = () => {
//   return (
//     <div style={styles.container}>
//       <h1>Gallery</h1>
//       <p>Welcome to the photo gallery</p>
//       {<div style={styles.gallery}>
//         <img src={require('./images/photo1.jpg').default} alt="Photo 1" />
//         <img src={require('./images/photo2.jpg').default} alt="Photo 2" />
//         <img src={require('./images/photo3.jpg').default} alt="Photo 3" />
//       </div>

//     </div>
//   );
// };

// const styles = {
//   container: {
//     border: '1px solid black',
//     padding: '30px',
//     marginBottom: '10px',
//   },
//   gallery: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '10px',
//   },
// };


import React from 'react';
import './Gallery.css'; // Import your CSS file
import image1 from './images/photo1.jpg';
import image6 from './images/photo6.jpg';
import image3 from './images/photo3.jpg';
import image4 from './images/photo4.jpg';
import image7 from './images/photo7.jpg';
import image2 from './images/photo2.jpg';
import image5 from './images/photo5.jpg';
import image14 from './images/photo14.jpg';
import image11 from './images/photo11.jpg';
import image10 from './images/photo10.jpg';
import image9 from './images/photo9.jpg';
import image12 from './images/photo12.jpg';
import image13 from './images/photo13.jpg';
import image16 from './images/photo16.png';



const Gallery = () => {
    const imageUrls = [
        image1, image6, image3, image4, image7, image2, image5, image14, image11, image10, image9, image12, image13, image16 
    ];

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Gallery</h1>
            <div className="gallery">
                {imageUrls.map((url, index) => (
                    <div key={index} className="gallery-item">
                        <div className="content">
                            <img src={url} alt={`Image ${index}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
