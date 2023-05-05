import { AccountBalanceWalletOutlined, 
        KeyboardArrowUp, MonetizationOnOutlined, 
        PersonOutline, ShoppingCartOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'
import { DarkModeContext } from '../../../context/DarkModeContext';


function Widgets({type}) {

    const { darkMode } = useContext(DarkModeContext)

    let data;

    //temporary 
    const amount = 200;
    const diff = 200;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                style: "flex flex-row ml-24 mt-[72px] border text-red-600 bg-red-300 rounded-md w-8", 
                icon: <PersonOutline className='pl-1'/>
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all users",
                style: "flex flex-row ml-24 mt-[72px] border text-yellow-600 bg-yellow-200 rounded-md w-8", 
                icon: <ShoppingCartOutlined className='pl-1'/>
            }
            break;
        case "earning":
        data = {
            title: "EARNING",
            isMoney: true,
            link: "See all users",
            style: "flex flex-row ml-24 mt-[72px] border text-green-600 bg-green-200 rounded-md w-8", 
            icon: <MonetizationOnOutlined className='pl-1'/>
        }
        break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: false,
                link: "See all users",
                style: "flex flex-row ml-24 mt-[72px] border text-purple-700 bg-purple-300 rounded-lg w-8", 
                icon: <AccountBalanceWalletOutlined className='pl-1'/>
            }
            break;
    
        default:
            break;
    }

    return (
    <div className={`${type === "user" ? "lg:ml-0 md:ml-5" : ""} widgets grid grid-cols-2 grid-flow-row shadow-lg w-80 h-28 rounded-lg`}  
            style={darkMode ? {boxShadow:"2px 4px 10px 1px rgba(201, 201, 201, 0.47)"} : {}}>
        <div className='left m-2'>
            <span className='text-gray-400 text-[13px] font-semibold'>{data?.title}</span>
            <h1 className={darkMode ? 'text-gray-400 text-[25px] font-medium mt-2' :'text-[25px] font-medium mt-2'}>{data?.isMoney && "$"} {amount}</h1>
            <span className={darkMode ? 'text-gray-400 underline underline-offset-4 text-[13px]': 'underline underline-offset-4 text-[13px]'}>{data?.link}</span>
        </div>
        <div className='right'>
            <div className='flex text-green-700 flex-row float-right m-3'>
                <KeyboardArrowUp />
                {diff} %
            </div>
            <div className={data?.style}>
                {data?.icon}
            </div>
        </div>
    </div>
  )
}

export default Widgets