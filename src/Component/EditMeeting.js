import React, { useMemo, useState, useContext, useEffect } from 'react';
// import { Calendar, DatePicker } from 'react-persian-datepicker';
import CustomTable from './Common/CustomTable';
import MeetingContext from '../Context/meetingContext';
import { SubTitleColumns } from './Common/Columns';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import '../css/KiarashDatePicker/responsiveDatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import { utils } from 'react-modern-calendar-datepicker';
import Multi from './Common/Multy';
import swal from 'sweetalert';

const EditMeeting = () => {
  const [meetingDate, setMeetingDate] = useState(null);
  const [Titel, setTitle] = useState(null);
  const [MeetingNumber, setMeetingNumber] = useState(null);
  const [MeetingSubTitleNumber, setMeetingSubTitleNumber] = useState(null);
  const [InnerParticipator, setInnerParticipator] = useState(null);
  const [Location, setLocation] = useState(null);

  const [endDate, setEndDate] = useState(null);
  const [file, setFile] = useState(null);

  const [endDateEdit, setEndDateEdit] = useState(null);
  const [selectedRow, setSelectedRow] = useState('');
  const [showData, setShowData] = useState(true);
  const [meetingSubTitle, setMeetingSubTitle] = useState('');
  const [id, setId] = useState(null);
  const [tracingResponsible, setTracingResponsible] = useState('');
  const [subjectEdit, setSubjectEdit] = useState('');
  const [tracingResponsibleEdit, setTracingResponsibleEdit] = useState('');
  const [showListSubjects, setshowListSubjects] = useState(null);
  const [contactlist, setContactList] = useState([]); // eslint-disable-next-line
  const persianToday = utils('fa').getToday(); // { year: 1399, month: 11, day: 9 }

  const meetingContext = useContext(MeetingContext);

  const {
    createOrUpdateMeeting,

    meetData,
    GetPersonList,
    personList,
    showPersonMulti,
    // error,
  } = meetingContext;
  // eslint-disable-next-line

  useEffect(() => {
    try {
      //GetPersonList();
      setshowListSubjects(false);
      if (meetData) setTitle(meetData[0].Title);
      if (meetData) setMeetingNumber(meetData[0].MeetingNumber);
      if (meetData) setLocation(meetData[0].Location);
      console.log('lstParticipators', meetData[0].lstParticipators);

      setTimeout(() => {
        console.log('contactList', contactlist);
        if (meetData) {
          console.log('lstSubjects', meetData[0].lstSubjects);
          setshowListSubjects(true);
          setContactList(meetData[0].lstSubjects);
        }
      }, 100);
    } catch (error) {}
  }, []);

  const setSelectedRowData = (row) => {
    setSelectedRow(row.original);
    // console.log(row.original);
    if (row.original.DirectPhoneNo) {
      // setDirectPhoneNo(row.original.DirectPhoneNo);
    }
    if (row.original.Tel) {
      // setTel(row.original.Tel);
    }
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
              className='editBtn'
              data-toggle='modal'
              data-target='#modal1-1'
              onClick={(e) => {
                console.log('rowdata is:', row);
                setSubjectEdit(row.original.Subject);
                setEndDateEdit(row.original.endDate);
                setTracingResponsibleEdit(row.original.tracingResponsible);
                setId(row.original.id);
              }}
            >
              ویرایش
            </button>
            <button
              type='button'
              className='editBtn'
              onClick={(e) => {
                console.log('row.id', row.id, row);
                let filterList = contactlist.filter(
                  (o) => o.id !== row.original.id
                );
                console.log('filterData', filterList);
                setTimeout(() => {
                  setShowData(false);
                  setContactList(filterList);
                }, 1);
                setTimeout(() => {
                  if (contactlist.length > 0) {
                    setShowData(true);
                  } else {
                    setShowData(false);
                  }
                }, 2);
                // setSelectedRowData(row);
              }}
            >
              حذف
            </button>
          </div>
        ),
      },
    ],
  };
  const KartableColumns = useMemo(
    () => [kartableActionsAdmin, SubTitleColumns], // eslint-disable-next-line
    []
  );

  const validateAndSend = async (e) => {
    console.log('submit button clicked');
    e.preventDefault();

    let inputData = {
      Title: Titel,
      MeetingNumber: MeetingNumber,
      InnerParticipators: InnerParticipator,
      //OuterParticipators: OuterParticipator,
      Location: Location,
      file: file,
      MeetingDateStr:
        meetingDate.year + '/' + meetingDate.month + '/' + meetingDate.day,
      lstSubjects: contactlist,
    };

    // const formData = new FormData();
    // formData.append('file', file);
    console.log('inputdata', inputData);
    createOrUpdateMeeting(inputData);
    if (
      Titel &&
      MeetingNumber &&
      InnerParticipator &&
      Location &&
      meetingDate &&
      contactlist &&
      file
    ) {
      if (
        //contactlist.length > 0 &&
        Titel.length > 1 //&&
        //MeetingNumber.length > 1 &&
        // InnerParticipator.length > 1 &&
        //  Location.length > 1
      ) {
        // console.log('inputdata', inputData);
        // createOrUpdateMeeting(inputData);
      }
    } else {
      // if (organization === null || organization === '') {
      //   setisShowOrganizationError(true);
      // }
      // if (position === null || position === '') {
      //   setisShowPositionError(true);
      // }
      // if (code === null || code === '') {
      //   setisShowCodeError(true);
      // }
      // if (letterNo === null || letterNo === '') {
      //   setisShowLetterNoError(true);
      // }
      // if (subject === null || subject === '') {
      //   setisShowSubjectError(true);
      // }
      // if (reciever === null || reciever === '') {
      //   setisShowRecieverError(true);
      // }
      // if (department === null || department === '') {
      //   setisShowDepartmentError(true);
      // }
    }
  };
  const onChanged = (e, Type, maxNum) => {
    switch (Type) {
      case 'Image':
        setFile(e.target.files[0]);
        break;
      case 'meetingSubTitleNumber':
        // setShowError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        //  setIsChangeTel(true);
        setMeetingSubTitleNumber(e.target.value);
        break;
      case 'tracingResponsible':
        // setShowError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        //  setIsChangeTel(true);
        setTracingResponsible(e.target.value);
        break;
      case 'tracingResponsibleEdit':
        // setShowError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        //  setIsChangeTel(true);
        setTracingResponsibleEdit(e.target.value);
        break;
      case 'subjectEdit':
        // setShowError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        //  setIsChangeTel(true);
        setSubjectEdit(e.target.value);
        break;
      case 'endDateEdit':
        setEndDateEdit(e.target.value);
        break;
      case 'meetingSubTitle':
        // setShowError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        // setIsChangeDirectPhone(true);
        setMeetingSubTitle(e.target.value);
        break;
      case 'Titel':
        // setShowError(false);
        console.log('title cahnged');
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        // setIsChangeDirectPhone(true);
        setTitle(e.target.value);
        break;
      case 'MeetingNumber':
        // setShowError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        // setIsChangeDirectPhone(true);
        setMeetingNumber(e.target.value);
        break;
      case 'InnerParticipator':
        // setShowError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        // setIsChangeDirectPhone(true);
        setInnerParticipator(e.target.value);
        break;
      case 'Location':
        // setShowError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        // setIsChangeDirectPhone(true);
        setLocation(e.target.value);
        break;

      default:
        break;
    }
  };

  const insertToSubjects = async () => {
    setTimeout(() => {
      setShowData(false);
    }, 1);
    let subjects = contactlist;
    let subjectOfMeeting = {
      Subject: meetingSubTitle,
      tracingResponsible: tracingResponsible,
      endDateStr: endDate.year + '/' + endDate.month + '/' + endDate.day,
      id: contactlist.length + 1,
      SubjectNumber: MeetingSubTitleNumber,
    };
    subjects.push(subjectOfMeeting);
    setContactList(subjects);
    setEndDate(null);
    setMeetingSubTitle('');
    setTracingResponsible('');

    if (contactlist.length > 0) {
      setTimeout(() => {
        console.log('showdata is :', showData);
        setShowData(true);
      }, 1);
    } else {
      setTimeout(() => {
        console.log('showdata is :', showData);
        setShowData(false);
      }, 1);
    }
    console.log(contactlist);
  };
  const updateItemInList = async () => {
    setTimeout(() => {
      setShowData(false);
    }, 1);
    let updateSubject = contactlist.filter((o) => {
      return o.id === id;
    });
    if (updateSubject != null && updateSubject.length > 0) {
      updateSubject[0].Subject = subjectEdit;
      updateSubject[0].tracingResponsible = tracingResponsibleEdit;
      updateSubject[0].endDate = endDateEdit;
    }
    console.log('updateSubject', updateSubject);

    setEndDateEdit(null);
    setTracingResponsibleEdit('');
    setSubjectEdit('');

    if (contactlist.length > 0) {
      setTimeout(() => {
        setShowData(true);
      }, 1);
    } else {
      setTimeout(() => {
        setShowData(false);
      }, 1);
    }
    console.log(contactlist);
  };

  return (
    <div>
      <div
        className='modal fade modal21'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='myLargeModalLabel'
        aria-hidden='true'
        id='modal1-1'
      >
        <div className='modal-dialog modal-xl'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>ویرایش</h5>
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
                <div className='form-group'>
                  <label className='col-form-label'></label>
                  موضوع
                  <input
                    type='text'
                    value={subjectEdit ? subjectEdit : ''}
                    onChange={(e) => {
                      onChanged(e, 'subjectEdit', 900);
                    }}
                    className='text-center form-control'
                    id='recipient-name'
                  />
                  {/* {showdpError && <label key='9'>*</label>} */}
                </div>
                <div className='form-group'>
                  <label htmlFor='message-text' className='col-form-label'>
                    مسوول پیگیری
                  </label>
                  <input
                    type='text'
                    value={tracingResponsibleEdit ? tracingResponsibleEdit : ''}
                    onChange={(e) => {
                      onChanged(e, 'tracingResponsibleEdit', 900);
                    }}
                    className='text-center form-control'
                  />
                  <Multi />
                  {/* {showtelError && <label key='9'>*</label>} */}
                </div>
                <div className='form-group'>
                  <label htmlFor='message-text' className='col-form-label'>
                    مهلت انجام
                  </label>
                  <input
                    type='text'
                    value={endDateEdit ? endDateEdit : ''}
                    onChange={(e) => {
                      onChanged(e, 'endDateEdit', 900);
                    }}
                    className='text-center form-control'
                  />
                  {/* {showtelError && <label key='9'>*</label>} */}
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
                onClick={(e) => updateItemInList(e)}
              >
                ذخیره تغییرات
              </button>
            </div>
          </div>
        </div>
      </div>

      <form>
        <div className='form-row mb-3' style={{ direction: 'rtl' }}>
          <label
            htmlFor='participators'
            className='col-12 col-form-label text-center font-weight-bold'
          >
            صورتجلسه
          </label>
        </div>
        <div className='form-row' style={{ direction: 'rtl' }}>
          <div className='col-2 text-nowrap'>
            <div>
              <label htmlFor='meetingTitle' className='col-form-label'>
                عنوان جلسه:
              </label>
            </div>
            <div className='mr-2'>
              <input
                type='text'
                className='form-control'
                id='meetingTitle'
                value={Titel}
                onChange={(e) => {
                  onChanged(e, 'Titel', 900);
                }}
              />
            </div>
          </div>
          <div className='col-2 text-nowrap'>
            <div>
              <label htmlFor='meetingTitle' className='col-form-label'>
                شماره جلسه:
              </label>
            </div>
            <div className='mr-2'>
              <input
                type='text'
                className='form-control'
                id='meetingNumber'
                value={MeetingNumber}
                onChange={(e) => {
                  onChanged(e, 'MeetingNumber', 900);
                }}
              />
            </div>
          </div>
          <div className='col-2 text-nowrap'>
            <div>
              <label htmlFor='meetingTitle' className='col-form-label'>
                تاریخ:
              </label>
            </div>
            <div className='mr-2'>
              <DatePicker
                calendarClassName='responsive-calendar' // added this MeetingDateStr
                value={meetingDate}
                onChange={setMeetingDate}
                inputPlaceholder='تاریخ را انتخاب نمایید'
                shouldHighlightWeekends
                locale='fa' // add this
              />
            </div>
          </div>
          <div className='col-2 text-nowrap'>
            <div>
              <label htmlFor='meetingTitle' className='col-form-label'>
                محل تشکیل جلسه:
              </label>
            </div>
            <div className='mr-2'>
              <input
                type='text'
                className='form-control '
                id='meetingLocation'
                value={Location}
                onChange={(e) => {
                  onChanged(e, 'Location', 900);
                }}
              />
            </div>
          </div>
          <div className='col-4 text-nowrap'>
            <div>
              <label htmlFor='meetingTitle' className='col-form-label'>
                بارگزاری فایل جلسه:
              </label>
            </div>
            <div className='mr-2'>
              <input
                className='mt-2'
                id='fileupload'
                name='myfile'
                type='file'
                onChange={(e) => {
                  onChanged(e, 'Image', 900);
                }}
              />
            </div>
          </div>
        </div>

        <div className='form-row mt-2' style={{ direction: 'rtl' }}>
          <label htmlFor='participators' className='col-1 col-form-label'>
            شرکت کنندگان:
          </label>
          <div className='col-8'>
            <input
              type='text'
              className='form-control'
              id='participators'
              value={
                InnerParticipator
                  ? Multi.value
                  : meetData
                  ? meetData[0].InnerParticipators
                  : null
              }
              onChange={(e) => {
                onChanged(e, 'InnerParticipator', 900);
              }}
            />
            {showPersonMulti ? (
              <Multi
                selectedParticipators={
                  meetData ? meetData[0].lstParticipators : []
                }
              />
            ) : null}
          </div>
        </div>
        <div className='form-row mt-2    ' style={{ direction: 'rtl' }}>
          <label
            htmlFor='participators'
            className='col-12 col-form-label text-center font-weight-bold'
          >
            موضوعات مطرح شده در جلسه
          </label>
        </div>
        <div className='form-row' style={{ direction: 'rtl' }}>
          <div className='col-2'>
            <div>
              <label htmlFor='meetingTitle' className='col-form-label'>
                بند جلسه:
              </label>
            </div>
            <div className='mr-2'>
              <input
                type='text'
                className='form-control'
                id='meetingSubTitleNumber'
                value={MeetingSubTitleNumber}
                onChange={(e) => onChanged(e, 'meetingSubTitleNumber', 20)}
                // placeholder='عنوان جلسه'
              />
            </div>
          </div>

          <div className='col-5'>
            <div>
              <label
                htmlFor='meetingTitle'
                className='col-1 col-form-label forLable'
              >
                موضوع:
              </label>
            </div>
            <div>
              <input
                type='text'
                className='form-control'
                id='meetingSubTitle'
                value={meetingSubTitle}
                onChange={(e) => onChanged(e, 'meetingSubTitle', 900)}
                // placeholder='عنوان جلسه'
              />
            </div>
          </div>

          <div className='col-2'>
            <div>
              <label htmlFor='meetingNumber' className='col-form-label'>
                مسوول پیگیری:
              </label>
            </div>
            <div>
              <input
                type='text'
                className='form-control'
                id='tracingResponsible'
                value={Multi.value}
                onChange={(e) => onChanged(e, 'tracingResponsible', 900)}
                // placeholder='شماره جلسه'
              />
              {/* {showPersonMulti ? <Multi /> : null} */}
            </div>
          </div>

          <div className='col-2 text-right text-nowrap'>
            <div>
              <label
                htmlFor='inputPassword4'
                className='col-1 col-form-label forLable text-left '
              >
                مهلت انجام:
              </label>
            </div>
            <div>
              <DatePicker
                calendarClassName='responsive-calendar' // added this
                value={endDate}
                onChange={setEndDate}
                inputPlaceholder='تاریخ را انتخاب نمایید'
                shouldHighlightWeekends
                locale='fa' // add this
              />
            </div>
          </div>
          <div className='col-1 Vertical-center'>
            <button
              type='button'
              onClick={insertToSubjects}
              className='btn btn-dark'
            >
              ثبت
            </button>
          </div>
        </div>
        <div className='form-row m-3' style={{ direction: 'rtl' }}>
          {showData && (
            <CustomTable columns={KartableColumns} data={contactlist} />
          )}
        </div>
        <div className='form-row mr-2' style={{ direction: 'rtl' }}>
          <button
            type='submit'
            className='btn btn-info mt-2 ml-3 w-75'
            onClick={(e) => {
              validateAndSend(e);
              swal('ثبت شد با موفقیت');
            }}
          >
            ثبت
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMeeting;
