import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './admin/Header';
import Sidebar from './admin/Sidebar';
import Dashboard from './admin/Dashboard'; // Ubah nama file ke Dashboard
import Anggota from './admin/Anggota';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [anggota, setAnggota] = useState([]);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleAddAnggota = (nama) => {
    setAnggota([...anggota, nama]);
  };

  return (
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard anggota={anggota} />} />
            <Route path="/anggota" element={<Anggota onAddAnggota={handleAddAnggota} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
