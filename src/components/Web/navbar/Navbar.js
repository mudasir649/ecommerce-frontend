import React, { useContext, useEffect, useState } from 'react'
import { Phone, Mail, FacebookOutlined, Twitter, Instagram, LinkedIn, ShoppingCart, Search, WhatsApp, Dashboard, Menu, Close } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { authStyle, navbarLiStyle, navbarPath, MainIcon, IconStyle } from '../../../helpers/Styles';
import { api } from '../../../helpers/Api';
import { ToastContainer } from 'react-toastify';
import { DarkModeContext } from '../../../context/DarkModeContext';

function Navbar() {

    const { setUser, user } = useContext(DarkModeContext);
    const [total, setTotal] = useState(null)
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate();
    // const checkNavbar = navbar == true ? "visible": "invisible";

    useEffect(()=> {
        let response;
        const fetchApi = async()=> {
            try {
                const res = await api.get(`${process.env.REACT_APP_PORT}/product/totalusercart/${user?.userId}`);
                response = await res.data;
                if(response.success === true){
                    setTotal(response.data);
                }
            } catch (error) {
                console.log(error);
            }
            
        }
        fetchApi();
    }, [user])

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

    const toggleMenu = (e) => {
        const navlinks = document.querySelector('.nav-links');
        console.log(navlinks);
        navlinks.classList.toggle('md:h-[500px]')
        setNavbar(!navbar)
    }


  return (
    <div className='navbar'>
        <ToastContainer />
        <div className='lg:grid lg:grid-cols-2 lg:h-16 md:invisible lg:visible sm:invisible text-[#FFFFFF] bg-black'>
            <div className='left text-[13px] ml-16 my-4 flex flex-row'>
                <Phone  />
                <div className='ml-6'>+ 123 322 4223324</div>
                <div className="h-[20px] ml-10 mt-1 bg-gray-600 w-[1px]"></div>
                <Mail className='ml-10'  />
                <div className='ml-7'>info@company.com</div>
            </div>
            <div className='flex justify-end space-x-9 my-4 mr-20'>
                <FacebookOutlined />
                <Twitter  />
                <Instagram  />
                <LinkedIn  />
                <WhatsApp  />
            </div>
        </div>
        <div className={`nav-links shadow-lg w-full lg:h-full lg:mt-0.5 grid grid-cols-3 h-20
                        md:top-[10%]
                        md:mt-[-100px]
                        sm:h-[300px]}
                        `} id='nav-links'>
            <div className='text-[#3CB878] uppercase'>
                <div className='my-5 ml-16 font-[900] text-2xl'>
                    <a href="#" className='hover:text-green-800 italic'>Commerce Shop</a> 
                </div>
            </div>
            <div className={`text-gray-900 w-[500px] font-normal text-md lg:relative lg:visible md:absolute md:${navbar == true ? "visible": "invisible"}`}>
                <ul className='lg:flex lg:flex-row lg:justify-center lg:mt-0 lg:gap-0 lg:space-x-7 md:flex-col md:mt-20 md:ml-16 md:gap-[4vw] sm:flex-col cursor-pointer'>
                    <li className={`${navbarLiStyle}`} onClick={() => navigate("/")}>
                        Home
                    </li>
                    <li className={navbarLiStyle} onClick={() => navigate(`${navbarPath}/Men`)}>
                        Men
                    </li>
                    <li className={navbarLiStyle} onClick={() => navigate(`${navbarPath}/Laptops`)}>
                        Laptops
                    </li>
                    <li className={navbarLiStyle} onClick={() => navigate(`${navbarPath}/kid`)}>
                        Kids
                    </li>
                    <li className={navbarLiStyle} onClick={() => navigate(`${navbarPath}/Accessories`)}>
                        Accessories
                    </li>
                    <li className={navbarLiStyle} onClick={() => navigate(`${navbarPath}/Watches`)}>
                        Watches
                    </li>
                    <li className={`${navbarLiStyle} lg:invisible md:${ navbar == true ? `visible` : `invisible`} `  }>
                        {!user ?
                        <button className={`${authStyle}`} onClick={() => navigate("/login")}>
                            Login
                        </button>
                        :
                        <div className='flex flex-row gap-2'>
                        <button className={`${authStyle} mt-[-7px]`} onClick={(e) => logout(e)}>
                            Logout
                        </button> 
                    </div>
                }
                    </li>
                </ul>
            </div>
            <div className='flex flex-row lg:justify-end lg:relative lg:my-2 md:absolute sm:absolute md:space-x-4 md:my-2 md:mx-20 sm:my-[10px]'>
                {!user ? 
                <>
                    <div className='flex flex-row mt-1.5'>
                    <button className={`${authStyle} lg:visible md:invisible sm:invisible`} onClick={() => navigate("/login")}>
                        Login
                    </button>
                    <button className={`lg:hidden md:pl-[450px] sm:pl-[550px] text-5xl`} onClick={(e) => toggleMenu(e)}>
                        { navbar == true ?  <Close /> : <Menu /> }
                    </button>
                    </div>
                </>
                :
                <div className='flex flex-row space-x-5 lg:my-3 md:pl-[450px] md:my-5'>
                <div className='flex flex-row cursor-pointer' onClick={() => navigate("/addtocart") }>
                    <ShoppingCart />
                    <div className={MainIcon} style={IconStyle}>{total}</div>
                </div>
                <Search className="cursor-pointer"  />
                <Dashboard onClick={() => navigate("/admin")} className="cursor-pointer" />
                <button className={`${authStyle} mt-[-7px] lg:visible md:invisible sm:invisible`} onClick={(e) => logout(e)}>
                    Logout
                </button>
                <button className={`lg:hidden text-5xl`} onClick={(e) => toggleMenu(e)}>
                        { navbar == true ?  <Close /> : <Menu /> }
                </button>
                </div>
            }
            </div>
        </div>
    </div>
  )
}

export default Navbar