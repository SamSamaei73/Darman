/* eslint-disable import/no-anonymous-default-export */
import {
  GET_MEETING_LIST_SUCCESS,
  GET_MEETING_LIST_FAIL,
  CREATE_OR_UPDATE_MEETING_FAIL,
  CREATE_OR_UPDATE_MEETING_SUCCESS,
  SET_CREATE_MEETING_TO_NULL,
  SET_SHOW_MODAL,
  SET_SHOW_LOADER,
  GET_MEETING_BY_ID_FAIL,
  GET_MEETING_BY_ID_SUCCESS,
  GET_CONTACT_DECODE_SUCCESS,
  GET_CONTACT_DECODE_FAIL,
  GET_PERSONS_LIST_SUCCESS,
  GET_PERSONS_LIST_FAIL,
  GET_SEARCH_PERSON_BY_INPUT_VALUE_SUCCESS,
  GET_SEARCH_PERSON_BY_INPUT_VALUE_FAIL,
  SET_MEETING_DATA_TO_NULL,
  GET_PARTICIPATOR_LIST_FAIL,
  GET_PARTICIPATOR_LIST_SUCCESS,
  GET_PARTICIPATOR_BY_ID_SUCCESS,
  GET_PARTICIPATOR_BY_ID_FAIL,
  SET_PARTICIPATOR_DATA_TO_NULL,
  GET_THERAPY_PERSONS_LIST_FAIL,
  GET_THERAPY_PERSONS_LIST_SUCCESS,
  SET_SELECTED_PERSON_DATA,
  GET_INSURANCE_LIST_FAIL,
  GET_INSURANCE_LIST_SUCCESS,
  GET_CONTRACT_LIST_SUCCESS,
  GET_CONTRACT_LIST_FAIL,
  GET_SPECIFIC_PERSON_WITH_CONTRACTS_SUCCESS,
  SET_SPECIFIC_PERSON_WITH_CONTRACT_DATA,
  GET_HEALTH_RECIPES_LIST_SUCCESS,
  GET_HEALTH_RECIPES_LIST_FAIL,
  GET_PACKET_LIST_FAIL,
  GET_PACKET_LIST_SUCCESS,
  GET_HEALTH_RECIPES_BY_CONTRACTS_LIST_SUCCESS,
  GET_HEALTH_RECIPES_BY_CONTRACTS_LIST_FAIL,
  CREATE_RECIPIE_SUCCESS,
  CREATE_RECIPIE_FAIL,
  GET_ALL_RELATIVE_LIST_SUCCESS,
  GET_ALL_RELATIVE_LIST_FAIL,
  CREATE_INSURANCE_PROCESS_FAIL,
  CREATE_INSURANCE_PROCESS_SUCCESS,
  DELETE_RECIPIE_SUCCESS,
  DELETE_RECIPIE_FAIL,
  CREATE_HEALTH_SHOPARBACH_SUCCESS,
  CREATE_HEALTH_SHOPARBACH_FAIL,
  UPDATE_HEALTH_SHOPARBACH_SUCCESS,
  UPDATE_HEALTH_SHOPARBACH_FAIL,
  DELETE_HEALTH_SHOPARBACH_SUCCESS,
  DELETE_HEALTH_SHOPARBACH_FAIL,
  CREATE_HEALTHCONTRACT_SUCCESS,
  CREATE_HEALTHCONTRACT_FAIL,
  UPDATE_HEALTHCONTRACT_SUCCESS,
  DELETE_HEALTH_CONTRACT_SUCCESS,
  DELETE_HEALTH_CONTRACT_FAIL,
  GET_PACKET_IS_OPEN_LIST_FAIL,
  GET_PACKET_IS_OPEN_LIST_SUCCESS,
  GET_RECIPE_PROPS_BY_CONTRACTNO_FAIL,
  GET_RECIPE_PROPS_BY_CONTRACTNO_SUCCESS,
  CREATE_HEALTHVISIT_SUCCESS,
  CREATE_HEALTHVISIT_FAIL,
  UPDATE_HEALTHVISIT_SUCCESS,
  DELETE_HEALTH_VISIT_BY_ID_SUCCESS,
  DELETE_HEALTH_VISIT_BY_ID_FAIL,
  GET_PACKET_DATA_SUCCESS,
  GET_PACKET_DATA_FAIL,
  GET_HEALTH_RECIPIES_BY_PRSNUMBER_DATA_FAIL,
  GET_HEALTH_RECIPIES_BY_PRSNUMBER_DATA_SUCCESS,
  GET_DECODE_PRSCODE_FOR_THERAPY_SUCCESS,
  GET_DECODE_PRSCODE_FOR_THERAPY_FAIL,
  GET_ALL_PERSONS_LIST_FAIL,
  GET_ALL_PERSONS_LIST_SUCCESS,
  GET_AELEMANDI_SUCCESS,
  GET_AELEMANDI_FAIL,




} from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_AELEMANDI_SUCCESS:
      return {
        ...state,
        aelemandiDataPerson: action.payload,
      };
    case GET_AELEMANDI_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case GET_ALL_PERSONS_LIST_SUCCESS:
      return {
        ...state,
        allPersonListData: action.payload,
      };
    case GET_ALL_PERSONS_LIST_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case GET_DECODE_PRSCODE_FOR_THERAPY_SUCCESS:
      return {
        ...state,
        decodePrsCodeForTherapyData: action.payload,
      };
    case GET_DECODE_PRSCODE_FOR_THERAPY_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case GET_HEALTH_RECIPIES_BY_PRSNUMBER_DATA_SUCCESS:
      return {
        ...state,
        healthRecipiesByPrsNumberData: action.payload,
      };
    case GET_HEALTH_RECIPIES_BY_PRSNUMBER_DATA_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case DELETE_HEALTH_VISIT_BY_ID_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case UPDATE_HEALTHVISIT_SUCCESS:
      return {
        ...state,
        createdOrUpdatedHealthVisitData: action.payload,
      };
    case CREATE_HEALTHVISIT_SUCCESS:
      return {
        ...state,
        createdOrUpdatedHealthVisitData: action.payload,
      };
    case CREATE_HEALTHVISIT_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case GET_PACKET_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_PACKET_DATA_SUCCESS:
      return {
        ...state,
        packetDataList: action.payload,
      };
    case GET_RECIPE_PROPS_BY_CONTRACTNO_SUCCESS:
      return {
        ...state,
        recipePropByContractNoData: action.payload,
      };
    case GET_RECIPE_PROPS_BY_CONTRACTNO_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case GET_PACKET_IS_OPEN_LIST_SUCCESS:
      return {
        ...state,
        packetIsOpenListData: action.payload,
      };
    case GET_PACKET_IS_OPEN_LIST_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case DELETE_HEALTH_CONTRACT_SUCCESS:
      return {
        ...state,
        deletedHealthContractData: action.payload,
      };
    case DELETE_HEALTH_CONTRACT_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case CREATE_HEALTHCONTRACT_SUCCESS:
      return {
        ...state,
        createdOrUpdatedHealthContractData: action.payload,
      };
    case UPDATE_HEALTHCONTRACT_SUCCESS:
      return {
        ...state,
        createdOrUpdatedHealthContractData: action.payload,
      };
    case CREATE_HEALTHCONTRACT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_HEALTH_SHOPARBACH_SUCCESS:
      return {
        ...state,
        createdOrUpdatedHealthShoParBachData: action.payload,
      };
    case UPDATE_HEALTH_SHOPARBACH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_HEALTH_SHOPARBACH_SUCCESS:
      return {
        ...state,
        createdOrUpdatedHealthShoParBachData: action.payload,
      };
    case CREATE_HEALTH_SHOPARBACH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_HEALTH_SHOPARBACH_SUCCESS:
      return {
        ...state,
        deletedHealthShoParBachData: action.payload,

      };
    case DELETE_HEALTH_SHOPARBACH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_RECIPIE_SUCCESS:
      return {
        ...state,
        deletedRecipieKindData: action.payload,

      };
    case DELETE_RECIPIE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_INSURANCE_PROCESS_SUCCESS:
      return {
        ...state,
        createdInsuranceProcess: action.payload,

      };
    case CREATE_INSURANCE_PROCESS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ALL_RELATIVE_LIST_SUCCESS:
      return {
        ...state,
        allRelativeListData: action.payload,

      };
    case GET_ALL_RELATIVE_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_RECIPIE_SUCCESS:
      return {
        ...state,
        createRecipieData: action.payload,

      };
    case CREATE_RECIPIE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_HEALTH_RECIPES_BY_CONTRACTS_LIST_SUCCESS:
      return {
        ...state,
        recepiesKindListData: action.payload,

      };
    case GET_HEALTH_RECIPES_BY_CONTRACTS_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_PACKET_LIST_SUCCESS:
      return {
        ...state,
        packetListData: action.payload,

      };
    case GET_PACKET_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_SPECIFIC_PERSON_WITH_CONTRACTS_SUCCESS:
      return {
        ...state,
        specificPersonWithContracts: action.payload,

      };
    case GET_HEALTH_RECIPES_LIST_SUCCESS:
      return {
        ...state,
        healathRecipesListData: action.payload,

      };
    case GET_HEALTH_RECIPES_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_CONTRACT_LIST_SUCCESS:
      return {
        ...state,
        contractListData: action.payload,

      };
    case GET_CONTRACT_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_INSURANCE_LIST_SUCCESS:
      return {
        ...state,
        insuranceListData: action.payload,
        insuranceLoading: false,
      };
    case GET_INSURANCE_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SET_SELECTED_PERSON_DATA:
      return {
        ...state,
        selectedPersonData: action.payload,
      };
    case SET_SPECIFIC_PERSON_WITH_CONTRACT_DATA:
      return {
        ...state,
        specificPersonWithContracts: action.payload,
      };
    case GET_THERAPY_PERSONS_LIST_SUCCESS:
      return {
        ...state,
        therapyPersonList: action.payload,
        showPersonMulti: true,
      };
    case GET_THERAPY_PERSONS_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_CONTACT_DECODE_SUCCESS:
      return {
        ...state,
        decodePrsCode: action.payload.PrsCode,
        currentUser: action.payload.Data,
        isAdmin: action.payload.isAdmin,
      };
    case GET_CONTACT_DECODE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SET_PARTICIPATOR_DATA_TO_NULL:
      return {
        ...state,
        participatorData: null,
      };
    case SET_MEETING_DATA_TO_NULL:
      return {
        ...state,
        meetData: null,
      };
    case GET_PARTICIPATOR_BY_ID_SUCCESS:
      return {
        ...state,
        participatorData: action.payload,
      };
    case GET_PARTICIPATOR_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_MEETING_BY_ID_SUCCESS:
      return {
        ...state,
        meetData: action.payload,
      };
    case GET_MEETING_BY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case SET_CREATE_MEETING_TO_NULL:
      return {
        ...state,
        createdorupdatedMeeting: action.payload,
      };
    case SET_SHOW_LOADER:
      return {
        ...state,
        showLoader: action.payload,
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };

    case GET_SEARCH_PERSON_BY_INPUT_VALUE_SUCCESS:
      return {
        ...state,
        personList: action.payload,
        showPersonMulti: true,
      };
    case GET_SEARCH_PERSON_BY_INPUT_VALUE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_PARTICIPATOR_LIST_SUCCESS:
      return {
        ...state,
        participatorList: action.payload,
      };
    case GET_PARTICIPATOR_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_MEETING_LIST_SUCCESS:
      return {
        ...state,
        meetinglist: action.payload,
      };
    case GET_MEETING_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_PERSONS_LIST_SUCCESS:
      return {
        ...state,
        personList: action.payload,
        showPersonMulti: true,
      };
    case GET_PERSONS_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_OR_UPDATE_MEETING_SUCCESS:
      return {
        ...state,
        createdorupdatedMeeting: action.payload,
      };
    case CREATE_OR_UPDATE_MEETING_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
