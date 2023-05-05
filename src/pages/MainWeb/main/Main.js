import React from 'react'
import Footer from '../../../components/Web/footer/Footer'
import Navbar from '../../../components/Web/navbar/Navbar'
import FeaturedProducts from "../../../components/Web/Main/FeaturedProducts/FeaturedProducts";
import ImageSection from '../../../components/Web/Main/ImageSection/ImageSection'
import AddSection from "../../../components/Web/Main/AddSection/AddSection"
import BannerSection from '../../../components/Web/Main/BannerSection/BannerSection';
import Slider from '../../../components/Web/Main/Carousel/Slider';

function Main() {


  return (
    <div className='main'>
      <Navbar />

      {/* Carousel */}

      <Slider />

      {/* Carousel */}

      {/* Image section */}

        <ImageSection />

      {/* Image section */}

        {/* add */}

        <AddSection />

        {/* add */}

      {/* banner section */}
      
      <BannerSection />
      
      {/* banner section  */}

      {/* Featured Products */}

      <FeaturedProducts />

      {/* Featured Products */}
      
      <Footer />

    </div>
  )
}

export default Main