import { AxiosError, isAxiosError } from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { api } from "../../../helpers/Api";

const InitialValues = {
  email:"",
  password:""
}

function Login() {
  const navigate = useNavigate();

  const { count, setCount } = useContext(DarkModeContext);

  const [data, setData] = useState(InitialValues);

  const handleData = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const submitForm = async(e) => {
    e.preventDefault();
    let response;
    try {
      const res = await api.post(`${process.env.REACT_APP_PORT}/auth/login`, data, { withCredentials: true });
      console.log(res);
      response = res.data;
      console.log(isAxiosError);
      if(response.success === true){
        toast(response.message);
        setCount(count + 1);
        navigate('/')
      }else{
        toast(response.message)
      }
    } catch (error) {
      if(error.message){
        toast(error.message)
      }else if(error.response.data.message){
        console.log(error);
      }
    }
  }


  return (
    <>
      <div className="flex mt-10 justify-center border-2 border-gray-300 mx-96">
        <ToastContainer />
        <div className="basis-1/2">
          <h1 className="uppercase text-3xl my-10 text-[#3CB878] font-bold text-center">
            Login
          </h1>
          <form method="POST" onSubmit={submitForm}>
            <div className="mx-20 my-16">
              <div className="mb-4">
                <label
                  className="block text-[#333333] text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username or Email
                </label> 
                <input
                  className="border w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                  id="firstname"
                  value={data.email}
                  name="email"
                  onChange={(e) => handleData(e)}
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#333333] text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#3CB878]"
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={(e) => handleData(e)}
                  type="password"
                  required
                />
              </div>
              <div className="flex flex-row mt-5 space-x-2">
                <input type="checkbox" />{" "}
                <h1 className="text-sm">Keep! me logged in</h1>
              </div>
              <div className="flex flex-row mt-5 justify-center">
                <button type="submit" className="border-2 border-gray-300 bg-white w-32 text-center hover:bg-[#3CB878] hover:border-[#3CB878] h-10 font-bold text-gray-500 uppercase hover:text-white">
                  Login
                </button>
              </div>
              <div className="flex flex-row mt-5 space-x-2">
                <h1 className="text-sm">Not a member?</h1>
                <a
                  onClick={() => navigate("/register")}
                  className="text-sm text-[#3CB878] font-bold cursor-pointer"
                >
                  Register
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
