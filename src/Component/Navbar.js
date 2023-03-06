import React from 'react';
import '../../src/css/Navbar.css';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import Search from '../images/Search.png';
import logeIn from '../images/LOGIN.png';
import Home from '../images/output-onlinegiftools (2).gif';


const Navbar = () => {
  return (
    <div id="NavbarInfo">
      <div className="headLogo">
          <img src={logo} className="LogoStyle" />
        </div>
        <div id="container" className='MenueTools'>
          <ul id="menu">
            <div className='LogoDiv'>
              <span className='SearchLogo'><a href='./Search'><img id='search' src={Search} /> </a></span>
              <span className='LoginLogo'><a href='http://intranet.moshanir.com/'>  <img id='Login' src={Home} /></a></span>
            </div>
            <li>
              <a href='http://intranet.moshanir.com/'>صفحه نخست</a>
            </li>
            <li>
              <a href="#">اطلاعات اولیه</a>
              <ul>
                {/* <li>
                  <a href="#"> ورود مراکز درمانی</a>
                </li> */}

                <li>
                  <NavLink to="/Bimeh">قراردادهای بیمه</NavLink>
                </li>
                <li>
                  <NavLink to="/Packet"> بسته های نسخ ارسالی</NavLink>
                </li>
                <li>
                  <NavLink to="/Prescription">ثبت و عملکرد انواع نسخه </NavLink>
                </li>
                <li>
                  <NavLink to="/Aelemandi">ثبت افراد تحت تکفل</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">عملیات </a>
              <ul>
                <li>
                  <NavLink to="SpecificPerson"> نسخه های سرپایی</NavLink>
                </li>
                {/* <li>
                  <a href="#">هزینه های بیمارستانی طرف بیمه </a>
                </li>
                <li>
                  <a href="#"> هزینه های بیمارستانی آزاد</a>
                </li> */}
              </ul>
            </li>
            <li>
              <a href="#"> گزارش ها </a>
              <ul>
                <li>
                  <NavLink to="/Reports">لیست خسارت اولیه</NavLink>
                  <NavLink to="/MainReaport">گزارش بیمه</NavLink>
                </li>
                {/* <li>
                  <a href="#">لیست خسارت نهایی</a>
                </li>
                <li>
                  <a href="#">لیست مجموع هزینه های پرداختی</a>
                </li> */}
              </ul>
            </li>
            {/* <li>
              <a href="#">دسترسی </a>
              <ul>
                <NavLink to="/PersonalHomePage">گزارش پرسنل</NavLink>
              </ul>
            </li> */}
          </ul>
          {/* <div className='LogoDiv'>
           <span className='SearchLogo'><a href='./Search'><img id='search' src={Search} /> </a></span>
           <span className='LoginLogo'><NavLink to="Login">  <img id='Login' src={Home} /></NavLink></span>
          </div> */}
        </div>
        
    </div>
  );
};

export default Navbar;
