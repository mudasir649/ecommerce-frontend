import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../../../helpers/Api";
import uploadToCloudinary from "../../../helpers/CloudinaryUpload";

const InitialValues = {
  image:"",
  firstName: "",
  lastName:"",
  userName:"",
  accountType: "",
  email:"",
  password:"",
  confirmPassword:"",
}


function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState(InitialValues);

  const accountType = ["seller", "buyer"];

  const [file, setFile] = useState(null);


  const handleData = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const uploadImage = async(e) => {
    if(e.target.files && e.target.files[0]){
      const data = e.target.files[0];
      const objectURL = URL.createObjectURL(data);
      setFile(objectURL);
      const uploadFile = await uploadToCloudinary(data);
      setData({...data, [e.target.name]: uploadFile.url})
    }
  }

  const submitForm = async(e) => {
    e.preventDefault();
    let response;
    try {
      const res = await api.post(`${process.env.REACT_APP_PORT}/auth/register`, data, { withCredentials: true });
      response = await res.data;
      if(response.success === true){
          toast(response.message);
          navigate('/login')
        }
        else{
          toast(response.message)
        }
    } catch (error) {
    toast(error.response.data.message);    
  }
}

  return (
    <>
      <div className="flex mt-10 justify-center border-2 border-gray-300 mx-96">
        <ToastContainer />
        <div className="basis-1/2">
          <h1 className="uppercase text-3xl my-10 text-[#3CB878] font-bold text-center">
            Register
          </h1>
          <form method="POST" onSubmit={(e) => submitForm(e)}>
            {file !== null && <div className="h-36 w-36 my-10 ml-80"><img src={file}/></div>}
          <div className="mx-20 my-5 mt-10">
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
                    onChange={(e) => uploadImage(e)}
                    accept="image/*"
                    required
                  />
            </div>
            <div className="mx-20 my-10">
              <div className="flex flex-row space-x-8 mt-7">
                <div className="mb-4">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                    htmlFor="username"
                  >
                    First Name <span className="mt-2 text-red-600">&#42;</span>
                  </label>
                  <input
                    className="border w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="firstName"
                    name="firstName"
                    value={data.firstName}
                    onChange={(e) => handleData(e)}
                    type="text"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                    htmlFor="username"
                  >
                    Last Name <span className="mt-2 text-red-600">&#42;</span>
                  </label>
                  <input
                    className="border w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="lastName"
                    name="lastName"
                    value={data.lastName}
                    type="text"
                    required
                    onChange={(e) => handleData(e)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                  htmlFor="username"
                >
                  Username <span className="mt-2 text-red-600">&#42;</span>
                </label>
                <input
                  className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                  id="userName"
                  name="userName"
                  value={data.userName}
                  type="text"
                  required
                  onChange={(e) => handleData(e)}
                />
              </div>
              <div className="flex flex-row w-full space-x-8 mt-7">
                <div className="mb-4 basis-1/2">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                    htmlFor="email"
                  >
                    Email <span className="mt-2 text-red-600">&#42;</span>
                  </label>
                  <input
                    className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                    id="email"
                    value={data.email}
                    onChange={(e) => handleData(e)}
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div className="mb-4 basis-1/2">
                  <label
                    className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                    htmlFor="accountType"
                  >
                    Account Type{" "}
                    <span className="mt-2 text-red-600">&#42;</span>
                  </label>
                  <select className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]" name="accountType"
                    onChange={(e) => handleData(e)}
                  >
                    {accountType.map((type, i) => (
                      <option key={i} defaultValue={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                  htmlFor="password"
                >
                  Password <span className="mt-2 text-red-600">&#42;</span>
                </label>
                <input
                  className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                  id="password"
                  value={data.password}
                  onChange={(e) => handleData(e)}
                  name="password"
                  type="password"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#333333] text-sm font-bold mb-2 uppercase"
                  htmlFor="confirmPassword"
                >
                  Confirm Password{" "}
                  <span className="mt-2 text-red-600">&#42;</span>
                </label>
                <input
                  className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                  id="confirmPassword"
                  value={data.confirmPassword}
                  onChange={(e) => handleData(e)}
                  name="confirmPassword"
                  type="password"
                  required
                />
              </div>
              <div className="flex flex-row mt-5 space-x-2">
                <h1 className="text-sm">Already registered?</h1>
                <a
                  onClick={() => navigate("/login")}
                  className="text-sm text-[#3CB878] font-bold cursor-pointer"
                >
                  Login here
                </a>
              </div>
              <div className="flex flex-row mt-5 justify-center">
                <button type="submit" className="border-2 border-gray-300 bg-white w-52 text-center hover:bg-[#3CB878] hover:border-[#3CB878] h-10 font-bold text-gray-500 uppercase hover:text-white">
                  Create Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
