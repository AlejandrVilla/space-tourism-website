import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.scss'
import App from './App.jsx'
import {Home, Destination, Crew, Technology, ErrorPage} from "./pages";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Route>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
