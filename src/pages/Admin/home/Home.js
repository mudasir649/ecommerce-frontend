import React from 'react'
import Navbar from '../../../components/Admin/navbar/Navbar'
import Sidebar from '../../../components/Admin/sidebar/Sidebar'
import Widgets from '../../../components/Admin/widgets/Widgets'
import List from '../../../components/Admin/list/List'
import Chart from "../../../components/Admin/chart/Chart"

function Home() {
  return (
    <div className='home flex flex-row'>
        <div className='sidebar lg:block md:hidden basis-1/6'>
            <Sidebar/>
        </div>
        <div className='homeContainer basis-2/4 grow'>
            <div className='lg:block md:hidden'>
                <Navbar/>
            </div>
            <div className='border  md:w-full'>
                <div className='widgets lg:flex lg:flex-row md:grid md:grid-cols-2 space-x-5 m-5'>
                    <Widgets type="user"/>
                    <Widgets type="order" />
                    <Widgets type="earning" />
                    <Widgets type="balance" />
                </div>
                <div className='charts lg:w-full md:w-[768px]'>
                    <Chart />
                </div>
                <div className='listContainer'>
                    <List />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home