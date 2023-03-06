import React from 'react';
import '../css/Forms.css';

const Forms = () => {
  return (
    <div>
      <div className="forms">
        <div className="part_form">
          <labele className="labele_1">شماره پرسنلی</labele>
          <br />
          <input type="number" value="numberperson" id="numberperson" />
          <br />
          <labele className="labele_1">شماره بیمه</labele>
          <br />
          <input type="number" value="numberBimeh" id="numberBimeh" />
          <br />
          <labele className="labele_1"> نام</labele>
          <br />
          <input type="text" value="name" id="name" />
        </div>
      </div>
    </div>
  );
};

export default Forms;
