import React, { useState } from "react";
import { tableBtnStyle } from "../../../helpers/Styles";
import { CancelOutlined } from "@mui/icons-material";
import { api } from "../../../helpers/Api";
import { toast } from "react-toastify";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { useNavigate } from "react-router-dom";

function Table({ cartData, userId, fetchNewData }) {

  const navigate = useNavigate();

  const [total, setTotal] = useState(null);

  console.log(total);
  
  const deleteCartProduct = async(e, id) => {
    console.log(id);
    e.preventDefault();
    let response;
    try {
      const res = await api.delete(`${process.env.REACT_APP_PORT}/product/removefromcart/${id}`);
      response = await res.data;
      if(response?.success === true){
        toast(response?.message)
        fetchNewData();
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      <table
        className="border-collapse border h-52 w-full mx-44 border-slate-400 ..."
        key={Math.random()}
      >
        <thead key={Math.random()}>
          <tr className="" key={Math.random()}>
            <th className="border border-slate-300 p-4 ...">Product</th>
            <th className="border border-slate-300 ...">Color & Size</th>
            <th className="border border-slate-300 ...">Quantity</th>
            <th className="border border-slate-300 ...">Price</th>
            <th className="border border-slate-300 ...">Total</th>
          </tr>
        </thead>
        <tbody key={userId}>
          {cartData?.map((data, i) =>
            data?.productData?.map((product, i) => (
              <>
                <tr key={i}>
                  <td className="border border-slate-300 w-72">
                    <div className="flex p-5">
                      <img src={product?.image} className="h-20 w-20" />
                      <span className="mt-5 text-md font-semibold truncate">
                        {product?.name}
                      </span>
                    </div>
                  </td>
                  <td className="border border-slate-300 w-72">
                    <ul className="flex flex-col ml-10 text-md font-semibold">
                      <li>Size: {product?.size}</li>
                      <li>Color: {product?.color}</li>
                    </ul>
                  </td>
                  <td className="border border-slate-300 w-72">
                    <div className="flex flex-row justify-center ">
                      <div
                        className={`border border-gray-200 p-1 w-12 my-0.5 text-center text-md text-gray-800 font-semibold hover:bg-[#3CB878] hover:text-white`}
                      >
                        {data?.quantity}
                      </div>
                    </div>
                  </td>
                  <td className="border border-slate-300 w-72">
                    <div className="flex justify-center text-md font-semibold">
                      {product?.price}
                    </div>
                  </td>
                  <td className="border border-slate-300 w-60">
                    <div className="flex flex-row space-x-20 mx-10">
                      <span className="text-md font-semibold" onChange={() => setTotal((...prevVal) => prevVal + product?.price * data?.quantity )}>
                        {product?.price * data?.quantity}
                      </span>
                      <button className="h-5 w-5" onClick={(e) => deleteCartProduct(e, data._id)}>
                        <CancelOutlined />
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            ))
          )}
          <tr className="border border-slate-300">
            <td className="invisible">jfjf</td>
            <td className="invisible">jfjf</td>
            <td className="invisible">jfjf</td>
            <td>
              <div className="flex justify-center mr-10 my-5">
                <button
                  className={`${tableBtnStyle} hover:bg-[#3CB878] hover:text-white`}
                >
                  Update cart
                </button>
              </div>
            </td>
            <td>
              <div className="flex justify-center mr-10 my-5">
                <button className={`${tableBtnStyle} text-white bg-[#3CB878]`} onClick={() => navigate('/')}>
                  continue shopping
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
