import React from 'react'
import { ArrowForwardIos } from '@mui/icons-material'
import { iconHeight } from '../../helpers/Styles'


function NavGrid({value}) {

  return (
    <div>
        <ul className='flex flex-row space-x-2 ml-44 pt-16'>
          <li className='hover:text-[#3CB878] text-[#333333]'>
            <a href='/'>Home</a>
          </li>
          <li className='flex flex-row mt-2 space-x-[-1.3rem]'>
            <ArrowForwardIos style={iconHeight} /><ArrowForwardIos style={iconHeight} />
          </li>
          <li className='hover:text-[#3CB878] text-[#333333]'>
          <a href='#'>Page</a> 
          </li>
          <li className='flex flex-row mt-2 space-x-[-1.3rem]'>
            <ArrowForwardIos style={iconHeight} /><ArrowForwardIos style={iconHeight} />
          </li>
          <li className='hover:text-[#3CB878] text-[#333333]'>
            <a href='#'>Shop</a>
          </li>
          <li className='flex flex-row mt-2 space-x-[-1.3rem]'>
            <ArrowForwardIos style={iconHeight} /><ArrowForwardIos style={iconHeight} />
          </li>
          <li className='text-[#3CB878]'>
            <a href='#'>{value}</a>  
          </li>
        </ul>
    </div>
  )
}

export default NavGrid