import InfoForm from '../../../components/Web/addtocart/InfoForm'
import Table from '../../../components/Web/addtocart/Table'
import Footer from '../../../components/Web/footer/Footer'
import Navbar from '../../../components/Web/navbar/Navbar'
import NavGrid from '../../../components/Web/NavGrid'
import { formOne, formTwo } from '../../../helpers/Styles'
import Shipping from "../../../components/Web/addtocart/Shipping";
import { useContext, useEffect, useState } from 'react'
import { DarkModeContext } from '../../../context/DarkModeContext'
import { api } from '../../../helpers/Api'
import mongoose from 'mongoose'

function AddToCart() {

  const { user } = useContext(DarkModeContext);
  const [data, setData] = useState(null);

  const fetchUserData = async() => {
    let response;
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

  useEffect(()=> {
    const fetchApi = async()=> {
        try {
            fetchUserData();
        } catch (error) {
            console.log(error);
        }
        
    }
    fetchApi();
}, [user])

const fetchNewData = () => {
  try {
    fetchUserData();
  } catch (error) {
    console.log(error);
  }
}


  return (
    <div>
      <Navbar />
      <div>
        <NavGrid value="Cart" />
        <div className='flex flex-row justify-center mt-10'>
          <Table cartData={data} fetchNewData={fetchNewData} key={Math.abs(20)} />
        </div>
        <div className='flex flex-row mx-48 justify-center mt-10 space-x-5 mb-16'>
          <InfoForm value={formOne} />
          <InfoForm value={formTwo} />
        </div>
        <Shipping cartData={data} key={Math.abs(20)} />
      </div>
      <Footer />
      </div>
  )
}

export default AddToCart