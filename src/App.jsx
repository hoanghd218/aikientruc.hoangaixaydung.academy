import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';
import FreeCourse2SessionPage from './pages/FreeCourse2SessionPage';
import ThankYouFreePage from './pages/ThankYouFreePage';
import ThankYouFreePageMuaKhoaHoc from './pages/ThankYouFreePageMuaKhoaHoc';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mua-khoa-hoc-ai-kientruc" element={<ThankYouFreePageMuaKhoaHoc />} />
      <Route path="/ai-kien-truc-2-buoi-free" element={<FreeCourse2SessionPage />} />
      <Route path="/cam-on-dang-ky-khoa-free" element={<ThankYouFreePage />} />
    </Routes>
  );
}

export default App;
