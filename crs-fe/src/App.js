import "./App.css";
import * as React from 'react';
import { View} from 'react-native';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Login_page from './pages/login_page';

function App() {
  return (
    <View>
      <View />
      <Nav />
      <Routes>
        <Route path='/' element={<Login_page />}></Route>
       </Routes>
    </View>
  );
}

export default App;
