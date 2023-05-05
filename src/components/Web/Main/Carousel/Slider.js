import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const images = [
  { url:"/images/sp_online_phone89_generated.jpg" },
  { url: "/images/sp_online_phone91_generated.jpg"}
]

function Slider() {
  return (
    <div>
        <Carousel>
        {images.map((img, i) => (
          <div key={i}>
            <img src={img.url} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Slider