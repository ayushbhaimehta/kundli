import React from 'react'
import image from '../../assets/images/kundliImage.png'

const KundliResult = () => {
    return (
        <div style={{
            width: '100%', height: '100%', font: '14px/ 1.5 "PT Sans Narrow", sans-serif',
            background: '#080e24 url(https://t4.ftcdn.net/jpg/02/43/75/73/360_F_243757367_gBpS6R5c8DB7pL5gw9gi9KXlzFfbdZOA.jpg) repeat',
            color: '#626668',
            overflow: 'hidden',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                position: 'relative',
                width: '80%',
                height: '10%',
                display: 'flex',
                justifyContent: 'space-around',
            }}>
                <div>
                    <h2 style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}>जातक-विवरण</h2>
                </div>
                <div>
                    <h2 style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}>ळग्न</h2>
                </div>
                <div>
                    <h2 style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}>नवांश</h2>
                </div>
                <div>
                    <h2 style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}>ग़्रह-स्पष्ट</h2>
                </div>
                <div>
                    <h2 style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}>होरा-कुण्डली</h2>
                </div>
                <div>
                    <h2 style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}>द्रेषकोण</h2>
                </div>
                <div>
                    <h2 style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}>चतुर्थांश</h2>
                </div>
                <div>
                    <h2 style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}>षष्ठांश</h2>
                </div>

            </div>
            <div style={{
                position: 'relative',
                width: '70%',
                height: '70%',
                boxShadow: 'blue 2px 2px 10px',
                border: '1px solid rgb(240, 0, 0)',
                background: 'radial-gradient(circle, #FFD700, #FFA500, #FF6347, #8A2BE2, #4B0082, #8A2BE2, #FF6347, #FFA500, #FFD700)'
            }}>
                <img
                    src={image}
                    alt='kundli'
                    height={'100%'}
                    width={'100%'}
                />
            </div>
        </div>
    )
}

export default KundliResult
