import React from 'react'

const Frame = () => {
  return (
    <>
      <div className='w-[1125px] h-[550px] relative left-[260px] top-[65px] flex'>
        <div className='w-1/2 h-full flex flex-col justify-between'>
            <p className='font-extrabold text-[#000000] text-8xl'>YOUR FEET DESERVE THE BEST</p>
            <p className='font-semibold text-lg text-[#5A5959] text-justify'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className='flex gap-7'>
                <button className='w-[150px] bg-[#D01C28] text-white font-semibold px-[16px] py-[6px]'>Shop now</button>
                <button className='w-[150px] text-[#5A5959] font-semibold px-[16px] py-[6px] border-[1px] border-[#000000]'>Category</button>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-normal text-[14px] text-[#5A5959]'>Also Available On</p>
                <div className='w-[80px] h-[32px] flex gap-3'>
                    <img src="/images/flipkart (1).png" className='hover:cursor-pointer'></img>
                    <img src="/images/amazon (1).png" className='hover:cursor-pointer'></img>
                </div>
            </div>
        </div>
        <div className='w-1/2 h-full flex items-center justify-center'>
            <div className='w-[475px] h-[475px]'><img src="/images/shoe_image (1).png"></img></div>
        </div>
      </div>
    </>
  )
}

export default Frame;
