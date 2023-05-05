import React from 'react'
import List from '../../../components/Admin/list/List'
import Navbar from '../../../components/Admin/navbar/Navbar'
import Sidebar from '../../../components/Admin/sidebar/Sidebar'

function BuyersProductsList() {
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

export default BuyersProductsList