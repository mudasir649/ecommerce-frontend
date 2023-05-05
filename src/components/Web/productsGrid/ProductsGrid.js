import React from "react";
import featuredProducts from "../../../helpers/featuredProducts";
import ReactStars from "react-stars";
import {
  ArrowForwardIos,
  Cached,
  Favorite,
  ShoppingCart,
} from "@mui/icons-material";
import { iconHeight, hoverIconStyleOne } from "../../../helpers/Styles";
import { useNavigate } from "react-router-dom";

function ProductsGrid({productData,productsList}) {

  const navigate = useNavigate();

    const num = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="flex flex-row mt-8">
        <div className="basis-1/2 text-left ml-20">
          <span className="text-[#777777] text-sm font-semibold">
            Showing 1-12 of 44 results
          </span>
        </div>
        {/* <div className="basis-1/2 text-right mr-20">
          <select className="w-60 border-none focus-visible:bg-none">
            <option value="show new">Show newness</option>
            <option value="show new">Show newness</option>
            <option value="show new">Show newness</option>
          </select>
        </div> */}
      </div>

      <div className="flex flex-row justify-center mt-1">
        <hr className="w-full mx-20" />
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-2 mx-10 px-10 space-y-2 space-x-4 mt-10">
        {productData?.map((product, index) => (
          <div className="shadow-lg p-2 group" key={index} onClick={() => navigate(`/productdetails/${product._id}`)}>
            <img src={product.image} className="object-contain h-48 w-96" />
            <div className="flex flex-col space-y-2 mt-[-11.5rem] relative float-right invisible group-hover:visible">
              <div className={hoverIconStyleOne}>
                <ShoppingCart />
              </div>
              <div className={hoverIconStyleOne}>
                <Favorite />
              </div>
              <div className={hoverIconStyleOne}>
                <Cached />
              </div>
            </div>
            <h1 className="text-[#333333] mt-4">{product.productName}</h1>
            <h1 className="text-[#3CB878] mb-2">$ {product.price}</h1>
            <ReactStars count={5} size={24} color2={"#ffd700"} />
          </div>
        ))}
      </div>

      <div className={` ${productsList === "ProductList" ? "mt-[590px]" : "my-20"} flex flex-row justify-center border-t-2 border-b-2 mx-44`}>
        <div className="text-gray-800 text-md border-r-2 border-l-2 p-1">
          <ul className="flex flex-row space-x-3 font-semibold ml-10 mr-10">
            {num.map((nums, i) => (
              <li key={i} className="cursor-pointer hover:text-[#3CB878]" onClick={() => (alert(nums))}>
                {nums}
              </li>
            ))}
            <li className="w-[2px] hover:text-[#3CB878]">....</li>
            <li className="w-[5px] hover:text-[#3CB878]">
              <ArrowForwardIos style={iconHeight} />
            </li>
            <li className="space-x-[-1.3rem] hover:text-[#3CB878]">
              <ArrowForwardIos style={iconHeight} />
              <ArrowForwardIos style={iconHeight} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsGrid;
