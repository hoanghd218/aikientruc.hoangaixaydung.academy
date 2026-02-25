import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PaymentPageCamOn from './pages/PaymentPageCamOn';
import FreeCourse2SessionPage from './pages/FreeCourse2SessionPage';
import ThankYouFreePage from './pages/ThankYouFreePage';
import ThankYouFreePageMuaKhoaHoc from './pages/ThankYouFreePageMuaKhoaHoc';
import MaterialStoreLandingPage from './pages/MaterialStoreLandingPage';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
function App() {

  const location = useLocation();



  useEffect(() => {
    // global fbq from index.html
    // if (window.fbq) {
    //   window.fbq('track', 'PageView');
    // }


    ReactPixel.track('PageView');
  }, [location.pathname]);



  return (
    <Routes>
      <Route path="/" element={<FreeCourse2SessionPage />} />
      <Route path="/ai-kien-truc-chuyen-sau" element={<HomePage />} />
      <Route path="/mua-khoa-hoc-ai-kientruc" element={<PaymentPageCamOn />} />
      <Route path="/ai-kien-truc-2-buoi-free" element={<FreeCourse2SessionPage />} />
      <Route path="/free" element={<FreeCourse2SessionPage />} />
      <Route path="/cam-on-dang-ky-khoa-free" element={<ThankYouFreePage />} />
      <Route path="/ai-cho-chu-cua-hang-vat-lieu-gach" element={<MaterialStoreLandingPage />} />
    </Routes>
  );
}

export default App;
