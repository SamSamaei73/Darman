import React, { useMemo, useState, useContext, useEffect } from 'react';
import '../css/Prescription.css';
import {SearchDataColumns } from './Common/Columns';
import Popup from './Popup';
import CustomTable from './Common/CustomTable';
import MeetingContext from '../Context/meetingContext';




const UpdateRecipie = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [recipieId, setRecipieId] = useState('');
    const [recipieDesc, setRecipieDesc] = useState('');
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }

    
      const meetingContext = useContext(MeetingContext);
      const {                
        CreateOrUpdateRecipie
    
      } = meetingContext;

    useEffect(() => {    
      setRecipieId(props.recipeData.Id);
      setRecipieDesc(props.recipeData.Desc);
    }, [])  
    const OnUpdateRecipe = () => {
      let recipieData = { RecipieDesc: recipieDesc ,Id:recipieId};
      CreateOrUpdateRecipie(recipieData,true);
    };   
    return (
      <div>
        <div className="CalumPopup-up">
          <input
            id="PopupInput-up"
            value="ویرایش"
            type="button"
            onClick={togglePopup}
            
          />

          {isOpen && (
            <Popup
              content={
                <>
                  <div className="NewPrescription2">
                    <div className="NewInputUp">
                      <div id="ObjectUp">
                        <input
                          type="text"
                          name="NameP"
                          value={recipieDesc}
                          onChange={(e) => {
                            setRecipieDesc(e.target.value);
                          }}
                          id="InputNameP"
                        />
                      </div>
                      <div className="BtnOb2">
                        <button
                          type="button"
                          id="NewRecipie"
                          onClick={(e) => OnUpdateRecipe(e)}
                        >
                          به روز رسانی
                        </button>
                        {/* <button type='button' id='EditRecipie' >ویرایش</button>
                            <button type='button' id='DeleteRecipie'>حذف</button> */}
                      </div>
                    </div>
                  </div>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
      </div>
    );
}

export default UpdateRecipie
