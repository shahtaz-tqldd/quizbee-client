import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import './StatPage.css'

const StatPage = () => {
  const ques = useLoaderData()
  const dat = ques.data
  const data = [
    { name: `${dat[0].name}`, React: `${dat[0].total}`, amt: 20 },
    { name: `${dat[1].name}`, Javascript: `${dat[1].total}`, amt: 20 },
    { name: `${dat[2].name}`, CSS: `${dat[2].total}`, amt: 20 },
    { name: `${dat[3].name}`, Git: `${dat[3].total}`, amt: 20 },
  ];

  return (
    <div className='graph'>
      <h2>Graph of Total Question</h2>
      <div className='chart'>

        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="React" fill="#82ca9d" />
          <Bar dataKey="Javascript" fill="#6dd5ed" />
          <Bar dataKey="CSS" fill="#eeca9c" />
          <Bar dataKey="Git" fill="#f7797d" />
        </BarChart>
      </div>
    </div>

  )
}

export default StatPage