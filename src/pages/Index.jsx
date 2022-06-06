import React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import Carousel from '../components/carousel/Carousel'
import Service from '../components/services/Service'
import WhyUs from '../components/whyus/WhyUs'
import Faq from '../components/faq/Faq'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'
import Jumbotron from '../components/jumbotron/Jumbotron'


const Index = () => {
  return (
    <div>
    <Jumbotron />
    <Service />
    <WhyUs />
    <Carousel />
    <Banner />
    <Faq />  
    <Footer />
    </div>
  )
}

export default Index
