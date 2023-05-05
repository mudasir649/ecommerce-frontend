import { Dashboard, GroupOutlined, BorderStyle, LocalShipping, AccountCircleOutlined, LogoutOutlined, AddCircle, Update, Done, ShoppingCart, Store, Home } from '@mui/icons-material'
import { List } from '@mui/material'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DarkModeContext } from '../../../context/DarkModeContext'
import { api } from '../../../helpers/Api'
import "./sidebar.scss"

function Sidebar() {

  const { dispatch, darkMode, user, setUser } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const path = '/admin'
  const darkIcon = "text-gray-500"
  
  const logout = async(e) => {
    e.preventDefault();
    let response;
    try {
        const res = await api.get(`${process.env.REACT_APP_PORT}/auth/logout`, { withCredentials: true });
        response = await res.data;
        if(response?.success === true){
            setUser(null);
            navigate("/");
        }
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className='sidebar'>
      <div className='top  mb-2'>
        <Link className={ darkMode ? darkIcon :'logo'}>
          <span className='hover:text-green-600 uppercase' onClick={() => navigate('/')}>
            Cart shop 
          </span>
        </Link>
      </div>
      <hr />
      <div className='center hover:text-gray-600'>
        <ul>
          <p className='title'>MAIN</p>
          <li className='cursor-pointer'>
            <Home className={ darkMode ? darkIcon :'icon'} />
            <span onClick={() => navigate('/')}>Home</span>
          </li>
          <li className='cursor-pointer'>
            <Dashboard className={ darkMode ? darkIcon :'icon'} />
            <span onClick={() => navigate(path)}>Dashboard</span>
          </li>
          <p className='title'>LIST</p>
          {user?.accountType === "admin" && 
          <>
            <li className='cursor-pointer'>
              <GroupOutlined className={ darkMode ? darkIcon :'icon'} />
              <span onClick={() => navigate(`${path}/users`)}>Users</span>
            </li>
            <li className='cursor-pointer'>
              <Store className={ darkMode ? darkIcon :'icon'} />
              <span onClick={() => navigate(`${path}/users`)}>Sellers List</span>
            </li>
            <li className='cursor-pointer'>
              <BorderStyle className={ darkMode ? darkIcon :'icon'} />
              <span onClick={() => navigate(`${path}/buyers`)}>Buyers List</span>
            </li>
            <li className='cursor-pointer'>
              <LocalShipping className={ darkMode ? darkIcon :'icon'} />
              <span onClick={() => navigate(`${path}/users`)}>Total Deliveries</span>
            </li>
          </> }
          {user?.accountType === "seller"  && 
            <li className='cursor-pointer'>
              <LocalShipping className={ darkMode ? darkIcon :'icon'} />
              <span onClick={() => navigate(`${path}/users`)}>Total Deliveries</span>
            </li>
          }
          {user?.accountType === "seller" && 
            <>
            <li className='cursor-pointer'>
              <AddCircle className={ darkMode ? darkIcon :'icon'} />
              <span onClick={() => navigate(`${path}/createproduct`)}>Create Product</span>
            </li>
            <li className='cursor-pointer'>
              <Update className={ darkMode ? darkIcon :'icon'} />
              <span onClick={() => navigate(`${path}/updateproduct`)}>Update Product</span>
            </li>
            {/* <li className='cursor-pointer'>
              <List className={ darkMode ? darkIcon :'icon'} />
              <span onClick={() => navigate(`${path}/sellerproductlist`)}>Seller Product List</span>
            </li> */}
            </>
          }
          <li className='cursor-pointer'>
            <Done className={ darkMode ? darkIcon :'icon'} />
            <span onClick={() => navigate(`${path}/buyersproductlist`)}>Buyers Products List</span>
          </li>
          <li className='cursor-pointer'>
            <ShoppingCart className={ darkMode ? darkIcon :'icon'} />
            <span onClick={() => navigate(`${path}/purchasedproductlist`)}>Purchased Products List</span>
          </li>
          <p className='title'>SERVICE</p>
          <li className='cursor-pointer'>
            <AccountCircleOutlined className={ darkMode ? darkIcon :'icon'} />
            <span>Profile</span>
          </li>
          <li className='cursor-pointer' onClick={(e) => logout(e)}>
            <LogoutOutlined className={ darkMode ? darkIcon :'icon'} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOptions' onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className='colorOptions' onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  )
}

export default Sidebar