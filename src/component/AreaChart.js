import React from "react";
import { useSelector } from "react-redux";

import { 
    ResponsiveContainer,
    AreaChart, Area
 } from "recharts";

export default function SimpleAreaChart() {
  const userCounter = useSelector((state) => state.userpage.userCounter);

  const data = [
    {
      date: "12",
      clicks: 1 * userCounter,
      impressions: 10,
    },
    {
      date: "13",
      clicks: 5,
      impressions: 32,
    },
    {
      date: "14",
      clicks: 3 * userCounter,
      impressions: 27,
    },
    {
      date: "15",
      clicks: 1,
      impressions: 10,
    },
    {
      date: "16",
      clicks: 5 * userCounter,
      impressions: 32,
    },
    {
      date: "17",
      clicks: 3,
      impressions: 27,
    },
    {
      date: "18",
      clicks: 1 * userCounter,
      impressions: 10,
    },
    {
      date: "19",
      clicks: 5,
      impressions: 32,
    },
    {
      date: "20",
      clicks: 3 * userCounter,
      impressions: 27,
    },
    {
      date: "21",
      clicks: 1,
      impressions: 10,
    },
    {
      date: "22",
      clicks: 5 * userCounter,
      impressions: 32,
    },
    {
      date: "23",
      clicks: 3,
      impressions: 27,
    },
  ];

  return (
    <ResponsiveContainer>
        <AreaChart
      // width={16}
      // height={20}
      data={data}
      // margin={{
      //   top: 10,
      //   right: 30,
      //   left: 0,
      //   bottom: 0,
      // }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <Tooltip /> */}
      <Area
        type="monotone"
        dataKey="clicks"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="impressions"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
    </AreaChart>
    </ResponsiveContainer>
  );
}