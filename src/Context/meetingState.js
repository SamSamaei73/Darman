import React, { useReducer } from 'react';
import MeetingContext from './meetingContext';
import MeetingReducer from './meetingReducer';

//import { encode, decode } from 'js-base64';

import axios from 'axios';
import { SERVER_URL } from '../Constant/constant';
import {
  GET_MEETING_LIST_SUCCESS,
  GET_MEETING_LIST_FAIL,
  CREATE_OR_UPDATE_MEETING_SUCCESS,
  CREATE_OR_UPDATE_MEETING_FAIL,
  SET_CREATE_MEETING_TO_NULL,
  SET_SHOW_MODAL,
  SET_SHOW_LOADER,
  GET_MEETING_BY_ID_FAIL,
  GET_MEETING_BY_ID_SUCCESS,
  GET_CONTACT_DECODE_FAIL,
  GET_CONTACT_DECODE_SUCCESS,
  GET_PERSONS_LIST_SUCCESS,
  GET_PERSONS_LIST_FAIL,
  GET_SEARCH_PERSON_BY_INPUT_VALUE_FAIL,
  GET_SEARCH_PERSON_BY_INPUT_VALUE_SUCCESS,
  SET_MEETING_DATA_TO_NULL,
  GET_PARTICIPATOR_LIST_SUCCESS,
  GET_PARTICIPATOR_LIST_FAIL,
  GET_PARTICIPATOR_BY_ID_SUCCESS,
  GET_PARTICIPATOR_BY_ID_FAIL,
  SET_PARTICIPATOR_DATA_TO_NULL,
  GET_THERAPY_PERSONS_LIST_SUCCESS,
  GET_THERAPY_PERSONS_LIST_FAIL,
  SET_SELECTED_PERSON_DATA,
  GET_INSURANCE_LIST_SUCCESS,
  GET_INSURANCE_LIST_FAIL,
  GET_CONTRACT_LIST_SUCCESS,
  GET_CONTRACT_LIST_FAIL,
  GET_SPECIFIC_PERSON_WITH_CONTRACTS_SUCCESS,
  GET_SPECIFIC_PERSON_WITH_CONTRACTS_FAIL,
  SET_SPECIFIC_PERSON_WITH_CONTRACT_DATA,
  GET_HEALTH_RECIPES_LIST_SUCCESS,
  GET_HEALTH_RECIPES_LIST_FAIL,
  GET_PACKET_LIST_SUCCESS,
  GET_PACKET_LIST_FAIL,
  GET_HEALTH_RECIPES_BY_CONTRACTS_LIST_FAIL,
  GET_HEALTH_RECIPES_BY_CONTRACTS_LIST_SUCCESS,
  CREATE_RECIPIE_SUCCESS,
  CREATE_RECIPIE_FAIL,
  GET_ALL_RELATIVE_LIST_FAIL,
  GET_ALL_RELATIVE_LIST_SUCCESS,
  CREATE_INSURANCE_PROCESS_FAIL,
  CREATE_INSURANCE_PROCESS_SUCCESS,
  DELETE_RECIPIE_SUCCESS,
  DELETE_RECIPIE_FAIL,
  UPDATE_HEALTH_SHOPARBACH_SUCCESS,
  UPDATE_HEALTH_SHOPARBACH_FAIL,
  CREATE_HEALTH_SHOPARBACH_SUCCESS,
  CREATE_HEALTH_SHOPARBACH_FAIL,
  DELETE_HEALTH_SHOPARBACH_SUCCESS,
  DELETE_HEALTH_SHOPARBACH_FAIL,
  CREATE_HEALTHCONTRACT_SUCCESS,
  UPDATE_HEALTHCONTRACT_SUCCESS,
  CREATE_HEALTHCONTRACT_FAIL,
  DELETE_HEALTH_CONTRACT_SUCCESS,
  DELETE_HEALTH_CONTRACT_FAIL,
  GET_PACKET_IS_OPEN_LIST_SUCCESS,
  GET_PACKET_IS_OPEN_LIST_FAIL,
  GET_RECIPE_PROPS_BY_CONTRACTNO_FAIL,
  GET_RECIPE_PROPS_BY_CONTRACTNO_SUCCESS,
  UPDATE_HEALTHVISIT_SUCCESS,
  CREATE_HEALTHVISIT_FAIL,
  CREATE_HEALTHVISIT_SUCCESS,
  DELETE_HEALTH_VISIT_BY_ID_SUCCESS,
  DELETE_HEALTH_VISIT_BY_ID_FAIL,
  GET_PACKET_DATA_SUCCESS,
  GET_PACKET_DATA_FAIL,
  GET_HEALTH_RECIPIES_BY_PRSNUMBER_DATA_FAIL,
  GET_HEALTH_RECIPIES_BY_PRSNUMBER_DATA_SUCCESS,
  GET_DECODE_PRSCODE_FOR_THERAPY_SUCCESS,
  GET_DECODE_PRSCODE_FOR_THERAPY_FAIL,
  GET_ALL_PERSONS_LIST_SUCCESS,
  GET_ALL_PERSONS_LIST_FAIL,
  GET_AELEMANDI_SUCCESS,
  GET_AELEMANDI_FAIL,

} from './types';

