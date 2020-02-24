import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/Devitem/index'
import DevForm from './components/Devform/index'

export default function App() {
  const [devs,setDevs] = useState([]);

useEffect(() => {
  async function loadDevs() {
    const response =  await api.get('/devs');
    setDevs(response.data);
  }
  loadDevs();
}, []);

async function HandleAddDev(data) {
  const response = await api.post('/devs', data)
  setDevs([...devs, response.data])
}
  
  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={HandleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev =>(
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>

    </div>
  );
}

