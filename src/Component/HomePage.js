import React, { useMemo, useState, useContext, useEffect } from "react";
import '../css/HomePage.css'; 
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import {HomeTitle} from '../Constant/constant';
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";


const HomePage = () => {
    document.title=HomeTitle;
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)

    }, []);
    
    const override = css`
    display: flex;
    margin: 55rem 0;
    top: 15rem
    
  `;

    return (
        <div id="home-page">
            {
                loading ?
                <DotLoader color={'#D15998'} loading={loading} css={override} size={200} />

                :

            <nav className='navHome'>
            <img id='logo-home' src={Logo} />
            <section className="cover">
                    
                
                    <div className="item ii">
                    
                    <div className="handle"><h3>اداری</h3></div>
                    <ul>
                        <li>ورود کاربری</li>
                        <li>صفحه اداره رفاه برای ثبت نسخ</li>
                    </ul>
                    <NavLink to="SpecificPerson">ورود کاربر</NavLink>
                    <h2><span className='primery'>مشانیر</span>اداره رفاه</h2>
                    </div>
                
                </section>
                
                    
            </nav>
            }
            
        </div>
    )
}

export default HomePage
