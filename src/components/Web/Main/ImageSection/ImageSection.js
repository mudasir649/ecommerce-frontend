import React from "react";
import imageSection from "../../../../helpers/ImageSection";
import ReactStars from "react-stars";
import { Cached, Favorite, ShoppingCart } from "@mui/icons-material";
import { hoverIconStyle } from "../../../../helpers/Styles";
import { useNavigate } from "react-router-dom";

function ImageSection() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="lg:flex lg:flex-row md:grid md:grid-cols-1 md:mt-10">
        <div className="basis-1/4 flex flex-col justify-center mx-10">
          <div className="text-[#333333] font-extrabold text-4xl uppercase">
            Best sellers
          </div>
          <div
            className="text-[#3CB878] text-md"
            style={{ fontFamily: "'Droid Serif Italic', arial" }}
          >
            The best seller's from us
          </div>
          <div className="text-[#333333] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="basis-1/2 lg:flex lg:flex-row md:grid md:grid-cols-2 space-x-5 mx-10 my-16 flex-grow">
          {imageSection.map((image, index) => (
            <div
              className="shadow-lg p-4 group cursor-pointer"
              key={index}
              onClick={() => navigate(`productdetails/${index}`)}
            >
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
      </div>
    </div>
  );
}

export default ImageSection;
