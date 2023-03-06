import React, { useMemo, useRef, useState, useContext, useEffect } from 'react';
import '../css/Search.css';
import Navbar from './Navbar';
import Footer from './Footer';
import MeetingContext from '../Context/meetingContext';
import { SearchPesonColumns } from './Common/Columns';
import CustomTable from './Common/CustomTable';
import { SearchTitle } from "../Constant/constant";

function useEffectSkipFirst(fn, arr) {
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    fn();
  }, arr);
}
const Search = () => {
  document.title = SearchTitle;
  const meetingContext = useContext(MeetingContext);

  const SpersonColumnsForAdmin = useMemo(
    () => [SearchPesonColumns],

    []
  );
  const {

    
    allPersonListData,
    GetAllPersons,

  } = meetingContext;
  useEffect(() => {
    GetAllPersons();

  }, []);
  useEffectSkipFirst(async () => {
    if (allPersonListData) {

      console.log('allPersonListData', allPersonListData);

      // setReportData(allPersonListData);


    }
  }, [allPersonListData]);
  return (
    <div id="Search-Style">
      <Navbar />
      <div className="container">
        <div className="search-table">
          {<>
            <CustomTable
              columns={SpersonColumnsForAdmin}
              data={allPersonListData ? allPersonListData : []}
            />
          </>}
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Search
