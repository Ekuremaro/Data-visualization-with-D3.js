import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import ChartPage from './pages/chart/ChartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
