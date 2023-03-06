import React, { useMemo, useState, useContext, useEffect } from 'react';
import '../../css/EditPrescription.css';
import DatePicker from "react-multi-date-picker";
import Popup from '../Popup';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";





const EditPrescription = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
      
        
    return (
        <div id='Edity'>
                <input 
                    id='PopupInput'
                    value="ویرایش"
                     type="button"
                    onClick={togglePopup}
                      />
                     
                    {isOpen && <Popup
                       content={<>
                         <div id='Edit-form'>
            <div className='container'>
                <div className='edit-info2'>
                    <div className='edit-input'>
                    <label >نام نسخه</label>
                    <select type='text' name='numcontract' />
                    </div>
                    <div className='edit-input'>
                    <label >شماره قرارداد</label>
                    <select type='text' name='numcontract' />
                    </div>
                    <div className='edit-input'>
                    <label >نوع تخصص پزشک</label>
                    <select type='text' name='numcontract' />
                    </div>
                    <div className='edit-input'>
                    <label >سقف خانوار</label>
                    <input type='text' name='numcontract' />
                    </div>
                    <div className='edit-input'>
                    <label >سقف هر نفر</label>
                    <input type='text' name='numcontract' />
                    </div>
                    <div className='edit-input'>
                    <label >مبلغ فرانشیز</label>
                    <input type='text' name='numcontract' />
                    </div>
                    <div className='edit-input'>
                    <label >عائله/غیر تکلف</label>
                    <select type='text' name='numcontract' />
                    </div>
                    
                   <button type='submit' name='btn-contract' id='btn-info'>به روز رسانی</button>

                </div>

            </div>
            
        </div>
                        </>}
                       handleClose={togglePopup}
                       />}
        </div>
    )
}

export default EditPrescription
