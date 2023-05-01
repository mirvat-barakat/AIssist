import React, {useState} from 'react';
import './styles.css';
import axios from 'axios';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [category, setCategory] = useState('');
    const [profile_picture, setProfilePicture] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const token = localStorage.getItem("token");


    const handleAddSpecialist = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/v0.0.1/specialist', {
            'name': name,
            'email': email,
            'speciality': speciality,
            'category': category,
            'profile_picture': profile_picture,
            'phone_number': phone_number,
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
                alert("Specialist added");
            }
        })
        .catch(error => {
            console.log(error);
        });
    };


    return (
        <form className="form">
            <div className='form1-input1'>
                <label htmlFor="name" className="input1-text">Name:</label>
                <input
                    className="input1"
                    type="text"
                    id="name"
                    name={name}
                    setName={setName}
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="email" className="input1-text">Email:</label>
                <input
                    className="input1"
                    type="email"
                    id="email"
                    email={email}
                    setEmail={setEmail}
         
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="category" className="input1-text">Category:</label>
                <input
                    className="input1"
                    type="text"
                    id="category"
                    category={category}
                    setCategory={setCategory}
    
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="speciality" className="input1-text">Speciality:</label>
                <input
                    className="input1"
                    type="text"
                    id="speciality"
                    speciality={speciality}
                    setSpeciality={setSpeciality}

                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="phone-number" className="input1-text">Phone Number:</label>
                <input
                    className="input1"
                    type="text"
                    id="phone-number"
                    phone_number={phone_number}
                    setPhoneNumber={setPhoneNumber}
 
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="location" className="input1-text">Location:</label>
                <input
                    className="input1"
                    type="text"
                    id="location"
                    location={location}
                    setLocation={setLocation}
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="profile-picture" className="input1-text">Profile Picture:</label>
                <input
                    className="input1"
                    type="file"
                    id="profile-picture"
                    profile_picture={profile_picture}
                    setProfilePicture={setProfilePicture}
                    
                />
            </div>
          <button type="submit" className='button3' onClick={handleAddSpecialist}>Add Specialist</button>
        </form>
      );
};
export default Form