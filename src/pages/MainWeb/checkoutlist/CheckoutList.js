import React from 'react'
import Footer from '../../../components/Web/footer/Footer'
import Navbar from '../../../components/Web/navbar/Navbar'
import NavGrid from '../../../components/Web/NavGrid'
import ProductsGrid from '../../../components/Web/productsGrid/ProductsGrid'


function CheckoutList() {

  return (
    <div>
        <Navbar/>
        <div>
          <NavGrid value="Checkout List" />
          <ProductsGrid />
        </div>

        <Footer />
    </div>
  )
}

export default CheckoutList