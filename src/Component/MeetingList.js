import React, { useMemo, useState, useContext, useEffect } from 'react';
import '../css/Modal.css';
import CustomTable from './Common/CustomTable';
import { TitleColumns, SubTitleColumnsForShow } from './Common/Columns';
import MeetingContext from '../Context/meetingContext';
import Header from './Header';
import CreateSummaryOfMeeting from './CreateSummaryOfMeeting';
// import PrintPdf from './Print/PrintPdf';
import EditMeeting from './EditMeeting';

const MeetingList = (props) => {
  const meetingContext = useContext(MeetingContext);
  const [selectedRow, setSelectedRow] = useState('');
  const [DirectPhoneNo, setDirectPhoneNo] = useState('');
  const [Tel, setTel] = useState('');
  const [rowId, setrowId] = useState(null);

  const [isChangeTel, setIsChangeTel] = useState(false);
  const [isChangeDirectPhone, setIsChangeDirectPhone] = useState(false);

  const {
    GetMeetingList,
    meetinglist,
    decodePrsCode,
    currentUser,
    GetMeetingById,
    meetData,
  } = meetingContext;
  useEffect(() => {
    GetMeetingList();
  }, []);

  const setSelectedRowData = (row) => {
    GetMeetingById(row.original.Id);
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
                setTel('');
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
                setTel('');
                console.log('row clicked:', row.original.Id);
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
  const KartableColumns = useMemo(() => [kartableActions, TitleColumns], []);
  const KartableColumnsForAdmin = useMemo(
    () => [kartableActionsAdmin, TitleColumns],

    []
  );

  const SubTitleCol = useMemo(
    () => [SubTitleColumnsForShow],

    []
  );
  const onChanged = (e, Type, maxNum) => {
    switch (Type) {
      case 'Tel':
        // setShowError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setIsChangeTel(true);
        setTel(e.target.value);
        break;
      case 'DirectPhoneNo':
        // setShowError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setIsChangeDirectPhone(true);
        setDirectPhoneNo(e.target.value);
        break;
      default:
        break;
    }
  };

  const createorupdateContactToServer = async (frmData, Type) => {
    switch (Type) {
      case 'Admin':
        //  await createOrUpdateContact(frmData);

        break;
      case 'person':
        //  var pc = qs.parse(props.location.search);
        //console.log(pc.pc);
        // await createOrUpdateContact(frmData, pc.pc);
        // GetDecodePrsCode(pc.pc);
        break;

      default:
        break;
    }
  };

  const changeStateByRefreshChild = () => {
    setTel('');
    setDirectPhoneNo('');
    GetMeetingList();
    //GetContactByPrsNum(selectedRow.Prsnum);
    setSelectedRow('');
    setIsChangeDirectPhone(false);
    setIsChangeTel(false);
  };

  const validateAndSend = async (e, Type) => {
    e.preventDefault();
    switch (Type) {
      case 'person':
        let inputDataPerson = {
          DirectPhoneNo: isChangeDirectPhone
            ? DirectPhoneNo
            : currentUser.DirectPhoneNo,
          Tel: isChangeTel ? Tel : currentUser.Tel,
          // DirectPhoneNo: DirectPhoneNo,
          // Tel: Tel,
          Nam: currentUser.Nam,
          Prsnum: currentUser.Prsnum,
          NamKhanevadegi: currentUser.NamKhanevadegi,
          Moavenat: currentUser.Moavenat,
          Proj_Name: currentUser.Proj_Name,
          Sharh_Onvan: currentUser.Sharh_Onvan,
          NumBuild: currentUser.NumBuild,
        };

        createorupdateContactToServer(inputDataPerson, Type);
        setTel('');
        setDirectPhoneNo('');
        setIsChangeDirectPhone(false);
        setIsChangeTel(false);
        break;
      case 'Admin':
        let inputData = {
          DirectPhoneNo: isChangeDirectPhone
            ? DirectPhoneNo
            : selectedRow.DirectPhoneNo,
          Tel: isChangeTel ? Tel : selectedRow.Tel,
          Nam: selectedRow.Nam,
          Prsnum: selectedRow.Prsnum,
          NamKhanevadegi: selectedRow.NamKhanevadegi,
          Moavenat: selectedRow.Moavenat,
          Proj_Name: selectedRow.Proj_Name,
          Sharh_Onvan: selectedRow.Sharh_Onvan,
          NumBuild: selectedRow.NumBuild,
        };

        createorupdateContactToServer(inputData, Type);
        setTel('');
        setDirectPhoneNo('');
        setSelectedRow('');
        setIsChangeDirectPhone(false);
        setIsChangeTel(false);

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
                    {meetData ? <EditMeeting PrintId={rowId} /> : null}
                  </div>
                </div>
              </form>
            </div>

            <div className='text-center'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
                onClick={(e) => { }}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal fade bd-example-modal-lg'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='myLargeModalLabel2'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-header '>
              <div className='text-center w-100'>
                <h5 className='modal-title text-center' id='myLargeModalLabel2'>
                  &nbsp; چاپ
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
                    {/* {rowId && <PrintPdf PrintId={rowId} />} */}
                  </div>
                </div>
              </form>
            </div>

            <div className='text-center'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
                onClick={(e) => { }}
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
                        شماره جلسه:
                        <span className='h7 font-weight-bold '>
                          {meetData ? meetData[0].Id : null}
                        </span>
                      </label>
                    </div>

                    <div className='col-4 text-right'>
                      <label className='d-block'>
                        عنوان جلسه:
                        <span className='h7 font-weight-bold '>
                          {meetData ? meetData[0].Title : null}
                        </span>{' '}
                      </label>
                    </div>
                    <div className='col-4 text-right'>
                      <label className='d-block'>
                        تاریخ جلسه:
                        <span className='h7 font-weight-bold'>
                          {meetData ? meetData[0].MeetingDateStr : null}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-4 text-right'>
                      <label className='col-form-label'>
                        شرکت کنندگان:
                        <span className='h7 font-weight-bold'>
                          {meetData ? meetData[0].InnerParticipators : null}
                        </span>
                      </label>
                    </div>
                    <div className='col-4 text-right'>
                      <label className='col-form-label'>
                        محل تشکیل:
                        <span className='h7 font-weight-bold'>
                          {meetData ? meetData[0].Location : null}
                        </span>
                      </label>
                    </div>
                    <div className='col-4 text-right'>
                      {/* {meetData ? <PrintPdf /> : null} */}
                    </div>
                  </div>
                </div>
                <div style={{ boxSizing: 'border-box' }}>
                  <CustomTable
                    columns={SubTitleCol}
                    data={meetData ? meetData[0].lstSubjects : []}
                  //{meetinglist ? meetinglist : []}
                  />
                </div>
              </form>
            </div>
            <div className='text-center'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
                onClick={changeStateByRefreshChild}
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
                        شماره جلسه:
                        <span className='h7 font-weight-bold '>
                          {meetData ? meetData[0].Id : null}
                        </span>
                      </label>
                    </div>

                    <div className='col-4 text-right'>
                      <label className='d-block'>
                        عنوان جلسه:
                        <span className='h7 font-weight-bold '>
                          {meetData ? meetData[0].Title : null}
                        </span>{' '}
                      </label>
                    </div>
                    <div className='col-4 text-right'>
                      <label className='d-block'>
                        تاریخ جلسه:
                        <span className='h7 font-weight-bold'>
                          {meetData ? meetData[0].MeetingDateStr : null}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-4 text-right'>
                      <label className='col-form-label'>
                        شرکت کنندگان:
                        <span className='h7 font-weight-bold'>
                          {meetData ? meetData[0].InnerParticipators : null}
                        </span>
                      </label>
                    </div>
                    <div className='col-4 text-right'>
                      <label className='col-form-label'>
                        محل تشکیل:
                        <span className='h7 font-weight-bold'>
                          {meetData ? meetData[0].Location : null}
                        </span>
                      </label>
                    </div>
                    <div className='col-4 text-right'>
                      {/* {meetData ? <PrintPdf /> : null} */}
                    </div>
                  </div>
                </div>
                <div style={{ boxSizing: 'border-box' }}>
                  <CustomTable
                    columns={SubTitleCol}
                    data={meetData ? meetData[0].lstSubjects : []}
                  //{meetinglist ? meetinglist : []}
                  />
                </div>
              </form>
            </div>
            <div className='text-center'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
                onClick={changeStateByRefreshChild}
              >
                بستن
              </button>
              <button
                type='button'
                className='btn btn-primary'
                data-dismiss='modal'
                onClick={(e) => validateAndSend(e, 'Admin')}
              >
                ذخیره تغییرات
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='d-inline-block mt-5 mr-5 text-center w-100'>
        {meetinglist.length > 0 &&
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
                  ایجاد صورتجلسه
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
                  columns={KartableColumnsForAdmin}
                  data={meetinglist ? meetinglist : []}
                />
              </div>

              <div
                className='tab-pane fade w-100'
                id='profile'
                role='tabpanel'
                aria-labelledby='profile-tab'
              >
                <div className='mt-5 ' style={{ width: '100vw' }}>
                  {/* <NavLink to='/CreateForm'>ایجاد یک صورتجلسه</NavLink> */}
                  <CreateSummaryOfMeeting />
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

export default MeetingList;
