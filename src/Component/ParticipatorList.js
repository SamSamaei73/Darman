import React, { useMemo, useState, useContext, useEffect } from 'react';
import '../css/Modal.css';
import CustomTable from './Common/CustomTable';
import { ParticipatorColumns } from './Common/Columns';
import MeetingContext from '../Context/meetingContext';
import Header from './Header';

const ParticipatorList = (props) => {
  const meetingContext = useContext(MeetingContext);
  const [selectedRow, setSelectedRow] = useState('');
  const [rowId, setrowId] = useState(null);

  const {
    GetParticipatorList,
    participatorList,
    decodePrsCode,
    currentUser,
    GetParticipatorById,
    participatorData,
  } = meetingContext;
  useEffect(() => {
    GetParticipatorList();
  }, []);

  const setSelectedRowData = (row) => {
    GetParticipatorById(row.original.Id);
    setrowId(null);
    setrowId(row.original.Id);
    // console.log('row Data', row.original);
  };

  const kartableActionsAdmin = {
    Header: 'عملیات',
    columns: [
      {
        Header: '.',
        Cell: ({ row }) => (
          <div className='Operations'>
            <button
              type='button'
              id='View'
              className='editBtn'
              data-toggle='modal'
              data-target='.bd-example-modal-lg1'
              onClick={(e) => {
                setSelectedRowData(row);
              }}
            >
              مشاهده
            </button>
            <button
              type='button'
              id='Print'
              className='editBtn'
              data-toggle='modal'
              data-target='.bd-example-modal-lg2'
              onClick={(e) => {
                // setTel('');
                setSelectedRowData(row);
              }}
            >
              ویرایش
            </button>
            <button
              type='button'
              id='Print'
              className='editBtn'
              data-toggle='modal'
              data-target='.bd-example-modal-lg'
              onClick={(e) => {
                // console.log('row clicked:', row.original.Id);
                let Id = row.original.Id;
                setrowId(Id);
              }}
            >
              چاپ
            </button>
          </div>
        ),
      },
    ],
  };
  const kartableActions = {
    Header: '-',
    columns: [
      {
        Header: '.',
        Cell: ({ row }) => (
          <div className='Operations' style={{ height: '35px' }}>
            {' '}
          </div>
        ),
      },
    ],
  };
  const KartableColumns = useMemo(
    () => [kartableActions, ParticipatorColumns],
    []
  );
  const KartableColumnsForAdmin = useMemo(
    () => [kartableActionsAdmin, ParticipatorColumns],

    []
  );

  const onChanged = (e, Type, maxNum) => {
    switch (Type) {
      case 'Tel':
        // // setShowError(false);
        // if (e.target.value.length > maxNum)
        //   e.target.value = e.target.value.slice(0, maxNum);
        // setIsChangeTel(true);
        // setTel(e.target.value);
        break;
      default:
        break;
    }
  };

  const validateAndSend = async (e, Type) => {
    e.preventDefault();
    switch (Type) {
      case 'person':
        let inputDataPerson = {
          Nam: currentUser.Nam,
          Prsnum: currentUser.Prsnum,
          NamKhanevadegi: currentUser.NamKhanevadegi,
          Moavenat: currentUser.Moavenat,
          Proj_Name: currentUser.Proj_Name,
          Sharh_Onvan: currentUser.Sharh_Onvan,
          NumBuild: currentUser.NumBuild,
        };

        // createorupdateContactToServer(inputDataPerson, Type);
        // setTel('');

        break;

      default:
        break;
    }
  };

  return (
    <div className='text-center'>
      <Header />

      <div
        className='modal fade bd-example-modal-lg2'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='myLargeModalLabel2'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl'>
          <div className='modal-content'>
            <div className='modal-header '>
              <div className='text-center w-100'>
                <h5 className='modal-title text-center' id='myLargeModalLabel2'>
                  &nbsp; ویرایش
                </h5>
              </div>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-group' style={{ direction: 'rtl' }}>
                  <div className='row'>
                    ویرایش
                    {/* {meetData ? <EditMeeting PrintId={rowId} /> : null} */}
                  </div>
                </div>
              </form>
            </div>

            <div className='text-center'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
                onClick={(e) => {}}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        // className='modal fade'
        className='modal fade bd-example-modal-lg1'
        tabIndex='-10'
        role='dialog'
        aria-labelledby='myLargeModalLabel10'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-header '>
              <div className='text-center w-100'>
                <h5
                  className='modal-title text-center'
                  id='exampleModalLabel10'
                >
                  &nbsp; مشاهده
                </h5>
              </div>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-group' style={{ direction: 'rtl' }}>
                  <div className='row'>
                    <div className='col-4 text-right'>
                      <label className='col-form-label  '>
                        شماره پرسنلی:
                        <span className='h7 font-weight-bold '>
                          {participatorData ? participatorData.Prsnum : null}
                        </span>
                      </label>
                    </div>

                    <div className='col-4 text-right'>
                      <label className='d-block'>
                        نام:
                        <span className='h7 font-weight-bold '>
                          {participatorData ? participatorData.Nam : null}
                        </span>{' '}
                      </label>
                    </div>
                    <div className='col-4 text-right'>
                      <label className='d-block'>
                        نام خانوادگی:
                        <span className='h7 font-weight-bold'>
                          {participatorData
                            ? participatorData.NamKhanevadegi
                            : null}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-4 text-right'>
                      <label className='col-form-label'>
                        سمت:
                        <span className='h7 font-weight-bold'>
                          {participatorData
                            ? participatorData.VahedSazmani
                            : null}
                        </span>
                      </label>
                    </div>
                    <div className='col-4 text-right'>
                      <label className='col-form-label'>
                        معاونت:
                        <span className='h7 font-weight-bold'>
                          {participatorData ? participatorData.Moavenat : null}
                        </span>
                      </label>
                    </div>
                    <div className='col-4 text-right'>
                      <label className='col-form-label'>
                        شماره موبایل:
                        <span className='h7 font-weight-bold'>
                          {participatorData
                            ? participatorData.MobileNumber
                            : null}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='text-center'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
                // onClick={changeStateByRefreshChild}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        // className='modal fade'
        className='modal fade bd-example-modal-lg'
        tabIndex='-2'
        role='dialog'
        aria-labelledby='myLargeModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-header '>
              <div className='text-center w-100'>
                <h5 className='modal-title text-center' id='myLargeModalLabel'>
                  &nbsp; مشاهده
                </h5>
              </div>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-group' style={{ direction: 'rtl' }}>
                  <div className='row'>
                    <div className='col-4 text-right'>
                      <label className='col-form-label  '>
                        شماره پرسنلی:
                        <span className='h7 font-weight-bold '>
                          {participatorData ? participatorData.Prsnum : null}
                        </span>
                      </label>
                    </div>

                    <div className='col-4 text-right'>
                      <label className='d-block'>
                        نام:
                        <span className='h7 font-weight-bold '>
                          {participatorData ? participatorData.Nam : null}
                        </span>{' '}
                      </label>
                    </div>
                    <div className='col-4 text-right'>
                      <label className='d-block'>
                        نام خانوادگی:
                        <span className='h7 font-weight-bold'>
                          {participatorData
                            ? participatorData.NamKhanevadegi
                            : null}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-4 text-right'>
                      <label className='col-form-label'>
                        سمت:
                        <span className='h7 font-weight-bold'>
                          {participatorData
                            ? participatorData.VahedSazmani
                            : null}
                        </span>
                      </label>
                    </div>
                    <div className='col-4 text-right'>
                      <label className='col-form-label'>
                        معاونت:
                        <span className='h7 font-weight-bold'>
                          {participatorData ? participatorData.Moavenat : null}
                        </span>
                      </label>
                    </div>
                    <div className='col-4 text-right'>
                      <label className='col-form-label'>
                        شماره موبایل:
                        <span className='h7 font-weight-bold'>
                          {participatorData
                            ? participatorData.MobileNumber
                            : null}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='text-center'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
                // onClick={changeStateByRefreshChild}
              >
                بستن
              </button>
              <button
                type='button'
                className='btn btn-primary'
                data-dismiss='modal'
                //  onClick={(e) => validateAndSend(e, 'Admin')}
              >
                ذخیره تغییرات
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='d-inline-block mt-5 mr-5 text-center w-100'>
        {(participatorList ? participatorList.length : -1) > 0 &&
        decodePrsCode !==
          'Invalid length htmlFor a Base-64 char array or string.' ? (
          <div className='rtl '>
            <ul
              className='nav nav-tabs nav-justified '
              style={{ direction: 'rtl' }}
              id='myTab'
              role='tablist'
            >
              <li className='nav-item '>
                <a
                  className='nav-link active'
                  id='home-tab'
                  data-toggle='tab'
                  href='#home'
                  role='tab'
                  aria-controls='home'
                  aria-selected='true'
                >
                  مشاهده
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  id='profile-tab'
                  data-toggle='tab'
                  href='#profile'
                  role='tab'
                  aria-controls='profile'
                  aria-selected='false'
                >
                  ثبت فرد جدید
                </a>
              </li>
            </ul>
            <div className='tab-content' id='myTabContent'>
              <div
                className='tab-pane fade show active'
                id='home'
                role='tabpanel'
                aria-labelledby='home-tab'
              >
                <CustomTable
                  columns={KartableColumns}
                  data={participatorList ? participatorList : []}
                />
              </div>

              <div
                className='tab-pane fade w-100'
                id='profile'
                role='tabpanel'
                aria-labelledby='profile-tab'
              >
                <div className='mt-5 ' style={{ width: '100vw' }}>
                  ایجاد فرم
                  {/* <CreateSummaryOfMeeting /> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <label></label>
        )}
      </div>
    </div>
  );
};

export default ParticipatorList;
