import React, { useState } from 'react';
import Logo from './../../assets/tailwind-css-logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMobileMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="relative bg-white">

      <div className="max-w-7xl m-auto flex items-center justify-between	p-2.5">
        <div className="w-14">
          <img src={Logo} className="w-full	" />
        </div>

        <div
          className={`${menuActive && 'text-red-600'} cursor-pointer md:hidden uppercase hover:text-red-600`}
          onClick={handleMobileMenu}>
          Menu
            </div>

        <nav className={`
              ${!menuActive && 'hidden'}
              absolute flex flex-col bg-white top-full w-full left-0 z-20
              md:static md:w-auto md:flex md:flex-row`}>

          <li className="list-none md:mr-5 	">
            <Link className="flex w-full text-base	uppercase hover:text-red-600 cursor-pointer	pt-2.5 px-2.5			">
              Page
                </Link>
          </li>
          <li className="list-none md:mr-5 	">
            <Link className="flex w-full text-base	uppercase hover:text-red-600 cursor-pointer	pt-2.5 px-2.5			">
              Page
                </Link>
          </li>
          <li className="list-none md:mr-5 	">
            <Link className="flex w-full text-base	uppercase hover:text-red-600 cursor-pointer	pt-2.5 px-2.5			">
              Page
                </Link>
          </li>
        </nav>
      </div>

    </header>
  )
}

export default Header;
