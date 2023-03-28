import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/main.css'
import './css/animation.css'
import './css/profile.css'
import './css/project.css'
import './css/modal.css'
import './css/contact.css';
import './css/footer.css';
import "./css/auth.css";
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)