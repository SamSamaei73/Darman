import React, { useMemo, useState, useContext, useEffect } from 'react';
import '../css/HomePage.css'; 
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import {HomeTitle} from '../Constant/constant';
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";


const PersonalHomePage = () => {
    document.title=HomeTitle;
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)

    }, []);

    const override = css`
    display: flex;
    margin: 15rem 0;
    top :15rem;
    
  `;

    return (
        <div id="home-page">
            {
                loading ?
                <HashLoader color={'#D15998'} loading={loading} css={override} size={150} />

                :

            <nav className='navHome'>
            <img id='logo-home' src={Logo} />
            <section class="cover">
                    <div className="item i">
                    <div className="handle"><h3>پرسنل</h3></div>
                    <ul>
                    <li>مخصوص پرسنل مشانیر</li>
                        <li>دیدن وضعیت های نسخ ارسالی</li>
                    </ul>
                    <NavLink to="Personal" id='enter-page'> ورود پرسنل مشانیر</NavLink>
                    <h2><span className='primery'>مشانیر</span>کارکنان</h2>
                    </div>
                
                
                </section>
                
                    
            </nav>
            }
            
            
        </div>
    )
}

export default PersonalHomePage
