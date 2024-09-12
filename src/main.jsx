import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles.css"
import ComponentApp from './ComponentApp.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>This Method did not use Component </h1>
    <App />
    <br /><br /><br />
    <hr /><br /><br /><br />
    <h1>This Method use Component </h1>
    <ComponentApp/>
  
  </React.StrictMode>,
)
