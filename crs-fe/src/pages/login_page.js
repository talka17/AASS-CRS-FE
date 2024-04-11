import * as React from 'react';
import {View, Button} from 'react-native';
import { useState } from "react";
import Username from './components/Username';
import Password from './components/Password';
import Login from './components/Login';
import Register from './components/Register';

function Login_page() {
    const [usernameValue, setUsername] = useState('');
    const [PasswordValue, setPassword] = useState('');


  	const changeUsername = (newUsername) => {
    	setUsername(newUsername);
  	}

    const changePassword = (newPassword) => {
    	setPassword(newPassword);
  	}
  
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Username
              changeUsername={changeUsername}
            />
            <Password
              changePassword={changePassword}
            />
            <Login/>
            <Register/>
        </View>
    );
  }

export default Login_page;