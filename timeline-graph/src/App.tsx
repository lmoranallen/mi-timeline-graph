import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeSeriesGraph from './components/TimeSeriesGraph';
import { data, options } from './data/timeSeriesData';

function App() {
  return (
    <div className="App">
        {/* <h1>Begin Dev</h1> */}
        <TimeSeriesGraph data={data} options={options}/>
    </div>
  );
}

export default App;
