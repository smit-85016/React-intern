import React, { useState } from 'react';
import './RegistrationForm.css';

const initialErrorState = {
  name: '',
  contact: '',
  email: '',
  password: '',
  gender: '',
  address: '',
  city: '',
  hobbies: '',
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    password: '',
    gender: '',
    address: '',
    city: '',
    hobbies: {
      reading: false,
      traveling: false,
      gaming: false,
    },
  });

  const [errors, setErrors] = useState(initialErrorState);

  const validateForm = () => {
    const newErrors = { ...initialErrorState };
    let isValid = true;

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!/^[0-9]{10}$/.test(formData.contact)) {
      newErrors.contact = 'Invalid phone number';
      isValid = false;
    }


    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = 'Plese Enter Invalid email address';
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select at least one gender';
      isValid = false;
    }

    if (formData.address.trim() === '') {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    if (formData.city === '') {
      newErrors.city = 'Please select a city';
      isValid = false;
    }

    if (!formData.hobbies.reading && !formData.hobbies.traveling && !formData.hobbies.gaming) {
      newErrors.hobbies = 'Please select at least one hobby';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        hobbies: {
          ...prevData.hobbies,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Add code to send data to backend
    } else {
      console.log('Form has errors, please check the fields');
    }
  };


  const PostData = async (e) => {
    e.preventDefault();  

    const rest = await fetch("/test/SbWlPjATs8EBabI0hS3f");
  };


  return (
    <div className="form">
      <div className="registration-form">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
          />
          {errors.contact && <span className="error">{errors.contact}</span>}

          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}

              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleInputChange}

              />
              Female
            </label>
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}

          <label>City:</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          >
            <option value="">Select a city</option>
            <option value="Surendranagar">Surendranagar</option>
            <option value="Ahmdabad">Ahmdabad</option>
            <option value="Morbi">Morbi</option>
          </select>
          {errors.city && <span className="error">{errors.city}</span>}


          <label>Hobbies:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="reading"
                checked={formData.hobbies.reading}
                onChange={handleInputChange}
              />
              Reading
            </label>
            <label>
              <input
                type="checkbox"
                name="traveling"
                checked={formData.hobbies.traveling}
                onChange={handleInputChange}
              />
              Traveling
            </label>
            <label>
              <input
                type="checkbox"
                name="gaming"
                checked={formData.hobbies.gaming}
                onChange={handleInputChange}
              />
              Gaming
            </label>
          </div>
          {errors.hobbies && <span className="error">{errors.hobbies}</span>}
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="submitted-data">
        <h2>Your Data:</h2>
        <p>Your Name is: {formData.name}</p>
        <p>Your Contact Number is: {formData.contact}</p>
        <p>Your Email is: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>Your Gender: {formData.gender}</p>
        <p>Your Address: {formData.address}</p>
        <p>Your City is: {formData.city}</p>
        <p>Your Hobbies is:</p>

        {formData.hobbies.reading && <h2>Reading</h2>}
        {formData.hobbies.traveling && <h2>Traveling</h2>}
        {formData.hobbies.gaming && <h2>Gaming</h2>}

      </div>


    </div>
  );
};

export default RegistrationForm;
