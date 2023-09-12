import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './landing-page/LandingPage';
import Header from './header-footer/Header';
import Footer from './header-footer/Footer';
import About from './other-pages/About';
        //  ================All membership packages=================
import EasyAccess from './other-pages/membership-packages/EasyAccess';
import FamilyExcersion from './other-pages/membership-packages/FamilyExcersion';
import FamilyAlternative from './other-pages/membership-packages/FamilyAlternative';
import SuperiorotyExtension from './other-pages/membership-packages/SuperiorotyExtension';
import UltimatePrivilege from './other-pages/membership-packages/UltimatePrivilege';
import PrivilegeAccess from './other-pages/membership-packages/PrivilegeAccess';
import FamilyPremium from './other-pages/membership-packages/FamilyPremium';
import Blogs from './other-pages/blog-page/Blogs';
import Error from './other-pages/Error';
import Blog from './other-pages/blog-page/Blog';
import Contact from './other-pages/Contact';
import Faq from './other-pages/faq/Faq';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>} />
      <Route path="/header" element={<Header/>} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/about" element={<About></About>} />
     {/* ========= packages-router ========= */}
     <Route path='/elite-easy-access' element={<EasyAccess></EasyAccess>} />
     <Route path='/elite-family-excersion' element={<FamilyExcersion></FamilyExcersion>} />
     <Route path='/elite-family-alternative' element={<FamilyAlternative></FamilyAlternative>} />
     <Route path='/elite-superiority-extension' element={<SuperiorotyExtension></SuperiorotyExtension>} />
     <Route path='/elite-ultimate-privilege' element={<UltimatePrivilege></UltimatePrivilege>} />
     <Route path='/elite-privilege-access' element={<PrivilegeAccess></PrivilegeAccess>} />
     <Route path='/elite-family-premium' element={<FamilyPremium></FamilyPremium>} />

     {/* =============blogs routs=============== */}
     <Route path='/blogs' element={<Blogs></Blogs>} />
     <Route path='/:id' element={<Blog></Blog>}/>

     {/* =======================Contact page==================== */}
     <Route path='/contact' element={<Contact></Contact>} />


     {/* =======================FAQ page==================== */}
     <Route path='/faq' element={<Faq></Faq>} />


     {/* ====================Error page========================== */}

    <Route path='*' element={<Error></Error>} />

   </Routes>
   <Footer></Footer>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
