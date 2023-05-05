import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Web/footer/Footer";
import Navbar from "../../../components/Web/navbar/Navbar";
import NavGrid from "../../../components/Web/NavGrid";
import Filter from "../../../components/Web/products/Filter";
import ProductsGrid from "../../../components/Web/productsGrid/ProductsGrid";
import { api } from "../../../helpers/Api";

function Products() {

  const { name } = useParams();
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchApi = async()=> {
      let response;
      try {
        const res = await api.get(`${process.env.REACT_APP_PORT}/product/getallproducts?name=${name}`)
        response = await res.data;
        if(response.success === true){
          setData(response.data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, [name])
  
  return (
    <div>
      <Navbar />
      <div>
        <NavGrid value="Products" />
        <div className="flex flex-row space-x-5">
          <Filter />
          <div className="flex-grow basis-1/2">
            <ProductsGrid productData={data} productsList={"ProductList"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
