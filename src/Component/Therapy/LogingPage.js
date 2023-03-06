import React, { useMemo, useState, useContext, useEffect } from "react";
import '../../css/Login.css';
import BackLogin from '../../images/medical-logo-png-882.png';
import { Button } from 'bootstrap';
import { NavLink } from 'react-router-dom';
import Spinner from '../Spinner';
import Back from '../../images/output-onlinegiftools (2).gif';
import { LoginTitle } from '../../Constant/constant';
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";




const LogingPage = () => {
    document.title=LoginTitle;
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)

    }, []);
    
    const override = css`
    display: flex;
    margin: 15rem 35rem;
    
  `;

    return (
        <div className="LoginCustom ">
            {
                loading ?
                <DotLoader color={'#D15998'} loading={loading} css={override} size={200} />

                :

            <div className='container'>
                <div className='back-logo'>
                <NavLink to="/"><img src={Back} /></NavLink>
                </div>
                <div className='form-wrap'>
                    <div className='ImgLog'>
                        <img alt='mylog' src={BackLogin} />
                    </div>
                    <h2>ورود کاربر</h2>
                    <div className='form-group'>
                        <input for="user" type='text' placeholder='نام کاربری' ></input>
                    </div>
                    <div className='form-group'>
                        <input for="password" type='password' placeholder=' کلمه عبور' ></input>
                    </div>
                    <div className='CheckBox'>
                    <label>
                    مرا به خاطر بسپار
                    </label>
                    <input type='checkbox' name='Remember' value='M' id='LogCheckBox' />
                    </div>
                    <NavLink to="SpecificPerson"><button type='button'>ورود</button></NavLink>
                </div>

            </div>
            }
            
            
        </div>
    )
}

export default LogingPage
