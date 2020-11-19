import React from 'react';
import './App.css';
import PatientManagement from './components/PatientManagement/PatientManagement';
import ReducerCount from './components/ReducerCount/ReducerCount';
function App() {
  return (
    <>
      <ReducerCount />
      <PatientManagement />
    </>
  );
}

export default App;
