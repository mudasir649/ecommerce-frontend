import React, { useState } from 'react'
import ReactStars from 'react-stars';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function DescReview() {

    const [value, setValue] = useState("description");

    const submit = () => {
      toast("review submitted")
    }

  return (
    <>
    <ToastContainer  />
    <div className='flex flex-row space-x-4 cursor-pointer'>
                <div className={`${value === "description" && "bg-gray-200"} h-10 pl-5 text-sm pt-2 w-40`}>
                  <h1 className='text-md font-semibold capitalize' onClick={() => {setValue("description")} }>description</h1>
                </div>
                <div className={`${value === "reviews" && "bg-gray-200 text-center"} h-10 pt-2 text-sm w-36`}>
                  <h1 className='text-md font-semibold capitalize' onClick={() => {setValue("reviews")} }>reviews(2)</h1>
                </div>
              </div>
              <div className='bg-gray-200'>
                {value === "description" ? (
                  <h1 className='text-[#232323] p-5 text-sm font-semibold text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
              </h1>
                ) : (
                  <div className='p-8 h-[700px]'>
                    <h1 className='text-[#232323] text-md font-bold'>1 review from lorem ipsum</h1>
                    <div className='flex flex-row my-7 sapce-x-3'>
                      <div className='bg-black basis-24 h-24'></div>
                      <div className='bg-white mx-10 h-36 flex-grow basis-1/2'>
                        <div className="flex flex-row space-x-10 p-4">
                          <ReactStars count={5} size="30px" />
                          <h1 className='text-gray-300 italic text-sm mt-0.5'>July 17, 2023</h1>
                        </div>
                        <div className='flex flex-col space-y-2 ml-4'>
                          <h1 className='text-[#232323] text-md font-bold'>Lorem ipsum</h1>
                          <span className='text-sm font-semibold'>This will go great with my Hoodie that I ordered a few weeks ago.</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                      <h1 className='text-[#232323] text-xl font-bold'>Add a review</h1>
                      <div className='flex flex-row space-x-5'>
                      <input
                        type="text"
                        className="w-96 pl-3 py-2 border border-gray-300 text-sm text-[#232323] focus:border-[#3CB878] focus:ring-[#3CB878] font-semibold"
                        placeholder="Your name..."
                      />
                      <input
                        type="text"
                        className="w-96 pl-3 py-2 border border-gray-300 text-sm text-[#232323] focus:border-[#3CB878] focus:ring-[#3CB878] font-semibold"
                        placeholder="Your email.."
                      />
                      </div>
                    </div>
                    <div className='flex flex-row my-10 space-x-32 capitalize'>
                      <h1 className='text-[#232323] text-md font-bold'>Your review</h1>
                      <div className='flex flex-row space-x-5'>
                        <h1 className='text-[#232323] text-md font-bold'>Your rating:</h1>
                        <ReactStars count={5} size={24} className="mt-0.5"/>
                      </div>
                    </div>
                    <textarea className='h-32 w-[800px] pl-3 pt-2 border border-gray-300' placeholder='Enter your review here...'/>
                    <button
                      className="w-40 p-2 h-12 mt-2 space-x-1 flex flex-row justify-center text-white bg-[#3CB878] border-2 border-gray-300 
                          cursor-pointer hover:bg-green-400 hover:text-white hover:border-green-400 uppercase"
                      onClick={submit}
                    >
                      <h1 className="text-xl font-bold">Submit</h1>
                    </button>
                  </div>
                ) }
              </div>
    </>
  )
}

export default DescReview