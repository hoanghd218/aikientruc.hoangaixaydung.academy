import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';
import FreeCourse2SessionPage from './pages/FreeCourse2SessionPage';
import ThankYouFreePage from './pages/ThankYouFreePage';
import ThankYouFreePageMuaKhoaHoc from './pages/ThankYouFreePageMuaKhoaHoc';
import { useLocation } from "react-router-dom";

import ReactFacebookPixel from "react-facebook-pixel";
import { useEffect } from 'react';




const options = {
  autoConfig: true,
  debug: true,
};

ReactFacebookPixel.init("25646519821650616", options);
ReactFacebookPixel.pageView();
function App() {

  const location = useLocation();

  useEffect(() => {
    ReactFacebookPixel.pageView();
  }, [location]);



  useEffect(() => {



  }, []);

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
