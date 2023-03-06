import React, { useMemo, useState, useContext, useEffect } from 'react';
import Popup from './Popup';
import '../css/Login.css';
import '../css/HomePage.css';
import BackLogin from '../images/medical-logo-png-882.png';
import { NavLink } from 'react-router-dom';
import {LoginTitle} from "../Constant/constant";





const Login = (props) => {

    document.title=LoginTitle;

    
    const [isOpen, setIsOpen] = useState(false);
    const [ContractNo, setContractNo] = useState("");
   
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
      

  

    
    
     
        
    return (
        <div id='Edity'>
                <input 
                    id='PopupInput2'
                    value="ورود"
                     type="button"
                    onClick={togglePopup}
                      />
                     
                    {isOpen && <Popup
                       content={<>
                         <div className="LoginCustom ">
            
               <div className='container'>
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
            
        </div>
                        </>}
                       handleClose={togglePopup}
                       />}
        </div>
    )
}

export default Login;
