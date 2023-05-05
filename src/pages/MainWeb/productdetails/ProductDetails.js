import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../../components/Web/footer/Footer'
import Navbar from '../../../components/Web/navbar/Navbar'
import NavGrid from '../../../components/Web/NavGrid'
import DescReview from '../../../components/Web/productdetails/DescReview'
import ProductDetail from '../../../components/Web/productdetails/ProductDetail'
import RelatedProducts from '../../../components/Web/productdetails/RelatedProducts'
import { api } from '../../../helpers/Api'

function ProductDetails() {

  // use states and variables
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchApi = async()=> {
      let response;
      try {
        const res = await api.get(`${process.env.REACT_APP_PORT}/product/getproductbyid/${id}`);
        response = await res.data;
        if(response.success === true){
          setData(response.data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, [id])

  
  return (
    <div>
      <Navbar />
        <div>
          <NavGrid value="Product" />
          <div className='flex flex-col mx-44 h-full'>
            <ProductDetail productDetail={data} key={id}/>
            <div className='flex flex-col my-20'>
              <DescReview />
            </div>
            <div className='mb-2'>
              <RelatedProducts />
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default ProductDetails