import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { tableBtnStyle } from '../../../helpers/Styles'
import { Country, State, City } from 'country-state-city';
import calculateBill from '../../../helpers/CalculateBill';


function Shipping({cartData}) {

  const  [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calculateBill(cartData))
  }, [cartData])

  const billTotal = total - 50;

  const navigate =  useNavigate()

  // const cartBill = {
  //   subtotal:450,
  //   coupon: 50
  // }

  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [states, setStates] = useState("");
  const [state, setState] = useState("");
  const [cities, setCities] = useState("");
  const [city, setCity] = useState("");


  const countryBtn = (isoCode) => {
    setCountryCode(isoCode);
    setCountry(Country.getCountryByCode(isoCode).name)
    setStates(State.getStatesOfCountry(isoCode));
  }

  const stateBtn = (stateCode) => {
    setState(State.getStateByCodeAndCountry(stateCode, countryCode).name)
    setCities(City.getCitiesOfState(countryCode, stateCode));
  }


  return (
    <>
    <div className='flex flex-row mx-44 justify-center mt-10 space-x-5'>
          <div className='basis-1/2'>
          <h1 className="text-[#232323] text-md uppercase font-semibold mb-7">
            shipping availability
          </h1>
          <div className='flex flex-col mb-3'>
            <span className='capitalize mb-2 text-md text-gray-400'>select country</span>
            <select className="h-10 w-[610px] focus:border-[#3CB878] focus:ring-[#3CB878] p-2 text-sm capitalize border-2 broder-gray-300" onChange={e => countryBtn(e.target.value)}>
              {Country.getAllCountries().map(country => (
                <option value={country.isoCode} label={country.name} key={country.isoCode} />
              ))}
            </select>
          </div>
          <div className='flex flex-col mb-3'>
            <span className='capitalize mb-2 text-md text-gray-400'>select state</span>
            <select className="h-10 w-[610px] focus:border-[#3CB878] focus:ring-[#3CB878] p-2 text-sm capitalize border-2 broder-gray-300" onChange={e => stateBtn(e.target.value)}>
              {states === "" ? <option>Please! Select country first</option> : 
                <>
                {states.length === 0 ? <option>This country has no state</option> : states?.map((state, i) => (
                  <option value={state.isoCode} key={i} label={state.name} />
                ))}
                </>
              }
            </select>
          </div>
          <div className='flex flex-col mb-3'>
            <span className='capitalize mb-2 text-md text-gray-400'>select state</span>
            <select className="h-10 w-[610px] focus:border-[#3CB878] focus:ring-[#3CB878] p-2 text-sm capitalize border-2 broder-gray-300" onChange={e => setCity(e.target.value)}>
              {cities === "" ? <option>Please! Select state</option> : 
                <>
                {cities.length === 0 ? <option>This state has no city</option> : cities?.map((city, i) => (
                  <option value={city.name} key={i} label={city.name} />
                ))}
                </>
              }
            </select>
          </div>
          <button className={`${tableBtnStyle} hover:bg-[#3CB878] w-60 font-semibold hover:text-white capitalize`} onClick={() => navigate("/checkout")}>
              Proceed to checkout
          </button>
          </div>
          <div className='basis-1/2'>
            <h1 className="text-[#232323] text-md uppercase font-semibold mb-7">
              shipping availability
            </h1>
            <div className='flex flex-col border-2 text-gray-500 border-gray-300 h-60 w-full'>
              <div className='h-52 border-b flex flex-col space-y-6 p-4'>
                <div className='mx-2 capitalize text-md font-semibold'>
                    <span className='float-left'>Subtotal</span>
                    <span className='float-right'>${total}</span>
              </div>
              <div className='mx-2 capitalize text-md font-semibold'>
                    <span className='float-left'>Coupon</span>
                    <span className='float-right'>-${billTotal}</span>
              </div>
              <div className='mx-2 capitalize text-md font-semibold'>
                    <span className='float-left'>Shipping</span>
                    <span className='float-right'>Free Shipping</span>
              </div>
              </div>
              <div className='h-16 p-4'>
                <div className='mx-2 capitalize text-md font-semibold'>
                    <span className='float-left'>total</span>
                    <span className='float-right'>${billTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Shipping