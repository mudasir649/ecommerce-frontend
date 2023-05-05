import React from "react";
import featuredProducts from "../../../../helpers/featuredProducts";
import ReactStars from "react-stars";
import { Cached, Favorite, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function FeaturedProducts() {
  const hoverIconStyle = "bg-[#3CB878] text-white p-1 h-8 w-8";

  const navigate =  useNavigate(); 

  return (
    <div>
      <div className="lg:flex lg:flex-col md:grid md:grid-cols-1">
        <div className="my-20">
          <div className="text-[#333333] font-extrabold text-4xl uppercase flex justify-center">
            featured Products
          </div>
          <div
            className="text-[#3CB878] text-md flex justify-center"
            style={{ fontFamily: "'Droid Serif Italic', arial" }}
          >
            Newest trends from top brands
          </div>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 mx-16 px-10 space-y-2 space-x-4">
          {featuredProducts.map((product, index) => (
            <div
              className="shadow-lg p-2 group cursor-pointer"
              key={index}
              onClick={() => navigate(`productdetails/${index}`)}
            >
              <img src={product.image} className="object-contain h-48 w-96" />
              <div className="flex flex-col space-y-2 mt-[-11.5rem] relative float-right invisible group-hover:visible">
                <div className={hoverIconStyle}>
                  <ShoppingCart />
                </div>
                <div className={hoverIconStyle}>
                  <Favorite />
                </div>
                <div className={hoverIconStyle}>
                  <Cached />
                </div>
              </div>
              <h1 className="text-[#333333] mt-4">{product.name}</h1>
              <h1 className="text-[#3CB878] mb-2">{product.price}</h1>
              <ReactStars count={5} size={24} color2={"#ffd700"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
