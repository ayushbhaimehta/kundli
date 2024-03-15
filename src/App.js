import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import ForgetPasswordPage from './components/pages/ForgetPasswordPage';
import Home from './components/pages/HomePage';
import Houses from './components/pages/Houses';

import './App.css';

export default function App() {
    const backgroundImageStyle = {
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <Router>
            <div style={backgroundImageStyle}>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/forget-password" component={ForgetPasswordPage} />
                    <Route path="/details" component={Houses} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}
