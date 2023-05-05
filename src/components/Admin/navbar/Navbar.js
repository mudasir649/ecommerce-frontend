import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsOutlined, SearchOutlined } from '@mui/icons-material'
import React, { useContext } from 'react'
import { DarkModeContext } from '../../../context/DarkModeContext'
import { AdminIcon, darkIconColor, iconStyle, lightIconColor } from '../../../helpers/Styles'
import "./navbar.scss"

function Navbar() {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className='flex flex-row h-15.3 border'>
      <div className='search basis-1/2 mt-2'>
        <input className={ darkMode ? 'h-7 w-44 ml-5 pl-1 pt-1 bg-[#111] border rounded-sm border-gray-200' : 
        'h-7 w-44 ml-5 pl-1 pt-1 border rounded-sm border-gray-200'} type="text" placeholder="Search...." style={{fontSize:"12px"}}/>
        <SearchOutlined style={{marginLeft:"-1.8rem", color:"#999"}} />
      </div>
      <div className='icon basis-1/2 mb-2'>
        <div className='grid grid-flow-col grid-cols-8 ml-52 mt-3'>
          <div className='flex flex-row'>
            <LanguageOutlined className={ darkMode ? darkIconColor : lightIconColor} />
            <span className={ darkMode ? 'text-gray-400 ml-1':'text ml-1'}>English</span>
          </div>
          <div className='ml-12'>
            <DarkModeOutlined className={ darkMode ? darkIconColor : lightIconColor} />
          </div>
          <div className='w-3 ml-9 mr-7'>
            <FullscreenExitOutlined className={ darkMode ? darkIconColor : lightIconColor} />
          </div>
          <div className='ml-7 mr-7 grid'>
            <NotificationsOutlined className={ darkMode ? darkIconColor : lightIconColor} />
            <div className={AdminIcon} style={iconStyle}>1</div>
          </div>
          <div className='ml-7 mr-7 grid'>
            <ChatBubbleOutlineOutlined className={ darkMode ? darkIconColor : lightIconColor} />
            <div className={AdminIcon} style={iconStyle}>1</div>
          </div>
          <div className='ml-8 mr-8'>
            <ListOutlined className={ darkMode ? darkIconColor : lightIconColor} />
          </div>
          <div>
            <img 
            src='https://hips.hearstapps.com/hmg-prod/images/gettyimages-693134468.jpg?resize=1200:*'
            alt='hello'
            className='rounded-full h-8 ml-8'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar