import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function showData(data) {
  console.log(data)
}

function App() {
  const [serverData, setServerData] = useState(0);
  const [formData, setFormData] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/");
      const data = await res.json()
      setServerData(data.message)
      showData(data)
    }

    fetchData();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {serverData}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
