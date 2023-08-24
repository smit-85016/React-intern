import React, { useState } from 'react';
import firebase from 'firebase/app'
import 'firebase/storage'


const ImageInput = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleImageUpload = () => {
    if (image) {
      const storageRef = firebase.storage().ref(`images/${image.name}`);
      storageRef.put(image).then(() => {
        console.log('Image uploaded successfully!');
      }).catch(error => {
        console.error('Error uploading image: ', error);
      });
    }
  };
  
  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
    </div>
  );
}

export default ImageInput;