import React from 'react'
import { Form } from 'react-router-dom';
import Navbar from '../../../components/Admin/navbar/Navbar'
import Sidebar from '../../../components/Admin/sidebar/Sidebar'

function UpdateProduct() {
    const category = ["Men", "Accessories", "Kids", "Watch", "Bags", "Laptops"];
  return (
    <div className='home flex flex-row'>
    <div className='sidebar lg:block md:hidden basis-1/6'>
        <Sidebar/>
    </div>
    <div className='homeContainer basis-2/4 grow'>
        <div className='lg:block md:hidden'>
            <Navbar/>
        </div>
        
        <div className="border h-full w-full">
          <div className="mx-40 mt-10 border-2 border-gray-200">
            <h1 className="uppercase text-3xl my-10 text-[#3CB878] font-bold text-center">Update Product</h1>
            <form onSubmit={() => alert("form submit")}>
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
                    required
                  />
                </div>
                <div className="mb-4 basis-1/2">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                    htmlFor="username"
                  >
                    Select category <span className='mt-2 text-red-600'>&#42;</span>
                  </label>
                  <select required className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]" name="category" >
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
                    htmlFor="username"
                  >
                    Product name <span className='mt-2 text-red-600'>&#42;</span>
                  </label>
                  <input
                    className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="productname"
                    name="name"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-4 basis-1/2">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                    htmlFor="username"
                  >
                    Price <span className='mt-2 text-red-600'>&#42;</span>
                  </label>
                  <input
                    className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="price"
                    name="price"
                    type="text"
                    required
                  />
                </div>
            </div>
            <div className="flex flex-row w-full space-x-8 mt-7">
                <div className="mb-4 basis-1/2">
                    <label
                    className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                    htmlFor="username"
                    >
                    Size <span className='mt-2 text-red-600'>&#42;</span>
                    </label>
                    <input
                    className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="size"
                    name="size"
                    type="text"
                    required
                    />
                </div>
                <div className={`mb-4 basis-1/2`}>
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                    htmlFor="username"
                  >
                    Color <span className='mt-2 text-red-600'>&#42;</span>
                  </label>
                  <input
                    className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="color"
                    name="color"
                    type="text"
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
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-row mt-5">
                <button className="border-2 border-gray-300 bg-white w-52 text-center hover:bg-[#3CB878] hover:border-[#3CB878] h-10 font-bold text-gray-500 uppercase hover:text-white">Update Product</button>
              </div>
            </div>
            </form>
          </div>
        </div>
    </div>
    </div>
)
}

export default UpdateProduct