const MeetingState = (props) => {
  const initialState = {
    error: null,
    createdorupdatedMeeting: null,
    showResult: false,
    meetinglist: [],
    meetData: null,
    showModal: null,
    showLoader: false,
    decodePrsCode: null,
    currentUser: null,
    isAdmin: false,
    personList: [],
    therapyPersonList: [],
    showPersonMulti: false,
    participatorlist: [],
    participatorData: null,
    selectedPersonData: null,
    insuranceListData: [],
    insuranceLoading: true,
    contractListData: [],
    specificPersonWithContracts: null,
    healathRecipesListData: [],
    packetListData: [],
    packetIsOpenListData: [],
    recepiesKindListData: [],
    createRecipieData: null,
    allRelativeListData: null,
    createdInsuranceProcess: null,
    deletedRecipieKindData: null,
    createdOrUpdatedHealthShoParBachData: null,
    createdOrUpdatedHealthContractData: null,
    deletedHealthShoParBachData: null,
    deletedHealthContractData: null,
    recipePropByContractNoData: null,
    createdOrUpdatedHealthVisitData: null,
    deleteHealthVisitByIdData: null,
    packetDataList: [],
    healthRecipiesByPrsNumberData: [],
    decodePrsCodeForTherapyData: null,
    allPersonListData: [],
    aelemandiDataPerson: [],




  };

  const [state, dispatch] = useReducer(MeetingReducer, initialState);

  const SetSpecificPersonWithContractData = (data) => {
    dispatch({
      type: SET_SPECIFIC_PERSON_WITH_CONTRACT_DATA,
      payload: data,
    });
  };
  const SetSelectedPersonData = (data) => {
    dispatch({
      type: SET_SELECTED_PERSON_DATA,
      payload: data,
    });
  };
  const DeleteHealthVisitById = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      var fm = new FormData();
      fm.append('ObjectId', formData);


      const res = await axios.post(
        SERVER_URL + '/Therapy/DeleteHealthVisitById/',
        fm,
        config
      );

      dispatch({
        type: DELETE_HEALTH_VISIT_BY_ID_SUCCESS,
        payload: res.data,
      });

    } catch (err) {
      dispatch({
        type: DELETE_HEALTH_VISIT_BY_ID_FAIL,
        payload: err.response,
      });
    }
  };
  const DeleteRecipieKindById = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
