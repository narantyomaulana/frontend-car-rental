import React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import Navbar from '../components/navbar/Navbar'
import JumbotronNoButton from '../components/jumbotron/JumbotronNoButton'
import Search from '../components/searchcar/Search'
import Footer from '../components/footer/Footer'

const Cars = () => {
  return (
    <div>
      <Navbar />
      <JumbotronNoButton />
      <Search />
      <Footer />
    </div>
  )
}
export default Cars
