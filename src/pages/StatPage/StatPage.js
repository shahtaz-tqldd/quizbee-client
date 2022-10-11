import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import './StatPage.css'

const StatPage = () => {
  const ques = useLoaderData()
  const dat = ques.data
  const data = [
    { name: `${dat[0].name}`, Topic1: `${dat[0].total}`, amt: 20 },
    { name: `${dat[1].name}`, Topic2: `${dat[1].total}`, amt: 20 },
    { name: `${dat[2].name}`, Topic3: `${dat[2].total}`, amt: 20 },
    { name: `${dat[3].name}`, Topic4: `${dat[3].total}`, amt: 20 },
  ];

  return (
    <div className='graph'>
      <h2>Graph of Total Question</h2>
      <div className='chart'>

        <BarChart width={730} height={350} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Topic1" fill="#82ca9d" />
          <Bar dataKey="Topic2" fill="#fffa9e" />
          <Bar dataKey="Topic3" fill="#eeca9c" />
          <Bar dataKey="Topic4" fill="#22c34e" />
        </BarChart>
      </div>
    </div>
  )
}

export default StatPage