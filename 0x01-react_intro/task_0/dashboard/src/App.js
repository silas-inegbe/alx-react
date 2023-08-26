import React, { useState } from 'react';

function App() {
  return (
    <>
      <div className='Appp-header'>
        <img src={process.env.PUBLIC_URL + '/Hlogo.jpg'} alt="Logo" />
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>Copyright 2020 - Holberton School</p>
      </div>
      

    </>
  );
  
}

export default App;



