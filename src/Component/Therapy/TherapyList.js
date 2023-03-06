import React, { useMemo, useState, useContext, useEffect } from 'react';
import '../../css/Modal.css';
import CustomTable from '../Common/CustomTable';
import { TherapyColumns, SubTitleColumnsForShow } from '../Common/Columns';
import MeetingContext from '../../Context/meetingContext';
import Header from '../Header';
import CreateSummaryOfMeeting from '../CreateSummaryOfMeeting';
// import PrintPdf from '../Print/PrintPdf';
import EditMeeting from '../EditMeeting';
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar';

const TherapyList = (props) => {
  const meetingContext = useContext(MeetingContext);
  const [selectedRow, setSelectedRow] = useState('');
  const [DirectPhoneNo, setDirectPhoneNo] = useState('');
  const [Tel, setTel] = useState('');
  const [rowId, setrowId] = useState(null);

  const [isChangeTel, setIsChangeTel] = useState(false);
  const [isChangeDirectPhone, setIsChangeDirectPhone] = useState(false);

  const {
    GetMeetingList,
    GetTherapyPersonList,
    meetinglist,
    decodePrsCode,
    currentUser,
    GetMeetingById,
    therapyPersonList,
    SetSelectedPersonData,
    meetData,
  } = meetingContext;
  let history = useHistory();
  useEffect(() => {
    GetTherapyPersonList();
  }, []);

  const setSelectedRowData = (row) => {
    // GetMeetingById(row.original.Id);
    // setrowId(null);
    // setrowId(row.original.Id);
    // console.log('selected data is :', row.original);
    SetSelectedPersonData(row.original);
    history.push('/SpecificPerson?Prsnum=' + row.original.Prsnum);
  };

  const kartableActionsAdmin = {
    Header: 'عملیات',
    columns: [
      {
        Header: '.',
        Cell: ({ row }) => (
          <div className="Operations">
            {/* <NavLink to="/SpecificPerson">مشاهده</NavLink> */}
            <button
              type="button"
              id="View"
              className="editBtn"
              data-toggle="modal"
              data-target=".bd-example-modal-lg1"
              onClick={(e) => {
                setTel('');
                setSelectedRowData(row);
              }}
            >
              مشاهده
            </button>
            {/* <button
              type="button"
              id="Print"
              className="editBtn"
              data-toggle="modal"
              data-target=".bd-example-modal-lg2"
              onClick={(e) => {
                // setTel('');
                setSelectedRowData(row);
              }}
            >
              ویرایش
            </button>
            <button
              type="button"
              id="Print"
              className="editBtn"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
              onClick={(e) => {
                setTel('');
                console.log('row clicked:', row.original.Id);
                let Id = row.original.Id;
                setrowId(Id);
              }}
            >
              چاپ
            </button> */}
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
          <div className="Operations" style={{ height: '35px' }}>
            {' '}
          </div>
        ),
      },
    ],
  };
  const KartableColumns = useMemo(() => [kartableActions, TherapyColumns], []);
  const KartableColumnsForAdmin = useMemo(
    () => [kartableActionsAdmin, TherapyColumns],

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
    <div className="text-center">
      <Navbar />
      <div style={{ margin: '10em' }}>
        <CustomTable
          columns={KartableColumnsForAdmin}
          data={therapyPersonList ? therapyPersonList : []}
        />
      </div>
    </div>
  );
};

export default TherapyList;
