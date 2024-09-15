import React from 'react'
import Header from './project1/Header/Header';
import Footer from './project1/Footer/Footer';
import { Outlet } from 'react-router-dom';//use for multi page run 
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}
export default Layout;