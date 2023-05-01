import React from 'react';
import './styles.css';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [soeciality, setsoeciality] = useState('');
    const [category, setCategory] = useState('');
    const [profilr_picture, setProfilrPicture] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');


    const handleAddSpecialist = (e) => {
        e.preventDefault();
    };


    return (
        <form className="form">
            <div className='form1-input1'>
                <label htmlFor="name" className="input1-text">Name:</label>
                <input
                    className="input1"
                    type="text"
                    id="name"
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="email" className="input1-text">Email:</label>
                <input
                    className="input1"
                    type="email"
                    id="email"
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="category" className="input1-text">Category:</label>
                <input
                    className="input1"
                    type="text"
                    id="category"
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="speciality" className="input1-text">Speciality:</label>
                <input
                    className="input1"
                    type="text"
                    id="speciality"
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="phone-number" className="input1-text">Phone Number:</label>
                <input
                    className="input1"
                    type="text"
                    id="phone-number"
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="location" className="input1-text">Location:</label>
                <input
                    className="input1"
                    type="text"
                    id="location"
                    required
                />
            </div>
            <div className='form1-input1'>
                <label htmlFor="profile-picture" className="input1-text">Profile Picture:</label>
                <input
                    className="input1"
                    type="file"
                    id="profile-picture"
                />
            </div>
          <button type="submit" className='button3' onClick={handleAddSpecialist}>Add Specialist</button>
        </form>
      );
};
export default Form