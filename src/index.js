import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
import Raw from './test'
import ReducerDemo from './ReducerDemo';
import ReducerDemoTwo from './ReducerDemoTwo';
import Initial from './Initial';
import DataFetchingOne from './DataFetchingOne';
import Test from './test';

ReactDOM.render(
  <React.StrictMode>
    
    {/* <CounterOne />
    <br/>
    <CounterTwo /> */}
    {/* <Counter render={ (counter, handleIncrement) => <CounterOne counter={counter} handleIncrement={handleIncrement}/>}/>
    <br />
    <Counter render = {(counter, handleIncrement) => <CounterTwo counter={counter} handleIncrement={handleIncrement} /> }/> */}
    {/* <Raw /> */}
    {/* <ReducerDemoTwo /> */}
    {/* <Initial /> */}
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
