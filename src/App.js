import './App.css';
import MainMenu from './Layers/MainMenu';
import React from 'react';
import Center from './Layers/Center';
import Right from './Layers/Right';

function App() {
  return (
    <div className='App '>
      <div className='app-wrapper flex flex-row justify-between '>
      <MainMenu className=''/>
      <Center/>
      <Right />
      </div>
      
    </div>
  );
}

export default App;
