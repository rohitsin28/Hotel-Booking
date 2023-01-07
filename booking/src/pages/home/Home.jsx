import React from 'react';
import "./Home.css";
import Featured from '../../components/featured/Featured';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from "../../components/mailList/MailList";
import PropertyList from '../../components/propertyList/PropertyList';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
      <Featured/>
      <h1 className='homeTitle'>Browse by property type</h1>
      <PropertyList/>
      <h1 className='homeTitle'>Homes guest love</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home 