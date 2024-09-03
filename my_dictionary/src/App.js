import React from 'react';
import './App.css';
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
         <p>
          Hello! I am Thanusha.
        </p>     
      </header>
      <Dictionary />
      <footer className='text-center'>
      This project is coded by <a href="https://www.linkedin.com/in/thanusha-panaluwa/">Thanusha Panaluwa</a> and is <a href="https://github.com/Thanusha-Panaluwa">open-sourced</a> on Github.
      </footer>
    </div>
    </div> 
  );
}

export default App;
