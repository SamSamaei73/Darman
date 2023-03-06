

import React, { useMemo, useState, useContext, useEffect } from 'react';
import '../../css/Editforms.css';
import DatePicker from "react-multi-date-picker";
import MeetingContext from '../../Context/meetingContext';
import Swal from 'sweetalert2';
import Popup from '../Popup';
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import { ContractType } from '../Common/DropDown';
import Select from 'react-select';





const Editforms = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ContractNo, setContractNo] = useState("");
    const meetingContext = useContext(MeetingContext);
    const [Contractor, setContractor] = useState("");
    const [SelectedContractType, setSelectedContractType] = useState(null);
    const [ContractDateAsOf, setContractDateAsOf] = useState(new Date());
    const [ContractDateTill, setContractDateTill] = useState(new Date());
    const [PersianContractStartDate, setPersianContractStartDate] = useState();

    const [PersianContractEndDate, setPersianContractEndDate] = useState();
    const {
        
        GetHealthContracts,
      
        CreateOrUpdateHealthContract,
        createdOrUpdatedHealthContractData,
        
    
    
      } = meetingContext;
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
      useEffect(() => {
      
       console.log('EditData',props.EditData);
       setContractNo(props.EditData.ContractNo);
       setContractor(props.EditData.Contractor);
       var startDate = new DateObject();
       var endDate = new DateObject();
       startDate.setCalendar(persian).setLocale(persian_en) .setFormat("YYYY/MM/DD")
  .parse(props.EditData.ContractDateAsOf);
  endDate.setCalendar(persian).setLocale(persian_en) .setFormat("YYYY/MM/DD")
  .parse(props.EditData.ContractDateTill);
  setContractDateAsOf(endDate);
  setContractDateTill(startDate);
  let contracttype=ContractType.filter((d)=>{ return d.value==props.EditData.ContractType});
  //console.log('filterdata:',contracttype);
  setSelectedContractType(contracttype);
      }, []);

    const OnUpdateItemInDb=async()=>{
        let updateItem={
            Id: props.EditData.ObjectId,
            ContractNo: ContractNo,
            Contractor: Contractor,
            ContractDateAsOf: (PersianContractStartDate?PersianContractStartDate:ContractDateAsOf.format()),
            ContractDateTill:  (PersianContractEndDate?PersianContractEndDate:ContractDateTill.format()),
            ContractType: SelectedContractType.value?SelectedContractType.value:props.EditData.ContractType,
        }
        console.log('Update Item before update item in db:',updateItem);
       
        await CreateOrUpdateHealthContract(updateItem, true);
        Swal.fire({
          icon: 'success',
          title: 'ویرایش با موفقیت انجام شد',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(' before checking updated:',createdOrUpdatedHealthContractData);
        if (createdOrUpdatedHealthContractData) {
          if (createdOrUpdatedHealthContractData.Update) {           
           await GetHealthContracts();    
          }
        }
      };

    
    const onChanged = (e, Type, maxNum) => {
        switch (Type) {
          case 'ContractNoEdit':
            if (e.target.value.length > maxNum)
              e.target.value = e.target.value.slice(0, maxNum);
            //  setIsChangeTel(true);
            setContractNo(e.target.value);
            break;
          case 'ContractorEdit':
            if (e.target.value.length > maxNum)
              e.target.value = e.target.value.slice(0, maxNum);
            //  setIsChangeTel(true);
            setContractor(e.target.value);
            break;
          
    
          default:
            break;
        }
      };
        
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
                    <div className='edit-info'>
                    <div className='edit-input'>
                    <label >شماره قرارداد</label>
                    <input type='text' name='numcontract' value={ContractNo}   onChange={(e) => {
                              onChanged(e, "ContractNoEdit", 900);
                            }} />
                    </div>
                    <div className='edit-input'>
                    <label >طرف قرارداد</label>
                    <input type='text' name='numcontract' value={Contractor} 
                    onChange={(e) => {
                        onChanged(e, "ContractorEdit", 900);
                      }} />
                    </div>
                    <div className='edit-input'>
                    <label >تا تاریخ</label>
                    <DatePicker
                        calendar={persian}
                        locale={persian_fa}
                        calendarPosition="bottom-right"
                        style={{ height: "2rem", textAlign: "center" }}
                        className="CalanderStyle"
                        value={ContractDateTill}
                        onChange={(value) => {
                          console.log(
                            "selected date is :",
                            value.toLocaleString()
                          );
                          var pdata = value.toLocaleString();
                          setPersianContractEndDate(pdata);
                          //setMiladiContractEndDate(value)
                          setContractDateTill(value);
                        }}

                      
                        />
                    </div>
                    <div className='edit-input'>
                    <label > از تاریخ</label>
                    <DatePicker
                        calendar={persian}
                        locale={persian_fa}
                        calendarPosition="bottom-right"
                        style={{ height: "2rem", textAlign: "center" }}
                        value={ContractDateAsOf}
                        onChange={(value) => {
                            console.log(
                              "selected date is :",
                              value.toLocaleString()
                            );
                            var pdata = value.toLocaleString();
                            setPersianContractStartDate(pdata);
                            //setMiladiContractStartDate(value)

                            setContractDateAsOf(value);
                          }}
                     />
                    </div>
                    <div className='edit-input'>
                    <label >نوع قرارداد</label>
                    <Select
                            placeholder="نوع قرارداد"
                            value={SelectedContractType}
                            options={ContractType}
                            onChange={(e) => {
                              console.log(`Option selected:`, e);
                              setSelectedContractType(e);
                            }}
                            className="ContractNo"
                          />
                    </div>
                    <button type='submit' name='btn-contract' onClick={(e)=>OnUpdateItemInDb()}>به روز رسانی</button>

                </div>

            </div>
            
        </div>
                        </>}
                       handleClose={togglePopup}
                       />}
        </div>
    )
}

export default Editforms
