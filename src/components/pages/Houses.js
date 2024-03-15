import React from 'react';
import './houses.css';

const Houses = () => {
    // Hard-coded data for houses and nakshatras
    const data = [
        { house: 1, nakshatra: 'Ashwini' },
        { house: 2, nakshatra: 'Bharani' },
        { house: 3, nakshatra: 'Krittika' },
        { house: 4, nakshatra: 'Rohini' },
        { house: 5, nakshatra: 'Mrigashira' },
    ];

    return (
        <div className="container">
            <h1>House and Nakshatra Information</h1>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>House</th>
                            <th>Nakshatra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.house}</td>
                                <td>{item.nakshatra}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Houses;
