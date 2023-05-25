import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const myName = 'Alamin Rony';
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

// const headingStyle = {
//   backgroundColor : "purple",
//   color : "white",
//   textAlign : "center",
//   padding :"10px"
// }
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <div>
      <h1 className="headingStyle">Hello World</h1>
      <p>{myName}</p>
      <p>{`day is ${day} Month is ${month} year is ${year}`}</p>
    </div>
 
)
