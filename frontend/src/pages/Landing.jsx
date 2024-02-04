import React from 'react'
import Easy_Peasy from '../components/header/Header'
import Main from '../components/hero/Hero'
import Content from '../components/explore/Explore'
import Service from '../components/services/Our_Service'
import Technology from '../components/Tech/Technology'
import Footer from '../components/Footer/Footer'

const Landing = () => {
  return (
    <div>
      <Easy_Peasy/>
      <Main/>
      <Content/>
      <Technology/>
      {/* <Service/> */}
      <Footer/>
    </div>
  )
}

export default Landing
