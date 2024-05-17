import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login_page';
import DoctorDashboard from './pages/doctor_dashboard';
import PatientDashboard from './pages/patient_dashboard';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState('');

    const handleLoginSuccess = (role) => {
        setIsLoggedIn(true);
        setUserRole(role);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserRole('');
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={!isLoggedIn ? <LoginPage onLoginSuccess={handleLoginSuccess} /> : <Navigate to={`/${userRole}`} />} />
                <Route path="/doctor" element={isLoggedIn && userRole === 'doctor' ? <DoctorDashboard onLogout={handleLogout} /> : <Navigate to="/" />} />
                <Route path="/patient" element={isLoggedIn && userRole === 'patient' ? <PatientDashboard onLogout={handleLogout} /> : <Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
