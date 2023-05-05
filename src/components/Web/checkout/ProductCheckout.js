import React, { useState, useEffect, useContext } from 'react'
import calculateBill from '../../../helpers/CalculateBill';
import { hr, products, tableBtnStyle } from '../../../helpers/Styles'
import { useStripe, useElements, CardCvcElement, CardExpiryElement, CardNumberElement } from "@stripe/react-stripe-js"
import { DarkModeContext } from '../../../context/DarkModeContext';
import { api } from '../../../helpers/Api';
import { toast, ToastContainer } from 'react-toastify';

function ProductCheckout({cartData}) {
  
  const { user } = useContext(DarkModeContext);
  const [total, setTotal] = useState(0);
  const stripe = useStripe();
  const element = useElements();

  useEffect(() => {
    setTotal(calculateBill(cartData))
  }, [cartData])

  const handleSubmit = async(e) => {

    let response;
    try {
      const res = await api.post(`${process.env.REACT_APP_PORT}/product/checkoutproduct`, { totalAmount:total, user });
      response = await res.data;
      if(response?.success === true){
        const confirmPayment = await stripe.confirmCardPayment(
          response?.data, {
            payment_method: {
              card: element.getElement(CardNumberElement),
            },
          }
        );
        if(confirmPayment.paymentIntent.status === "succeeded"){
          toast(response?.message);
        }
      }
    } catch (error) {
      
    }
  }



  return (
    <>
    <div className='flex flex-row mt-10'>
      <ToastContainer />
        <div className='basis-1/2 flex-grow mx-96'>
          <div className='border-2 border-gray-300 h-full'>
            <div className='border-b-2 '>
              <h1 className='uppercase text-lg font-bold p-7 ml-2'>Your order</h1>
              <div className='mx-8 mb-8'>
                  <span className='float-left text-sm pl-2'>Product</span>
                  <span className='float-right mr-2 text-sm mb-1'>Total</span>
              </div>
              <div className='mb-5'>
                <hr className='mx-10' />
              </div>
              {cartData?.map((cart, i) => (
                <div>
                {cart?.productData?.map((product, i) => (
                <div className='mx-8 pb-8' key={i}>
                  <span className='float-left text-sm pl-2'>{product?.productName} x {cart?.quantity}</span>
                  <span className='float-right text-sm'>{product?.price * cart?.quantity}</span>
                </div>
                ))}
                  {i > 0 && hr}
                </div>
              ))}
            <div className='mx-8 pb-8'>
                <span className='float-left text-sm pl-2'>Subtotal</span>
                <span className='float-right text-sm'>$ {total}</span>
            </div>
            <div className='mx-8 pb-8'>
                <span className='float-left text-sm pl-2'>Shipping</span>
                <span className='float-right text-sm'>Free Shipping</span>
            </div>
            {hr}
            <div className='mx-8 my-5 pb-8'>
                <span className='float-left text-md font-semibold pl-2'>Total</span>
                <span className='float-right text-md font-semibold'>$ {total}</span>
            </div>
            </div>
            <div className='bg-gray-200 mb-2 mt-2 m-4'>
                <p className='p-3 text-sm'>
                <span className='float-left text-md font-semibold'>Card Number:</span>
                <CardNumberElement className='mb-2' />
                <span className='float-left text-md font-semibold'>Card Expiry Date:</span>
                <CardExpiryElement className='mb-2' />
                <span className='float-left text-md font-semibold'>CVC Number:</span>
                <CardCvcElement className='mb-2' />
                </p>
            </div>
            <div className="flex flex-col mx-10 my-5">
            <div className='flex flex-row space-x-2'>
              <button onClick={(e) => handleSubmit(e)} className={`${tableBtnStyle} hover:bg-[#3CB878] w-60 font-semibold hover:text-white uppercasey`}>
                Checkout for payment
              </button>
            </div>
              {/* <div className='flex mb-2'>
                <input type="checkbox" />
                <label className='ml-5'>Direct Bank Transfer</label>
              </div>
              <div className='bg-gray-200 mb-2'>
                <p className='p-3 text-sm'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
              </div>
              <div className='flex mb-2'>
                <input type="checkbox" />
                <label className='ml-5'>Check Payment</label>
              </div>
              <div className='flex mb-2'>
                <input type="checkbox" />
                <label className='ml-5'>PayPal</label>
              </div>
               */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCheckout