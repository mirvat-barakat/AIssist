import React, {useState} from 'react';
import './styles.css';
import axios from 'axios';

const Form = ({ onSubmit }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [category, setCategory] = useState('');
    const [profile_picture, setProfilePicture] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [whatsapp_number, setWhatsappNumber] = useState('');
    const [location, setLocation] = useState('');
    

    const handleNameChange = (e) => {
        setName(e.target.value);
      };
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
      const handleSpecialityChange = (e) => {
        setSpeciality(e.target.value);
      };
      const handleCategoryChange = (e) => {
        setCategory(e.target.value);
      };
      const handleProfilePictureChange = (e) => {
        setProfilePicture(e.target.value);
      };
      const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
      };
      const handleWhatsappNumberChange = (e) => {
        setWhatsappNumber(e.target.value);
      };
      const handleLocationChange = (e) => {
        setLocation(e.target.value);
      };



    const handleAddSpecialist = (e) => {
        const token = localStorage.getItem("token");
        e.preventDefault();
        axios.post('http://192.168.1.6:8000/api/v0.0.1/specialist', {
            'name': name,
            'email': email,
            'speciality': speciality,
            'category': category,
            'profile_picture': profile_picture,
            'phone_number': phone_number,
            'whatsapp_number':whatsapp_number,
            'location': location,
        }, {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer ' + token
            }
        })
        .then(response => {
        console.log(response);
            if (response.data.status == "success"){
                onSubmit();
            }
        })
        .catch(error => {
            console.log(error);
        });
    };


    return (
        <form className="form">
            <h2>Add Specialist</h2>
            <div className='form1-input1'>
                <label htmlFor="name" className="input1-text">Name:</label>
                <input
                    className="input1"
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange} 
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="email" className="input1-text">Email:</label>
                <input
                    className="input1"
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange} 
         
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="category" className="input1-text">Category:</label>
                <input
                    className="input1"
                    type="text"
                    id="category"
                    value={category}
                    onChange={handleCategoryChange} 
    
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="speciality" className="input1-text">Speciality:</label>
                <input
                    className="input1"
                    type="text"
                    id="speciality"
                    value={speciality}
                    onChange={handleSpecialityChange} 

                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="phone-number" className="input1-text">Phone Number:</label>
                <input
                    className="input1"
                    type="text"
                    id="phone-number"
                    value={phone_number}
                    onChange={handlePhoneNumberChange} 
 
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="phone-number" className="input1-text">WhatsApp Number:</label>
                <input
                    className="input1"
                    type="text"
                    id="whatsapp-number"
                    value={whatsapp_number}
                    onChange={handleWhatsappNumberChange} 
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="location" className="input1-text">Location:</label>
                <input
                    className="input1"
                    type="text"
                    id="location"
                    value={location}
                    onChange={handleLocationChange} 
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="profile-picture" className="input1-text">Profile Picture:</label>
                <input
                    className="input1"
                    type="file"
                    id="profile-picture"
                    value={profile_picture}
                    onChange={handleProfilePictureChange} 
                    
                />
            </div>
          <button type="submit" className='button3' onClick={handleAddSpecialist}>Add Specialist</button>
        </form>
      );
};
export default Form