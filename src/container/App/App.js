import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

import Chart from '../../component/AreaChart';

import './Resizable.css';
  
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function App(props) {
  return (
    <ResponsiveGridLayout
      layouts={{
        lg:[
          {i: '1', x: 0, y: 0, w: 1, h: 1, isResizable:true},
          {i: '2', x: 1, y: 0, w: 1, h: 1, isResizable:true},
          {i: '3', x: 2, y: 0, w: 1, h: 1, isResizable:true},
          {i: '4', x: 0, y: 1, w: 3, h: 1, isResizable:true},
        ]
      }}
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 3, md: 3, sm: 3, xs: 3, xxs: 1}}
      compactType={null}
    >

      <div key="1"><Chart/></div>
      <div key="2"><Chart/></div>
      <div key="3"><Chart/></div>
      <div key="4"><Chart/></div>

    </ResponsiveGridLayout>
  )
}
