import React from 'react'
import add from '../../../../add'

function AddSection() {
  return (
    <div>
        <div className='flex flex-row space-x-[1px]'>
          {add.map((ad, i) => (
            <div className='w-full h-52 bg-gray-100 p-10' key={i}>
              <div className='flex justify-center'>
                <img src={ad.image} />
              </div>
              <div className='my-5'>
                <h1 className={`${ad.name === "30 days return" ? "pt-2" : ""} text-[#333333] text-center text-2xl mt-1 uppercase font-bold`}>{ad.name}</h1>
                <h2 className='text-[#333333] text-center text-md'>{ad.title}</h2>
              </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default AddSection