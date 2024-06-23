import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';


function Dashboard({ anggota }) {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance'];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>MOVIE</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>20 Film</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>GENRE</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>{genres.length} Genre</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ANGGOTA</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{anggota.length} Anggota</h1>
        </div>
      </div>

      <Link to="/anggota">Tambahkan Anggota</Link>

      <div className='anggota-list'>
        <h3>Daftar Anggota</h3>
        <ul>
          {anggota.map((nama, index) => (
            <li key={index}>{nama}</li>
          ))}
        </ul>
      </div>

    </main>
  );
}

export default Dashboard;
