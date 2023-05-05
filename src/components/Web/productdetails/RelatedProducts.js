import React from "react";
import { Cached, Favorite, ShoppingCart,East, West } from '@mui/icons-material'
import ReactStars from 'react-stars'
import { hoverIconStyle } from "../../../helpers/Styles";
import imageSection from "../../../helpers/ImageSection";

function RelatedProducts() {
  return (
    <>
      <h1 className="capitalize text-xl font-bold">Related products</h1>
      <div className='flex flex-row justify-end mt-[-1rem] space-x-2'>
                <div className='bg-gray-300 hover:bg-[#3CB878] hover:text-gray-100 border h-7 pl-2 w-10'>
                  <West />
                </div>
                <div className='bg-gray-300 hover:bg-[#3CB878] hover:text-gray-100 border h-7 w-10 pl-2'>
                  <East />
                </div>
      </div>
      <div className="basis-1/2 lg:flex lg:flex-row md:grid md:grid-cols-2 space-x-5 flex-grow">
        {imageSection.map((image, index) => (
          <div className="p-4 group" key={index}>
            <img src={image.image} className="" />
            <div className="flex flex-col space-y-2 lg:mt-[-11.5rem] md:mt-[-18.5rem] relative float-right invisible group-hover:visible">
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
            <h1 className="text-[#333333] mt-4">{image.name}</h1>
            <h1 className="text-[#3CB878] mb-2">{image.price}</h1>
            <ReactStars count={5} size={24} color2={"#ffd700"} />
          </div>
        ))}
      </div>
    </>
  );
}

export default RelatedProducts;
