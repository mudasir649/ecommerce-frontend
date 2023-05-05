import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../../../components/Admin/navbar/Navbar";
import Sidebar from "../../../components/Admin/sidebar/Sidebar";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { api } from "../../../helpers/Api";
import uploadToCloudinary from "../../../helpers/CloudinaryUpload";

let InitialValues = {
  image: "",
  category: "",
  productName:"",
  price:"",
  color:"",
  size:"",
  description:"",
}

function CreateProduct() {

  // states and variables
  const category = ["Men", "Accessories", "Kids", "Watch", "Bags", "Laptops"];
  const productSize = ['XS', 'S', 'M', 'L', 'SL', 'XL', 'XXL'];
  const [productData, setProductData] = useState(InitialValues);
  const [size, setSize] = useState(true);
  const [file, setFile] = useState(null);
  const { user } = useContext(DarkModeContext);

  //function to insert product data in productData state
  const handleData = (e) => {
    setProductData({...productData, [e.target.name]: e.target.value});
    if(e.target.name === "category" && e.target.value === "Accessories" || e.target.value === "Laptops" || e.target.value === "Watch"){
      setSize(false);
    }
    else if(e.target.name === "category" && e.target.value === "Men" || e.target.value === "Kids" || e.target.value === "Bags"){
      setSize(true)
    }
  }


  // function to uploadImage
  const uploadImage = async(e) => {
    if(e.target.files && e.target.files[0]){
      const data = e.target.files[0];
      const objectURL = URL.createObjectURL(data);
      setFile(objectURL);
      const uploadFile = await uploadToCloudinary(data);
      setProductData({...productData, [e.target.name]: uploadFile.url});
    }
  }

  //function to call createproduct api to create product
  const createProduct = async(e) => {
    e.preventDefault();
    let response;
    try {
      const data = await api.post(`${process.env.REACT_APP_PORT}/product/createproduct`, {productData, userId: user?.userId});
      response = data.data;
      if(response.success === true){
        toast(response.message);
      }
    } catch (error) {
      console.log(error.response);
    }
  }


  return (
    <div className="home flex flex-row">
      <ToastContainer />
      <div className="sidebar lg:block md:hidden basis-1/6">
        <Sidebar />
      </div>
      <div className="homeContainer basis-2/4 grow">
        <div className="lg:block md:hidden">
          <Navbar />
        </div>
        <div className="border h-full w-full">
          <div className="mx-40 mt-10 border-2 border-gray-200">
            <h1 className="uppercase text-3xl my-10 text-[#3CB878] font-bold text-center">Create Product</h1>
            {file !== null && <img className="h-72 w-72 mx-96" src={file}/>}
            <form onSubmit={(e) => createProduct(e)}>
            <div className="mx-20 my-16">
            <div className="flex flex-row w-full space-x-8 mt-7">
                <div className="mb-4 basis-1/2">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                    htmlFor="username"
                  >
                    Image <span className='mt-2 text-red-600'>&#42;</span>
                  </label>
                  <input
                    className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={uploadImage}
                    required
                  />
                </div>
                <div className="mb-4 basis-1/2">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                    htmlFor="category"
                  >
                    Select category <span className='mt-2 text-red-600'>&#42;</span>
                  </label>
                  <select required className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]" name="category" value={productData?.category}  onChange={e => handleData(e)} >
                  {category.map((st, i) => (
                    <option value={st} label={st} key={i} />
                  ))}
                </select>
                </div>
            </div>
            <div className="flex flex-row w-full space-x-8 mt-7">
                <div className="mb-4 basis-1/2">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                    htmlFor="productName"
                  >
                    Product name <span className='mt-2 text-red-600'>&#42;</span>
                  </label>
                  <input
                    className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="productname"
                    name="productName"
                    value={productData?.productName}
                    type="text"
                    onChange={(e)=> handleData(e)}
                    required
                  />
                </div>
                <div className="mb-4 basis-1/2">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                    htmlFor="price"
                  >
                    Price <span className='mt-2 text-red-600'>&#42;</span>
                  </label>
                  <input
                    className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="price"
                    name="price"
                    value={productData?.price}
                    type="text"
                    onChange={(e)=> handleData(e)}
                    required
                  />
                </div>
            </div>
            <div className="flex flex-row w-full space-x-8 mt-7">
              {size === true && 
                <div className="mb-4 basis-1/2">
                <label
                  className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                  htmlFor="username"
                >
                  Size <span className='mt-2 text-red-600'>&#42;</span>
                </label>
                <select
                  className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                  onChange={(e)=> handleData(e)}
                  id="size"
                  name="size"
                  required
                >
                  {productSize.map((size, i) => (
                    <option value={size} label={size} key={i} />
                  ))}
                </select>
              </div>
              }
                <div className={`${size === false && "w-full"} mb-4 basis-1/2`}>
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                    htmlFor="color"
                  >
                    Color <span className='mt-2 text-red-600'>&#42;</span>
                  </label>
                  <input
                    className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="color"
                    name="color"
                    value={productData?.color}
                    type="text"
                    onChange={(e)=> handleData(e)}
                    required
                  />
                </div>
            </div>
              <div className="mb-4">
                <label
                  className="block text-[#333333] text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Description <span className='mt-2 text-red-600'>&#42;</span>
                </label>
                <textarea 
                  className="border w-full py-2 px-3 resize-none text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                  id="description"
                  name="description"
                  value={productData?.description}
                  type="text"
                  onChange={(e)=> handleData(e)}
                  required
                />
              </div>
              <div className="flex flex-row mt-5">
                <button type="submit" className="border-2 border-gray-300 bg-white w-52 text-center hover:bg-[#3CB878] hover:border-[#3CB878] h-10 font-bold text-gray-500 uppercase hover:text-white">Create Product</button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
