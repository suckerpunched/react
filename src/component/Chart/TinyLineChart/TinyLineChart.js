import React from 'react';
import { useSelector } from 'react-redux';

import {
  LineChart, Line
} from 'recharts';

export default function TinyLineChart() {
  const userCounter = useSelector(state => state.userpage.userCounter);

    const data = [
        {
            date: '12',
            clicks: 1 * userCounter,
            impressions: 10,
        },
        {
            date: '13',
            clicks: 5,
            impressions: 32,
        },
        {
            date: '14',
            clicks: 3 * userCounter,
            impressions: 27,
        },
        {
            date: '15',
            clicks: 1,
            impressions: 10,
        },
        {
            date: '16',
            clicks: 5 * userCounter,
            impressions: 32,
        },
        {
            date: '17',
            clicks: 3,
            impressions: 27,
        }
    ];

  return (
    <LineChart width={300} height={100} data={data}>
      <Line type="monotone" dataKey="clicks" stroke="#8884d8" strokeWidth={2} />
      <Line type="monotone" dataKey="impressions" stroke="#eb4034" strokeWidth={2} />
    </LineChart>
  );
}