import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacidad" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);