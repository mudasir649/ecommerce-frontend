import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imageSection from '../../../helpers/ImageSection';
import { color, heading, productSize, productsList } from '../../../helpers/Styles';
function Filter() {

  const navigate =  useNavigate();

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(200);



  const minRange=  (e) => {
    setMinValue(e.target.value);
  }

  const maxRange = (e) => {
    setMaxValue(e.target.value)
  }

  return (
    <>
    <div className="ml-20 my-8 pl-24 basis-1/5">
            {heading("categories")}
            <ol className="list-disc list-di pl-5 space-y-3 mt-5 border-b border-y-gray-300 text-[#232323]">
              {productsList.map((product, i) => (
                <li className={`${i === productsList.length - 1 ? "pb-8" : ""} text-md font-semibold cursor-pointer`} key={i} onClick={() => navigate(`/products/${product}`)}>{product}</li>
              ))}
            </ol>
            <div className="border-b">
              {heading("price filter")}
              <div className="range-slider">
                <div className='flex flex-row space-x-[-0.3rem]'>
                  <input id="steps-range" type="range" min="0" max="100" value={minValue} step="1" className="w-full h-2 bg-gray-200 appearance-none cursor-pointer dark:bg-gray-700" onChange={(e) => minRange(e)} />
                  <input id="steps-range" type="range" min="100" max="200" value={maxValue} step="1" className="z-2 w-full h-2 bg-gray-200 appearance-none cursor-pointer dark:bg-gray-700" onChange={(e) => maxRange(e)} />
                </div>
                <div className='flex flex-row space-x-2 my-5'>
                  <span className='border-2 border-gray-300 h-8 w-24 font-bold text-center py-1'>{minValue}</span>
                  <span className='border-2 border-gray-300 h-8 w-24 font-bold text-center py-1'>{maxValue}</span>
                </div>
              </div>
            </div>
            <div className="mt-8 border-b mb-3">
              {heading("Size")}
              <div className="grid grid-cols-5 mt-5">
                {productSize.map((size, i) => (
                  <div key={i} className={`border border-gray-200 p-1 w-12 my-0.5 
                        text-center text-md text-gray-500 hover:bg-[#3CB878] hover:text-white`}>{size}
                  </div>
                ))}
              </div>
              <div className="mb-1">
                  <span className="invisible">empty</span>
                </div>
            </div>
            <div className="mt-8 border-b">
              {heading("Color")}
              <ul>
                {color.map((col ,i) => (
                  <li className={`${i === color.length - 1 ? "pb-4": ""} mt-4`} key={i}>
                    <input id="yellow-checkbox" type="checkbox" value={col} onClick={(e) => alert(e.target.value)} className="w-3 h-3 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="yellow-checkbox" className="ml-2 text-md font-semibold text-[#232323] dark:text-gray-300">{col}</label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 border-b">
              {heading("Top rated")}
              <div className="flex flex-col">
              {imageSection.map((image, i) => (
              <div className={`${i === imageSection.length - 1 ? "mb-5" : ""} grid grid-cols-2`} key={i}>
                <div className="basis-1/3">
                  <img src={image.image} className="mt-4"/>
                </div>
                <div className="basis-1/2 font-semibold text-md space-y-2">
                  <h1 className='text-[#333333] mt-4'>{image.name}</h1>
                  <h1 className='text-[#3CB878] mb-2'>{image.price}</h1>
                </div>
            </div>
            ))}
              </div>
            </div>
          </div>
    </>
  )
}

export default Filter