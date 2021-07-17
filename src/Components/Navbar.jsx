import React, { useState } from "react";
import "./css/Navbar.css";
import { useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { toPath } from "../utils/helper";
const Navbar = () => {
  const appState = useSelector((state) => state.appState);
  const routerState = useSelector((state) => state.router);
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <header class="bg-white shadow">
      <nav class="z-50 container mx-auto px-3">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <NavLink to="/" className="nav-logo">
                <img
                  className="w-32"
                  src="https://static-today.line-scdn.net/dist/d4981dd1/static/img/brand-logo-rectangle-today-solid.svg"
                  alt="logo"
                />
              </NavLink>
            </div>

            <div class="flex md:hidden">
              <button
                type="button"
                class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="md:flex items-center">
            <div class="flex items-center py-2 -mx-1 md:mx-0">
              <a
                style={{color: 'black', backgroundColor: '#fff'}}
                class="block w-1/2 px-0 py-2 mx-1 rounded text-center text-sm bg-gray-300 font-small text-white leading-5 hover:bg-gray-600 md:mx-0 md:w-auto"
                href="https://access.line.me/oauth2/v2.1/login?loginState=F1GAqxeGfTvWJdQUSImnG8&loginChannelId=1518712866&returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fscope%3Dopenid%2Bprofile%2Bfriends%2Bgroups%2Bmessage.write%2Btimeline.post%26response_type%3Dcode%26state%3DrtOdO_ubrRo%26redirect_uri%3Dhttps%253A%252F%252Fapi.today.line.me%252Fwebapi%252Fauthcb%26client_id%3D1518712866#/"
              >
                Masuk
              </a>
            </div>
          </div>
        </div>

        <div 
          class="pt-3 mx-3 overflow-y-auto whitespace-no-wrap scroll-hidden">        
          <ul className={"tab-items"}
            style={{width: '53vw', display: 'flex'}}
          >
            {appState.categoryTab.map((category, i) => {
              return (
                <li
                  style={{width: '100%', minWidth: '8vw'}}
                  className={
                    toPath(category.name) === routerState.location.pathname
                      ? "menu-item current"
                      : "menu-item"
                  }
                  key={i}
                >
                  <NavLink
                    exact
                    to={toPath(category.name)}
                    activeClassName="nav-selected"
                    className={
                      category.highlight === true
                        ? "nav-links hightlight"
                        : "nav-links"
                    }
                    onClick={closeMenu}
                  >
                    {category.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

      
      </nav>
        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', padding: '3vh 0', backgroundColor: '#FCFCFC'}}>
          <a href='https://today.line.me/id/v2/page/hotissue?liff.referrer=https%3A%2F%2Ftoday.line.me%2F' className='top-issues' style={{borderRadius: '.7vw 0 0 .7vw'}}>
            HOT Issue
          </a>
          <a href='https://today.line.me/id/v2/tab/genz' className='top-issues'>
            Z-Liner
          </a>
          <a href='https://today.line.me/id/v2/page/4weekschallenge' className='top-issues' style={{borderRadius: '0 .7vw .7vw 0'}}>
            4 Weeks Challenge
          </a>
        </div>
    </header>
  );
};

export default Navbar;