console.log('Id',formData);
    try {
      var fm = new FormData();
      fm.append('HealthRecipieKindId', formData);


      const res = await axios.post(
        SERVER_URL + '/Therapy/DeleteRecipieKindById/',
        fm,
        config
      );

      dispatch({
        type: DELETE_RECIPIE_SUCCESS,
        payload: res.data,
      });

    } catch (err) {
      dispatch({
        type: DELETE_RECIPIE_FAIL,
        payload: err.response,
      });
    }
  };
  const DeleteHealthContractById = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      var fm = new FormData();
      fm.append('ObjectId', formData);


      const res = await axios.post(
        SERVER_URL + '/Therapy/DeleteHealthContractById/',
        fm,
        config
      );

      dispatch({
        type: DELETE_HEALTH_CONTRACT_SUCCESS,
        payload: res.data,
      });

    } catch (err) {
      dispatch({
        type: DELETE_HEALTH_CONTRACT_FAIL,
        payload: err.response,
      });
    }
  };
  const DeleteHealthShoParBachById = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      var fm = new FormData();
      fm.append('Id', formData);


      const res = await axios.post(
        SERVER_URL + '/Therapy/DeleteHealthShoParBachById/',
        fm,
        config
      );

      dispatch({
        type: DELETE_HEALTH_SHOPARBACH_SUCCESS,
        payload: res.data,
      });

    } catch (err) {
      dispatch({
        type: DELETE_HEALTH_SHOPARBACH_FAIL,
        payload: err.response,
      });
    }
  };
  const CreateOrUpdateHealthShoParBach = async (formData, update) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    console.log("vaziyatState", formData );
    try {
      var fm = new FormData();
      fm.append("Mah", formData.Mah);
      fm.append("MahBachNo", formData.MahBachNo);
      fm.append("ShomareParvande", formData.ShomareParvande);
      fm.append("ToBimeAvalie", formData.ToBimeAvalie);
      fm.append("VaziatBaste", formData.VaziatBaste);

      //  console.log('recipie  data is:', formData);
      if (update) {

        const res = await axios.post(
          SERVER_URL + "/Therapy/CreateOrUpdateHealthShoParBach/" + formData.Id,
          fm,
          config
        );

        dispatch({
          type: UPDATE_HEALTH_SHOPARBACH_SUCCESS,
          payload: res.data,
        });
      } else {
        const res = await axios.post(
          SERVER_URL + "/Therapy/CreateOrUpdateHealthShoParBach/0",
          fm,
          config
        );

        dispatch({
          type: CREATE_HEALTH_SHOPARBACH_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      if (update) {
        dispatch({
          type: UPDATE_HEALTH_SHOPARBACH_FAIL,
          payload: err.response,
        });
      } else {

        dispatch({
          type: CREATE_HEALTH_SHOPARBACH_FAIL,
          payload: err.response,
        });
      }
    }
  };
  const CreateOrUpdateHealthVisit = async (formData, update) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      var fm = new FormData();
      fm.append('BatchId', formData.BatchId);
      fm.append('PrsNum', formData.PrsNum);
      fm.append('PatientId', formData.PatientId);
      fm.append('RecipeDate', formData.RecipeDate);
      fm.append('RecipeMoney', formData.RecipeMoney);
      fm.append('RecipePropertiesId', formData.RecipePropertiesId);
      //fm.append('ContractId', formData.ContractId);
      fm.append('Franshiz', formData.Franshiz);
      fm.append('OutofContractMoney', formData.OutofContractMoney);
      fm.append('ApprovedMoney', formData.ApprovedMoney);
      fm.append('FinalCost', formData.FinalCost);
      fm.append('DeletedMoney', formData.DeletedMoney);
      fm.append('ContractId', formData.ContractId);


      //  console.log('recipie  data is:', formData);
      if (update) {
        const res = await axios.post(
          SERVER_URL + '/Therapy/CreateOrUpdateHealthVisit/' + formData.Id,
          fm,
          config
        );

        dispatch({
          type: UPDATE_HEALTHVISIT_SUCCESS,
          payload: res.data,
        });
      }
      else {

        const res = await axios.post(
          SERVER_URL + '/Therapy/CreateOrUpdateHealthVisit/0',
          fm,
          config
        );

        dispatch({
          type: CREATE_HEALTHVISIT_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: CREATE_HEALTHVISIT_FAIL,
        payload: err.response,
      });
    }
  };
  const CreateOrUpdateHealthContract = async (formData, update) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      var fm = new FormData();
      fm.append('ContractNo', formData.ContractNo);
      fm.append('Contractor', formData.Contractor);
      fm.append('ContractDateAsOf', formData.ContractDateAsOf);
      fm.append('ContractDateTill', formData.ContractDateTill);
      fm.append('ContractType', formData.ContractType);


      //  console.log('recipie  data is:', formData);
      if (update) {
        const res = await axios.post(
          SERVER_URL + '/Therapy/CreateOrUpdateHealthContract/' + formData.Id,
          fm,
          config
        );

        dispatch({
          type: UPDATE_HEALTHCONTRACT_SUCCESS,
          payload: res.data,
        });
      }
      else {

        const res = await axios.post(
          SERVER_URL + '/Therapy/CreateOrUpdateHealthContract/0',
          fm,
          config
        );

        dispatch({
          type: CREATE_HEALTHCONTRACT_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: CREATE_HEALTHCONTRACT_FAIL,
        payload: err.response,
      });
    }
  };
  const CreateOrUpdateRecipie = async (formData, update) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      var fm = new FormData();
      fm.append('RecipieDesc', formData.RecipieDesc);

      //  console.log('recipie  data is:', formData);
      if (update) {
        const res = await axios.post(
          SERVER_URL + '/Therapy/CreateOrUpdateRecipie/' + formData.Id,
          fm,
          config
        );

        dispatch({
          type: CREATE_RECIPIE_SUCCESS,
          payload: res.data,
        });
      }
      else {

        const res = await axios.post(
          SERVER_URL + '/Therapy/CreateOrUpdateRecipie/0',
          fm,
          config
        );

        dispatch({
          type: CREATE_RECIPIE_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: CREATE_RECIPIE_FAIL,
        payload: err.response,
      });
    }
  };
  const CreateInsuranceProcess = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      var fm = new FormData();
      fm.append('KindId', formData.KindId);
      fm.append('DoctorId', formData.DoctorId);
      fm.append('MaxMoney4Pay', formData.MaxMoney4Pay);
      fm.append('MinMoney4Pay', formData.MinMoney4Pay);
      fm.append('ContractId', formData.ContractId);
      fm.append('Franshiz', formData.Franshiz);
      fm.append('Kardex', formData.Kardex);
      fm.append('ChandNafar', formData.ChandNafar);

      console.log('insurance Process  data is:', formData);
      const res = await axios.post(
        SERVER_URL + '/Therapy/CreateInsuranceProcess/',
        fm,
        config
      );

      dispatch({
        type: CREATE_INSURANCE_PROCESS_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CREATE_INSURANCE_PROCESS_FAIL,
        payload: err.response,
      });
    }
  };
  const SetShowLoader = (data) => {
    dispatch({
      type: SET_SHOW_LOADER,
      payload: data,
    });
  };
  const setCreateMeetingToNull = () => {
    SetShowLoader(false);
    SetShowModal(false);
    dispatch({
      type: SET_CREATE_MEETING_TO_NULL,
      payload: null,
    });
  };
  const GetRelativeList = async () => {

    const config = {
      headers: {
        'Content-Type': 'application/json',

      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Therapy/GetAllRelative/',
        config
      );

      dispatch({
        type: GET_ALL_RELATIVE_LIST_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_ALL_RELATIVE_LIST_FAIL,
        payload: err.response,
      });
    }
  };
  const GetAllPersons = async () => {

    const config = {
      headers: {
        'Content-Type': 'application/json',

      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Therapy/GetAllPerson',
        config
      );

      dispatch({
        type: GET_ALL_PERSONS_LIST_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_ALL_PERSONS_LIST_FAIL,
        payload: err.response,
      });
    }
  };
  const GetPacketData = async (packetNumber) => {

    const config = {
      headers: {
        'Content-Type': 'application/json',

      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Therapy/GetPacketData/' + packetNumber,
        config
      );

      dispatch({
        type: GET_PACKET_DATA_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_PACKET_DATA_FAIL,
        payload: err.response,
      });
    }
  };
  const GetHealthRecipiesByPrsNumber = async (prsNumber) => {

    const config = {
      headers: {
        'Content-Type': 'application/json',

      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Therapy/GetHealthRecipiesByPrsNumber/' + prsNumber,
        config
      );

      dispatch({
        type: GET_HEALTH_RECIPIES_BY_PRSNUMBER_DATA_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_HEALTH_RECIPIES_BY_PRSNUMBER_DATA_FAIL,
        payload: err.response,
      });
    }
  };
  const GetHealthRecipesByContract = async (contractId) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'ContractId': contractId
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Therapy/GetHealthRecipesByContract/',
        config
      );

      dispatch({
        type: GET_HEALTH_RECIPES_BY_CONTRACTS_LIST_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_HEALTH_RECIPES_BY_CONTRACTS_LIST_FAIL,
        payload: err,
      });
    }
  };
  const GetHealthRecipes = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Therapy/GetHealthRecipes/',
        config
      );

      dispatch({
        type: GET_HEALTH_RECIPES_LIST_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_HEALTH_RECIPES_LIST_FAIL,
        payload: err,
      });
    }
  };
  const GetHealthContracts = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Therapy/GetAllContract/',
        config
      );
      console.log('contract List Data:', res.data);


      dispatch({
        type: GET_CONTRACT_LIST_SUCCESS,
        payload: res.data.map(o => {
          let rObj = {};
          rObj.ObjectId = o.ObjectId;
          rObj.Contractor = o.Contractor;
          rObj.ContractNo = o.ContractNo;
          rObj.ContractDateAsOf = o.ContractDateAsOf;
          rObj.ContractDateTill = o.ContractDateTill;
          rObj.ContractType = o.ContractType;
          rObj.ContractTypeStr = o.ContractType == '0' ? 'درمان' : o.ContractType == '1' ? 'عمرو حوداث' : 'عمر تکمیلی';
          return rObj;
        }),
      });
    } catch (err) {
      dispatch({
        type: GET_CONTRACT_LIST_SUCCESS,
        payload: err,
      });
    }
  };
  const GetParticipatorById = async (prsnum) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Participator/GetParticipatorById/' + prsnum,
        config
      );
      // console.log('register data:', res.data);

      dispatch({
        type: SET_PARTICIPATOR_DATA_TO_NULL,
        payload: null,
      });
      dispatch({
        type: GET_PARTICIPATOR_BY_ID_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_PARTICIPATOR_BY_ID_FAIL,
        payload: err,
      });
    }
  };
  const GetParticipatorList = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Participator/GetParticipators',
        config
      );
      console.log('participatorlist:', res.data);
      dispatch({
        type: GET_PARTICIPATOR_LIST_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_PARTICIPATOR_LIST_FAIL,
        payload: err.response,
      });
    }
  };

  const GetDecodePrsCodeForTherapy = async (prscodeStr) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'prsCode': prscodeStr
      },
    };

    try {

      const res = await axios.get(
        SERVER_URL + '/Contact/decodeForTherapy',
        config
      );

      dispatch({
        type: GET_DECODE_PRSCODE_FOR_THERAPY_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_DECODE_PRSCODE_FOR_THERAPY_FAIL,
        payload: err.response,
      });
    }
  };
  const GetRecipePropByContractNo = async (ContractNo) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'ContractNo': ContractNo
      },
    };

    try {

      const res = await axios.get(
        SERVER_URL + '/Therapy/GetRecipePropByContractNo',
        config
      );

      dispatch({
        type: GET_RECIPE_PROPS_BY_CONTRACTNO_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_RECIPE_PROPS_BY_CONTRACTNO_FAIL,
        payload: err.response,
      });
    }
  };
  const createOrUpdateMeeting = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      var fm = new FormData();
      fm.append('InnerParticipators', formData.InnerParticipators);
      fm.append('Title', formData.Title);
      fm.append('MeetingNumber', formData.MeetingNumber);
      fm.append('Location', formData.Location);
      fm.append('MeetingDateStr', formData.MeetingDateStr);
      fm.append('file', formData.file);
      fm.append(
        'SelectedParticipators',
        JSON.stringify(formData.SelectedParticipators)
      );

      fm.append('lstSubjects', JSON.stringify(formData.lstSubjects));
      console.log('form data is:', formData);
      const res = await axios.post(
        SERVER_URL + '/Meeting/CreateMeeting',
        fm,
        config
      );
      // console.log('create or update meeting data:', res.data);
      // if (pc) {
      //   GetDecodePrsCode(pc);
      // }
      dispatch({
        type: CREATE_OR_UPDATE_MEETING_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CREATE_OR_UPDATE_MEETING_FAIL,
        payload: err.response,
      });
    }
  };
  const GetPersonList = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(SERVER_URL + '/Meeting/GetPersons', config);
      //console.log('personlist:', res.data);
      dispatch({
        type: GET_PERSONS_LIST_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_PERSONS_LIST_FAIL,
        payload: err.response,
      });
    }
  };
  const GetAelemandi = async (Prsnum) => {
    // console.log('prsnum in :', Prsnum); nnnn
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Therapy/getPrsAelemandi/' + Prsnum,
        config
      );
      // console.log('insurancelist:', res.data);
      dispatch({
        type: GET_AELEMANDI_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_AELEMANDI_FAIL,
        payload: err.response,
      });
    }
  };
  const GetSpecificPersonWithContracts = async (Prsnum) => {
    // console.log('prsnum in :', Prsnum); nnnn
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Therapy/GetSpecificPersonWithContracts/' + Prsnum,
        config
      );
      // console.log('insurancelist:', res.data);
      dispatch({
        type: GET_SPECIFIC_PERSON_WITH_CONTRACTS_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_SPECIFIC_PERSON_WITH_CONTRACTS_FAIL,
        payload: err.response,
      });
    }
  };
  const GetPacketIsOpenList = async () => {

    const config = {
      headers: {
        'Content-Type': 'application/json',

      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Therapy/GetPacketIsOpen/',
        config
      );
      console.log('packetsisopen List:', res.data);

      dispatch({
        type: GET_PACKET_IS_OPEN_LIST_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_PACKET_IS_OPEN_LIST_FAIL,
        payload: err.response,
      });
    }
  };
  const GetPacketList = async () => {

    const config = {
      headers: {
        'Content-Type': 'application/json',

      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Therapy/GetPackets/',
        config
      );
      console.log('packetList:', res.data);

      dispatch({
        type: GET_PACKET_LIST_SUCCESS,
        payload: res.data.map(o => {
          let rObj = {}; rObj.Mah = o.Mah;
          rObj.Id = o.ObjectId;
          rObj.MahBachNo = o.MahBachNo;
          rObj.Mah = o.Mah;
          rObj.ShomareParvande = o.ShomareParvande;
          rObj.ToBimeAvalie = o.ToBimeAvalie;
          rObj.TobimeNahaee = o.TobimeNahaee;
          rObj.PacketActive = (o.TobimeNahaee && o.ToBimeAvalie);
          rObj.PacketActiveDesc = rObj.PacketActive ? 'بسته' : 'باز';
          rObj.VaziatBaste = o.VaziatBaste ? 'پرداخت شده' : 'دردست اقدام';
          rObj.VaziatBasteValue = o.VaziatBaste;
          return rObj;
        })
      });
    } catch (err) {
      dispatch({
        type: GET_PACKET_LIST_FAIL,
        payload: err.response,
      });
    }
  };
  const GetInsuranceList = async (Prsnum, ContractNo) => {
    console.log('prsnum in :', Prsnum);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'ContractNo': ContractNo
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Therapy/GetAllVisit/' + Prsnum,
        config
      );
      console.log('insurancelist:', res.data);
      dispatch({
        type: GET_INSURANCE_LIST_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_INSURANCE_LIST_FAIL,
        payload: err.response,
      });
    }
  };
  const GetTherapyPersonList = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(SERVER_URL + '/Therapy/GetPersons', config);
      console.log('therapyPersonlist:', res.data.lstTherapy);
      dispatch({
        type: GET_THERAPY_PERSONS_LIST_SUCCESS,
        payload: res.data.lstTherapy,
      });
    } catch (err) {
      dispatch({
        type: GET_THERAPY_PERSONS_LIST_FAIL,
        payload: err.response,
      });
    }
  };
  const SearchPersonByInputValue = async (inputStr) => {
    const config = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',

        SearchKey: btoa(unescape(encodeURIComponent(inputStr))),
      },
    };
    //  console.log('headers in confi axios', config.headers);
    try {
      const res = await axios.get(
        SERVER_URL + '/Meeting/SearchPersonByInputValue',
        config
      );
      //  console.log('searchlist:', res.data);
      dispatch({
        type: GET_SEARCH_PERSON_BY_INPUT_VALUE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_SEARCH_PERSON_BY_INPUT_VALUE_FAIL,
        payload: err.response,
      });
    }
  };
  const GetMeetingList = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Meeting/GetAllmeeting',
        config
      );
      //console.log('register data:', res.data);
      dispatch({
        type: GET_MEETING_LIST_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_MEETING_LIST_FAIL,
        payload: err.response.data.msgText,
      });
    }
  };

  const GetMeetingById = async (prsnum) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Meeting/GetMeetingById/' + prsnum,
        config
      );
      // console.log('register data:', res.data);

      dispatch({
        type: SET_MEETING_DATA_TO_NULL,
        payload: null,
      });
      dispatch({
        type: GET_MEETING_BY_ID_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_MEETING_BY_ID_FAIL,
        payload: err,
      });
    }
  };
  const GetDecodePrsCode = async (prsnum) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Contact/decode/' + prsnum,
        config
      );
      // console.log('prscode data:', res.data);
      dispatch({
        type: GET_CONTACT_DECODE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_CONTACT_DECODE_FAIL,
        payload: err.data.msgText,
      });
    }
  };

  const SetShowModal = (data) => {
    dispatch({
      type: SET_SHOW_MODAL,
      payload: data,
    });
  };

  return (
    <MeetingContext.Provider
      value={{
        error: state.error,
        meetinglist: state.meetinglist,
        createdorupdatedMeeting: state.createdorupdatedMeeting,
        showModal: state.showModal,
        showLoader: state.showLoader,
        decodePrsCode: state.decodePrsCode,
        currentUser: state.currentUser,
        isAdmin: state.isAdmin,
        createOrUpdateMeeting,
        meetData: state.meetData,
        personList: state.personList,
        showPersonMulti: state.showPersonMulti,
        participatorData: state.participatorData,
        aelemandiDataPerson: state.aelemandiDataPerson,
        participatorList: state.participatorList,
        therapyPersonList: state.therapyPersonList,
        selectedPersonData: state.selectedPersonData,
        insuranceListData: state.insuranceListData,
        insuranceLoading: state.insuranceLoading,
        contractListData: state.contractListData,
        specificPersonWithContracts: state.specificPersonWithContracts,
        healathRecipesListData: state.healathRecipesListData,
        packetListData: state.packetListData,
        recepiesKindListData: state.recepiesKindListData,
        createRecipieData: state.createRecipieData,
        allRelativeListData: state.allRelativeListData,
        createdInsuranceProcess: state.createdInsuranceProcess,
        deletedRecipieKindData: state.deletedRecipieKindData,
        createdOrUpdatedHealthShoParBachData: state.createdOrUpdatedHealthShoParBachData,
        deletedHealthShoParBachData: state.deletedHealthShoParBachData,
        deletedHealthContractData: state.deletedHealthContractData,
        createdOrUpdatedHealthContractData: state.createdOrUpdatedHealthContractData,
        packetIsOpenListData: state.packetIsOpenListData,
        recipePropByContractNoData: state.recipePropByContractNoData,
        createdOrUpdatedHealthVisitData: state.createdOrUpdatedHealthVisitData,
        deleteHealthVisitByIdData: state.deleteHealthVisitByIdData,
        packetDataList: state.packetDataList,
        healthRecipiesByPrsNumberData: state.healthRecipiesByPrsNumberData,
        decodePrsCodeForTherapyData: state.decodePrsCodeForTherapyData,
        allPersonListData: state.allPersonListData,

        GetMeetingList,
        setCreateMeetingToNull,
        SetShowModal,
        SetShowLoader,
        GetMeetingById,
        GetDecodePrsCode,
        GetPersonList,
        SearchPersonByInputValue,
        GetParticipatorList,
        GetParticipatorById,
        GetTherapyPersonList,
        SetSelectedPersonData,
        GetInsuranceList,
        GetHealthContracts,
        GetSpecificPersonWithContracts,
        SetSpecificPersonWithContractData,
        GetHealthRecipes,
        GetPacketList,
        GetHealthRecipesByContract,
        CreateOrUpdateRecipie,
        GetRelativeList,
        CreateInsuranceProcess,
        DeleteRecipieKindById,
        CreateOrUpdateHealthShoParBach,
        DeleteHealthShoParBachById,
        CreateOrUpdateHealthContract,
        DeleteHealthContractById,
        GetPacketIsOpenList,
        GetRecipePropByContractNo,
        CreateOrUpdateHealthVisit,
        DeleteHealthVisitById,
        GetPacketData,
        GetHealthRecipiesByPrsNumber,
        GetDecodePrsCodeForTherapy,
        GetAllPersons,
        GetAelemandi,
      }}
    >
      {props.children}{' '}
    </MeetingContext.Provider>
  );
};

export default MeetingState;
