import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Anggota({ onAddAnggota, anggota }) {
    const [nama, setNama] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setNama(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (nama.trim() !== '') {
            onAddAnggota(nama.trim());
            setNama('');
        }
    };

    const handleLogout = () => {
        // Implementasi logout, seperti menghapus token, dll.
        // Lalu arahkan ke halaman login atau halaman utama
        navigate('/');
    };

    return (
        <div className='admin-section'>
            <h3>Tambah Anggota Baru</h3>

            <form onSubmit={handleFormSubmit}>
                <input
                    type='text'
                    value={nama}
                    onChange={handleInputChange}
                    placeholder='Nama anggota baru'
                />
                <button type='submit'>Tambah Anggota</button>
            </form>

            <button onClick={handleLogout} style={{ marginTop: '10px' }}>Keluar</button>
        </div>
    );
}

export default Anggota;
