import React from 'react'

function BannerSection() {
  return (
    <div>
        <div className='lg:grid lg:grid-cols-3 md:grid-cols-1'>
        <div className='h-[500px] p-10 md:flex md:justify-center' style={{background: "rgba(46, 51, 72, 1)"}}>
          <img src='/images/Summer & Autumn.png'/>
        </div>
        <div className='h-[500px] p-10 md:flex md:justify-center' style={{background: "rgba(52, 57, 79, 1)"}}>
          <img src='/images/slider-9-1-1.png'/>
        </div>
        <div className='h-[500px] p-10 md:flex md:justify-center' style={{background: "rgba(46, 51, 72, 1)"}}>
          <img src='/images/New Fashion Sty.png'/>
        </div>
      </div>
    </div>
  )
}

export default BannerSection