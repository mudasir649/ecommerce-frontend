import React, { useContext, useEffect, useState } from 'react'
import ProductCheckout from '../../../components/Web/checkout/ProductCheckout';
import Footer from '../../../components/Web/footer/Footer'
import Navbar from '../../../components/Web/navbar/Navbar'
import NavGrid from '../../../components/Web/NavGrid';
import { DarkModeContext } from '../../../context/DarkModeContext';
import { api } from '../../../helpers/Api';

function Checkout() {

  const { user } = useContext(DarkModeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    let response;
    const fetchApi = async() => {
      try {
        const res = await api.get(`${process.env.REACT_APP_PORT}/product/cartbyuser/${user?.userId}`);
        response = await res.data;
        if(response?.success === true){
            setData(response?.data);
        }
    } catch (error) {
        console.log(error);
    }
    }
    fetchApi();
  }, [user])

  return (
    <div>
      <Navbar />
      <div>
        <NavGrid value="Checkout" />
        <ProductCheckout cartData={data} key={user?.userId}/>
      </div>
      <Footer />
      </div>
  )
}

export default Checkout