import React, { useContext, useEffect, useState } from 'react';
import List from '../../../components/Admin/SellerProductList/List/List';
import Navbar from '../../../components/Admin/navbar/Navbar';
import Sidebar from '../../../components/Admin/sidebar/Sidebar';
import { DarkModeContext } from '../../../context/DarkModeContext';
import { api } from '../../../helpers/Api';

function SellerProductList() {

    const { user } = useContext(DarkModeContext);

    console.log(user.userId);

    const [data, setData] = useState("")

    useEffect(() => {
        let response;
        const fetch = async() => {
            try {
                const res = await api.get(`${process.env.REACT_APP_PORT}/product/getsellerproducts/${user.userId}`)
                response = res.data;
                if(response.success === true){
                    setData(response.data)
                }else{
                    console.log(response.message);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
    }, [])

    console.log(data);

  return (
    <div className='home flex flex-row'>
    <div className='sidebar lg:block md:hidden basis-1/6'>
        <Sidebar/>
    </div>
    <div className='homeContainer basis-2/4 grow'>
        <div className='lg:block md:hidden'>
            <Navbar/>
        </div>
        <div className='border h-full md:w-full'>
            <List />
        </div>
    </div>
    </div>
)
}

export default SellerProductList