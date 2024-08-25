import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Alert from './assets/components/Alert';
import Nav from './assets/components/Nav';
import Card from './assets/components/Card';
import Text from './assets/components/Text';
import About from './assets/components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    showAlert("Mode changed to " + (mode === 'light' ? 'dark' : 'light'));
  };

  const showAlert = (message) => {
    setAlert({
      type: 'success',
      message: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
        <Route path='/about' element={<About mode={mode} showAlert={showAlert} />} />
        <Route path='/text' element={<Text showAlert={showAlert} mode={mode} />} />
        <Route path='/nav' element={<Text showAlert={showAlert} mode={mode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;