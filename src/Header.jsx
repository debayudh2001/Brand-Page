import React from 'react'

const Header = () => {
  return (
    <>
      <div className='h-[72px] flex justify-around items-center'>
        <img src='/images/brand_logo (1).png' alt="logo"></img>
        <nav className='flex items-center'>
            <ul className='flex gap-7'>
                <li href='#' className="font-semibold text-[#2E2E2E] hover:cursor-pointer">MENU</li>
                <li href='#' className="font-semibold text-[#2E2E2E] hover:cursor-pointer">LOCATION</li>
                <li href='#' className="font-semibold text-[#2E2E2E] hover:cursor-pointer">ABOUT</li>
                <li href='#' className="font-semibold text-[#2E2E2E] hover:cursor-pointer">CONTACT</li>
            </ul>
        </nav>
        <button className='bg-[#D01C28] text-white w-[75px] px-[16px] py-[6px] font-semibold'>Login</button>
      </div>
    </>
  )
}

export default Header;


