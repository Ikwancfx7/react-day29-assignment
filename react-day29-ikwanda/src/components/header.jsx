// import { useState } from 'react'
import BarIcon from '../assets/Bar-putih.png';
import BackgroundImage from '../assets/BG-1.jpg';

function Header({isOpen, toggleMenu, title, setTitle}) {

  return (
    <header className="flex relative justify-center">
      <img className="flex brightness-30 w-full h-100 object-cover" src={BackgroundImage} alt="bground" />
      <div className="container2 absolute flex flex-col text-white lg:pt-10 w-full">
        <div className="flex flex-row justify-between bg-black lg:bg-transparent h-20 px-5 lg:px-20 items-center">
          <a href="#" className="text-white text-2xl lg:text-5xl font-extralight">IKWAN RESTO</a>
          <div className="hidden lg:flex">
            <ul className="flex flex-row items-center lg:pr-8">
              <li onClick={() => setTitle('HOME')} className="hover-menu"><a href="#">HOME</a></li>
              <li onClick={() => setTitle('MENU')} className="hover-menu"><a href="#">MENU</a></li>
              <li onClick={() => setTitle('RESERVATION')} className="hover-menu"><a href="#">RESERVATION</a></li>
            </ul>
            <button type="button">
              <a onClick={() => setTitle('ORDER ONLINE')} className="button-orderOnline" href="#">ORDER ONLINE</a>
            </button>
          </div>
          <div className="lg:hidden">
            <button>
              <img onClick={toggleMenu} className="w-9 h-5 flex hover:scale-110 hover:cursor-pointer" src={BarIcon} alt="bar" />
            </button>
          </div>
        </div>
        {/* listMenu small */}
        <div
          id="listMenu"
          className={`flex absolute left-0 bg-gray-900 justify-center w-full mt-20 pr-3 lg:hidden transform origin-top transition-all duration-300 ease-in-out 
          ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
          
        >
          <ul className="grid grid-cols-1 place-items-center text-gray-200">
            <li onClick={() => setTitle('HOME')} className="hover-menu-2"><a href="#">HOME</a></li>
            <li onClick={() => setTitle('MENU')} className="hover-menu-2"><a href="#">MENU</a></li>
            <li onClick={() => setTitle('RESERVATION')} className="hover-menu-2"><a href="#">RESERVATION</a></li>
            <li onClick={() => setTitle('ORDER ONLINE')} className="hover-menu-2"><a href="#">ORDER ONLINE</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center h-30 mt-55 lg:mt-40">
          <h1 className="custom-text1">{title}</h1>
        </div>
      </div>
    </header>
  )
}

export default Header;
