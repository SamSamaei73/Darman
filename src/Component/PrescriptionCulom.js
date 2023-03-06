import React, { useMemo, useState, useContext, useEffect } from 'react';
import '../css/Prescription.css';
import {SearchDataColumns } from './Common/Columns';
import Popup from './Popup';
import CustomTable from './Common/CustomTable';
import MeetingContext from '../Context/meetingContext';
import Swal from 'sweetalert2';
import EditPrescription from './Forms/EditPrescription';





const PrescriptionCulom = () => {



    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
      const kartableActionsAdmin = {
        Header: "عملیات",
        columns: [
          {
            Header: ".",
            Cell: ({ row }) => (
              <div className="Operations">
                <EditPrescription/>
                <button
                type="button"
                id="Print"
                className="editBtn"
                data-toggle="modal"
                data-target=".bd-example-modal-lg2"
                onClick={async (e) => {
                  Swal.fire({
                    title: "آیا مطمئن از حذف عملکرد هزینه هستید ؟",
                    text: "عملکرد هزینه به صورت کامل حذف میشود",
                    icon: "question",
                    iconColor:"red",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "حذف",
                    cancelButtonText: "انصراف"
                    
                  }).then(async (result) => {
                    if (result.isConfirmed) {
                      console.log("healthShoParBachData :", row.original);
                      await DeletePrescriptionCulomById(row.original.ObjectId);
                     // RefreshGridAfterDeleteItem();
                     console.log("deletedResponse is:", deletedPrescriptionCulomData);
                     if (deletedPrescriptionCulomData) {
                       if (deletedPrescriptionCulomData.Deleted) {
                        
                         await GetPrescriptionCulomContracts();
                       }
                     }
                      Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                      );
                    }
                  });
                }}
              >
                حذف
              </button>
              </div>
              
            ),
          },
        ],
      };
    const SearchColumnsForAdmin = useMemo(
        () => [kartableActionsAdmin,SearchDataColumns],
    
        []
      );
      const meetingContext = useContext(MeetingContext);

      const {
        
        healathRecipesListData,
        GetHealthRecipes,
        GetPrescriptionCulomContracts,
        DeletePrescriptionCulomById,
        deletedPrescriptionCulomData,
    
      } = meetingContext;

    useEffect(() => {
      
      GetHealthRecipes();
    }, [])     
    return (
        <div>
            <div className='CalumPopup'>
                <input 
                    id='PopupInput'
                    value="مشاهده جدول"
                     type="button"
                    onClick={togglePopup}
                      />
                     
                    {isOpen && <Popup
                       content={<>
                         <CustomTable
                         key="searchColumnData"
                         columns={SearchColumnsForAdmin}
                         data={healathRecipesListData ? healathRecipesListData : []}
                         />
                        </>}
                       handleClose={togglePopup}
                       />}
                </div>
        </div>
    )
}

export default PrescriptionCulom
