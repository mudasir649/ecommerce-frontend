import React, { useContext, useState } from "react";
import ReactStars from 'react-stars'
import { Add, ArrowBackIos, ArrowForwardIos, Cached, Favorite, Remove, ShoppingCart } from '@mui/icons-material'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { api } from "../../../helpers/Api";
import { DarkModeContext } from "../../../context/DarkModeContext";


function ProductDetail({productDetail}) {

  const [quantity, setQuantity] = useState(0);

  const { user } = useContext(DarkModeContext);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decreaseQuantity = () => {
    if(quantity === 0){
      return false;
    }else{
      setQuantity(quantity - 1);
    }
  }

  
  const addtocart = async() => {
    let response;
    const data = {
      userId: user.userId,
      productId: productDetail._id,
      quantity: quantity
    }
    try {
      const res = await api.post(`${process.env.REACT_APP_PORT}/product/addtocart`, data);
      response = await res.data;
      if(response.success === true){
        toast(response.message);
      }
    } catch (error) {
      console.log(error);
    }
    toast("added to cart")
  }

  const addtofavorite = async() => {
    toast("added to favorite")
  }

  const shared = () => {
    toast("shared product successfully");
  }

  const images = [{
    image: "/images/cloths/anes-cool-dri-reg-kids-performance-crewneck-t-shirt-4-pack.png"
  },
  {
    image:"/images/cloths/c9-champion-girls-performance-tank.png"
  },
  {
    image:"/images/cloths/kerrits-kids-cool-ride-ice-fil-short-sleeve-shirt-print.png"
  },
]

const [current, setCurrent] = useState(0);
const length = images.length;


const nextImage = () => {
  setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevImage = () => {
  setCurrent(current === 0 ? length - 1 : current - 1);
}


const [image, setImage] = useState(null);



  return (
    <>
    <ToastContainer />
      <div className="flex flex-row my-14 space-x-8">
        <div className="flex flex-col space-y-4">
        <div className="shadow-lg w-[400px]">
          <img
            src={productDetail?.image}
            className="h-[500px] object-contain"
          />
        </div>
        {/* <div className="flex flex-row">
          <div className="border bg-gray-300 h-28 w-10 text-center py-10 px-4">
          <div className="flex flex-row space-x-[-2rem]" onClick={prevImage}>
            <ArrowBackIos style={{height:"1.2rem"}} /><ArrowBackIos style={{height:"1.2rem"}} />
          </div>
          </div>
          <div className="flex flex-row h-28 border border-gray-300">
            {images.map((img,i) => (
              <img src={image === null ? img.image: image} onClick={() => updateImage(img.image)}  className={`${i === current && `border-blue-600 border-2`} my-2 mx-2`} />
            ))}
          </div>
          <div className="border bg-gray-300 h-28 w-10 text-center px-3 py-10">
            <div className="flex flex-row space-x-[-2rem] h-[-5px]" onClick={nextImage}>
              <ArrowForwardIos style={{height:"1.2rem"}}/><ArrowForwardIos style={{height:"1.2rem"}}/>
            </div>
          </div>
        </div> */}
        </div>
        <div className="w-full h-72 p-4">
          <h1 className="text-2xl font-bold mb-4">{productDetail?.productName}</h1>
          <div className="flex flex-row space-x-2">
            <span className="text-2xl text-[#3CB878]">${productDetail?.price}</span>
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              className="text-3xl"
            />
          </div>
          <div className="my-8">
            <h1 className="text-[#232323] text-left w-[500px]">
              {productDetail?.description}
            </h1>
          </div>
          <div className="my-8">
            <hr />
          </div>
          {productDetail?.category === "Men" && 
            <div className="flex flex-row space-x-7">
            <select className="w-72 p-1 py-2 border-2 border-gray-300 text-sm font-semibold capitalize">
              <option value="cmcm">select size</option>
            </select>
            {/* <input
              type="text"
              className="w-72 p-1 py-2 border-2 border-gray-300 text-sm text-[#232323] font-semibold capitalize"
              placeholder="select color"
            /> */}
          </div>
          }
          <div className="flex flex-row h-10 w-72 mt-5 p-1 border-2 text-center">
            <div className="basis-1/4 cursor-pointer">
              <Remove onClick={() => decreaseQuantity()} />
            </div>
            <div className="basis-1/2 border-l border-r text-lg font-bold">
              {quantity}
            </div>
            <div className="basis-1/4 cursor-pointer">
              <Add onClick={() => increaseQuantity()} />
            </div>
          </div>
          <div className="flex flex-row my-5 space-x-3">
            <button
              className="w-40 p-2.5 h-12 space-x-1 flex flex-row border-2 border-gray-300 
                  cursor-pointer hover:bg-[#3CB878] hover:text-white hover:border-[#3CB878] uppercase"
              onClick={addtocart}
            >
              <ShoppingCart style={{ fontSize: "22px" }} />
              <h1 className="text-md font-bold">Add To Cart</h1>
            </button>
            <button
              className="w-12 p-2.5 h-12 space-x-1 flex flex-row border-2 border-gray-300 
                  cursor-pointer hover:bg-[#3CB878] hover:text-white hover:border-[#3CB878] uppercase"
                  onClick={addtofavorite}
              >
              <Favorite style={{ fontSize: "22px" }} />
            </button>
            <button
              className="w-12 p-2.5 h-12 space-x-1 flex flex-row border-2 border-gray-300 
                  cursor-pointer hover:bg-[#3CB878] hover:text-white hover:border-[#3CB878] uppercase"
                  onClick={shared}
              >
              <Cached />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
