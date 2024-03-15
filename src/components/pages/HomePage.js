import React, { useState } from 'react';
import './Form.css'; // Import the CSS file for styling

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        latitude: '',
        longitude: '',
        time: '',
        timeZone: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Name :
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Latitude:
                    <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} />
                </label>
                <label>
                    Longitude:
                    <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} />
                </label>
                <label>
                    Enter Time :
                    <input type="text" name="time" value={formData.time} onChange={handleChange} />
                </label>
                <label>
                    Time Zone:
                    <input type="text" name="timeZone" value={formData.timeZone} onChange={handleChange} />
                </label>
                <label>
                    Date:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;
