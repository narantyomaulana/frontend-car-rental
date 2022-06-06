import React from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Index from "../pages/Index";
import '../css/style.css'
import '../css/responsive.css'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Index />
    </div>
  )
}

export default MainLayout
