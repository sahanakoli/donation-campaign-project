/* eslint-disable no-unused-vars */
import React, { PureComponent, useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#00C49F', '#FF444A'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );

}

 

const Statistics = () => {

    const [total, setTotal] = useState(0);

    useEffect(() =>{

        const localItem = localStorage.getItem("donation") ? JSON.parse(localStorage.getItem("donation")) : [];

        setTotal(localItem.length * 100 / 12)
    }, [])

    const data = [
        { name: 'All Donation', value: total },
        { name: 'Donated items', value: 100 - total }
        
      ];
   
    return (
        <div className='mt-16'>   
        <div className=' flex justify-center items-center'>     
        <PieChart width={400} height={500}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>
      
      <div className=' flex-wrap lg:flex justify-center items-center gap-12 '>
         <div className=' flex justify-center items-center gap-2 mb-10'>
            <h1 className=' text-lg font-normal'>Your Donation</h1>
            <p className=' bg-[#00C49F] w-[100px] h-3'></p>
         </div>
         <div className='flex justify-center items-center gap-2 mb-10 '>
         <h1 className=' text-lg font-normal'>Total Donation</h1>
            <p className=' bg-[#FF444A] w-[100px] h-3'></p>
         </div>
         </div>
        </div>
    );
    
};

export default Statistics;