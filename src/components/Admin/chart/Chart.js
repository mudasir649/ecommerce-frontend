import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material'
import React, { useContext } from 'react'
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from 'react-circular-progressbar'
import ChartWidgets from '../chartwidget/ChartWidgets';
import { DarkModeContext } from '../../../context/DarkModeContext';

function Chart() {

    const { darkMode } = useContext(DarkModeContext);

  return (
    <div className='lg:flex lg:flex-row lg:m-5 md:flex-col'>
        <div className='shadow-xl w-96 h-[500px] lg:ml-0 md:ml-[100px]' 
            style={darkMode ? {boxShadow:"2px 4px 10px 1px rgba(201, 201, 201, 0.47)"} : {}}>
                <div className='text-gray-600 float-left m-2'>
                    Total Revenue
                </div>
                <div className='text-gray-500 float-right m-2'>
                    <MoreVert />
                </div>
                <div className="align-center mt-16">
                    <CircularProgressbar className='h-24' value={70} text={"70%"} strokeWidth={5} />
                        <h1 className='text-center text-gray-500 mt-5 text-lg'>Total sales made today</h1>
                        <h1 className='text-center text-gray-500 mt-10 text-5xl'>$420</h1>
                        <h1 className='text-center text-gray-500 mt-8 ml-10 mr-10 text-[12px]'>
                            Previous transaction processing. Last payment not included.
                        </h1>
                        <div className='flex justify-center my-5 space-x-12'>
                        <div className='mt-4'>
                                <h1 className='text-gray-400 text-sm ml-5'>Target</h1>
                                <div className='flex text-red-600 mt-2'>
                                <KeyboardArrowDown />
                                <span>$12.4 k</span>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h1 className='text-gray-400 text-sm ml-5'>Target</h1>
                                <div className='flex text-green-700 mt-2'>
                                <KeyboardArrowUp />
                                <span>$12.4 k</span>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h1 className='text-gray-400 text-sm ml-5'>Target</h1>
                                <div className='flex text-green-700 mt-2'>
                                <KeyboardArrowUp />
                                <span>$12.4 k</span>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
        <div className='shadow-xl flex-grow p-5 h-[500px] ml-5' 
            style={darkMode ? {boxShadow:"2px 4px 10px 1px rgba(201, 201, 201, 0.47)"} : {}}>
            <h1 className={darkMode ? 'text-gray-400' : ''}>Last 6 months (Revenue)</h1>
            <ChartWidgets />
        </div>
    </div>
  )
}

export default Chart