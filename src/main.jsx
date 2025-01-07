import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import RouterConfig from './RouterConfig.jsx';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <RouterConfig />
    </Router>
  </StrictMode>,
)
