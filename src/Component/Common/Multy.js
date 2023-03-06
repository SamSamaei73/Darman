import React, { useEffect, useState, useContext } from 'react';
import Select from 'react-select';
import MeetingContext from '../../Context/meetingContext';
import '@fontsource/vazir';
import '../../css/Font.css';
const Multi = ({ name, multiValueChanged, selectedParticipators }) => {
  const [selectOptions, setSelectOptions] = useState([]);
  const [value, setValue] = useState([]);

  const meetingContext = useContext(MeetingContext);

  const {
    SearchPersonByInputValue,
    personList,

    error,
  } = meetingContext;

  const getOptions = async () => {
    // console.log('personList in Multi', personList);
    const data = personList;

    const options = data.map((d) => ({
      value: d.Prsnum,
      label: d.Nam + '-' + d.NamKhanevadegi,
    }));

    setSelectOptions(options);
  };

  const MultiValueChanged = (e) => {
    setValue(e);
    // console.log(name);
    multiValueChanged(e);
  };
  const searchByInputValue = (e) => {
    //  console.log(e);
    SearchPersonByInputValue(e);
    setTimeout(() => {
      //   console.log('personList', personList);
      getOptions();
    }, 10);
    // console.log('selected value are:', value);
  };

  useEffect(() => {
    getOptions();
    if (selectedParticipators) {
      setValue(selectedParticipators);
    }
  }, []);
  var divStyle = {
    fontSize: { fontFamily: 'vazir' },
    innerWidth: 400,
  };
  return (
    <div>
      <Select
        styles={divStyle}
        value={value}
        options={selectOptions}
        onChange={MultiValueChanged}
        onInputChange={searchByInputValue}
        isSearchable
        isMulti
      />
      {/* {value === null
        ? ''
        : value.map((v) => <h4>{v.value + ' ' + v.label}</h4>)} */}
    </div>
  );
};

export default Multi;
