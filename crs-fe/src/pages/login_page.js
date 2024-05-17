import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function LoginPage({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const handleLogin = () => {
        if (username === 'doctor' && password === 'pass') {
            setLoginStatus('Success: Logged in as Doctor!');
            onLoginSuccess('doctor');
        } else if (username === 'patient' && password === 'pass') {
            setLoginStatus('Success: Logged in as Patient!');
            onLoginSuccess('patient');
        } else {
            setLoginStatus('Error: Incorrect username or password!');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Login
            </Typography>
            <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                fullWidth
                style={{ marginTop: 20 }}
            >
                Login
            </Button>
            <Typography color="error" style={{ marginTop: 20 }}>
                {loginStatus}
            </Typography>
        </div>
    );
}

export default LoginPage;
