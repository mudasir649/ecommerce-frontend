import React, { useContext } from 'react'
import { DarkModeContext } from '../../../context/DarkModeContext';

const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

function List() {

    const { darkMode } = useContext(DarkModeContext);

    const headLightStyle = "px-6 py-4 text-sm";
    const headDarkStyle = "text-gray-400 px-6 py-4 text-sm"

    const bodyLightStyle = "px-6 py-4 text-sm" 
    const bodyDarkStyle = "px-6 py-4 text-sm text-gray-400"

    return (
    <div className='shadow-lg rounded-sm h-[450px] m-5 p-5 border' 
        style={darkMode ? {boxShadow:"2px 4px 10px 1px rgba(201, 201, 201, 0.47)"} : {}}>
        <h1 className='text-gray-500'>Latest Transaction</h1>
        <div className="mt-5 border-b border-white shadow border rounded-md">
                <table className="w-full mt-5 divide-y divide-gray-300">
                    <thead className="text-left divide-y">
                        <tr>
                            <td className={darkMode ? headDarkStyle : headLightStyle} >
                                Tracking ID
                            </td>
                            <td className={darkMode ? headDarkStyle : headLightStyle}>
                                Product
                            </td>
                            <td className={darkMode ? headDarkStyle : headLightStyle} >
                                Customer
                            </td>
                            <td className={darkMode ? headDarkStyle : headLightStyle} >
                                Date
                            </td>
                            <td className={darkMode ? headDarkStyle : headLightStyle} >
                                Amount
                            </td>
                            <td className={darkMode ? headDarkStyle : headLightStyle} >
                                Payment Method
                            </td>
                            <td className={darkMode ? headDarkStyle : headLightStyle}>
                                Status
                            </td>
                        </tr>
                    </thead>
                    <tbody className={darkMode? "bg-[#111] text-sm divide-y divide-gray-300":"bg-white text-sm divide-y divide-gray-300"}>
                        {rows.map((row, i) => (
                        <tr className="whitespace-nowrap" key={i}>
                            <td className={darkMode ? bodyDarkStyle : bodyLightStyle}>
                                {row.id}
                            </td>
                            <td className={darkMode ? bodyDarkStyle : bodyLightStyle}>
                                    {row.product}
                            </td>
                            <td className={darkMode ? bodyDarkStyle : bodyLightStyle}>
                                {row.customer}
                            </td>
                            <td className={darkMode ? bodyDarkStyle : bodyLightStyle}>
                                {row.date}
                            </td>
                            <td className={darkMode ? bodyDarkStyle : bodyLightStyle}>
                                {row.amount}
                            </td>
                            <td className={darkMode ? bodyDarkStyle : bodyLightStyle}>
                                {row.method}
                            </td>
                            <td className={darkMode ? bodyDarkStyle : bodyLightStyle}>
                                <span className={`${row.status === "Approved" ? 'bg-green-100 text-green-700 text-sm p-1 border-green-100 border rounded-md' 
                                : 'bg-orange-50 text-yellow-500 text-sm p-1 border-orange-50 border rounded-md'}`}>
                                    {row.status}
                                </span>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default List