import React from 'react'

function form() {
  return (
    <div>
        <div className="flex mt-10 justify-center border-2 border-gray-300 mx-96">
          <div className="basis-1/2">
          <h1 className="uppercase text-3xl my-10 text-[#3CB878] font-bold text-center">Register</h1>
            <div className="mx-20 my-16">
              <div className="flex flex-row space-x-8 mt-7">
                <div className="mb-4">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    First Name
                  </label>
                  <input
                    className="border w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="firstname"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Last Name
                  </label>
                  <input
                    className="border w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="firstname"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#333333] text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Country
                </label>
                <input
                  className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                  id="firstname"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#333333] text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Company Name
                </label>
                <input
                  className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                  id="firstname"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#333333] text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Address
                </label>
                <input
                  className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                  id="firstname"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#333333] text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Postcode / Zip
                </label>
                <input
                  className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                  id="firstname"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#333333] text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Town / City
                </label>
                <input
                  className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                  id="firstname"
                  type="text"
                />
              </div>
              <div className="flex flex-row space-x-8">
                <div className="mb-4">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Email Address
                  </label>
                  <input
                    className="border w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="firstname"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Phone
                  </label>
                  <input
                    className="border w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="firstname"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row mt-5">
                <button className="border-2 border-gray-300 bg-white w-52 text-center hover:bg-[#3CB878] hover:border-[#3CB878] h-10 font-bold text-gray-500 uppercase hover:text-white">Create Account</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default form