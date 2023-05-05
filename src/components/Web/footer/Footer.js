import React from 'react'
import { Facebook, Twitter, Instagram, LinkedIn, WhatsApp, Public, Phone, Mail } from '@mui/icons-material'
import { IconHeight, spanStyle, ulStyle, liStyle } from '../../../helpers/Styles';
import { useNavigate } from 'react-router-dom';
function Footer() {

    const navigate =  useNavigate(); 

  return (
    <div>
        <div className='lg:flex lg:flex-row md:grid md:grid-cols-2 h-12 border bottom-0 mt-10'>
            <div className='flex justify-center basis-1/2 lg:text-sm md:text-xs font-semibold my-3 md:my-2 lg:mx-20 md:mx-6'>
                We're confident we've provided all the best for you. Stay connect with us. 
            </div>
            <div className='flex justify-center lg:border-r-[1px] md:border-l-[0.7px] lg:border-l-[1px] md:border-r-[0px] w-full h-full space-x-9 pt-3 basis-1/5' >
                <a className={liStyle} href="#" >
                    <Facebook  />
                </a>
                <a className={liStyle} href="#" >
                    <Twitter  />
                </a>
                <a className={liStyle} href="#" >
                    <Instagram  />
                </a>
                <a className={liStyle} href="#" >
                    <LinkedIn  />
                </a>
                <a className={liStyle} href="#" >
                    <WhatsApp  />
                </a>
            </div>
        </div>
        <div className='h-52 flex flex-row mb-40'>
            <div className='lg:basis-1/3 '>
                <div className='flex flex-col lg:pl-[195px] md:pl-[50px] py-10'>
                    <span className={spanStyle}>information</span>
                    <ul className={ulStyle}>
                        <li className={liStyle} onClick={() => navigate("/")}>
                            Delivery Information</li>
                        <li className={liStyle} onClick={() => navigate("/")}>
                            Discount
                        </li>
                        <li className={liStyle} onClick={() => navigate("/")}>
                            Sitemap
                        </li>
                        <li className={liStyle} onClick={() => navigate("/")}>
                            Privacy Policy
                        </li>
                        <li className={liStyle} onClick={() => navigate("/")}>
                            My Account
                        </li>
                    </ul>
                </div>
            </div>
            <div className='lg:basis-1/4'>
                <div className='flex flex-col pl-[120px] py-10'>
                    <span className={spanStyle}>my account</span>
                    <ul className={ulStyle}>
                        <li className={liStyle} onClick={() => navigate("/auth")}>
                            Sign In
                        </li>
                        <li className={liStyle} onClick={() => navigate("/addtocart")}>
                            View Cart
                        </li>
                        <li className={liStyle} onClick={() => navigate("/")}>
                            My Wishlist
                        </li>
                        <li className={liStyle} onClick={() => navigate("/checkoutdetails")}>
                            Check out
                        </li>
                        <li className={liStyle} onClick={() => navigate("/")}>
                            Track My order
                        </li>
                    </ul>
                </div>
            </div>
            <div className='lg:basis-1/5'>
                <div className='flex flex-col pl-12 py-10'>
                    <span className={spanStyle}>help</span>
                    <ul className={ulStyle}>
                        <li className={liStyle}>
                            <a href='#'>F.A.Q</a>
                        </li>
                        <li className={liStyle}>
                            <a href='#'>Shipping</a>
                        </li>
                        <li className={liStyle}>
                            <a href="#">Contact us</a> 
                        </li>
                        <li className={liStyle}>
                            <a href='#'>Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='lg:basis-1/2'>
            <div className='flex flex-col pl-5 py-10'>
                    <span className={spanStyle}>Contact Info</span>
                    <ul className={ulStyle}>
                        <li className={liStyle}>
                            <Public style={{IconHeight}} />
                            <span className='ml-2'>123 xyz company</span> 
                        </li>
                        <li className={liStyle}>
                            <Phone style={{IconHeight}} />
                            <span className='ml-2'>+123 12234 25342333</span> 
                        </li>
                        <li className={liStyle}>
                            <Mail />
                            <span className='ml-2'>mail@domain.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 h-full text-[#FFFFFF] bg-black'>
            <div className='left text-[13px] ml-16 my-4 flex flex-row'>
                <span className='lg:mx-32 md:mx-10'>Copyright 2022</span>
            </div>
        </div>
    </div>
  )
}

export default Footer