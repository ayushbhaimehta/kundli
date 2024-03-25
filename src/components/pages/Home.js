import './Form.css'; // Import CSS file for styling
import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import Background from '../components/Background';

const TimezoneSelect = ({ value, onChange }) => {
    const [timezones, setTimezones] = useState([]);

    useEffect(() => {
        const fetchTimezones = () => {
            const allTimezones = moment.tz.names();
            const tzList = allTimezones.map(zone => (
                moment.tz(zone).format('Z') + ' - ' + zone
            )
            );
            setTimezones([...new Set(tzList)].sort());
        };

        fetchTimezones();
    }, []);

    const handleChange = (e) => {
        const selectedTimezone = e.target.value;
        onChange(selectedTimezone);
    };

    return (
        <select value={value} onChange={handleChange} className='timezone-select'>
            {timezones.map((timezone, index) => (
                <option key={index} value={timezone}>
                    {timezone}
                </option>
            ))}
        </select>
    );
};

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
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleTimezoneChange = (timezone) => {
        console.log(timezone);
        setFormData({
            ...formData,
            timeZone: timezone
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform actions like submitting the form data to a backend server or performing calculations for generating the Kundli
        console.log(formData);
    };
    console.log(formData);

    return (
        <>
            <div style={{
                width: '100%', height: '100%', font: '14px/ 1.5 "PT Sans Narrow", sans-serif',
                background: '#080e24 url(https://t4.ftcdn.net/jpg/02/43/75/73/360_F_243757367_gBpS6R5c8DB7pL5gw9gi9KXlzFfbdZOA.jpg) repeat',
                color: '#626668',
                overflow: 'hidden'
            }}>
                <Background />
            </div>
            <div className="kundli-form-container">
                <h2 style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 'bold'
                }}>Kundli Form</h2>
                <form onSubmit={handleSubmit} className='kundli-form'>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth:</label>
                        <input
                            type="date"
                            name="dob"

                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Time of Birth:</label>
                        <input
                            type="time"
                            name="tob"
                            value={formData.tob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Timezone: </label>
                        <TimezoneSelect
                            value={formData.timeZone}
                            onChange={handleTimezoneChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Latitude:</label>
                        <input
                            type="text"
                            name="latitude"
                            value={formData.latitude}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Longitude:</label>
                        <input
                            type="text"
                            name="longitude"
                            value={formData.longitude}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <button type="submit">Generate Kundli</button>
                    </div>
                </form>
            </div>
        </>


    );
};

export default Home;
