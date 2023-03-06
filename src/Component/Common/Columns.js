export const TitleColumns = {
  Header: '-',
  columns: [
    {
      Header: 'عنوان',
      accessor: 'Title',
      width: '30px',
    },
    {
      Header: 'شماره',
      accessor: 'Id',
      width: '30px',
    },

    {
      Header: 'تاریخ',
      accessor: 'MeetingDateStr',
      width: '30px',
    },
    {
      Header: 'محل تشکیل',
      accessor: 'Location',
      width: '30px',
    },
    {
      Header: 'شرکت کنندگان',
      accessor: 'InnerParticipator',
      width: '30px',
    },
  ],
};

export const SubTitleColumnsForShow = {
  Header: '-',
  columns: [
    {
      Header: 'شماره',
      accessor: 'Id',
      width: '30px',
    },
    {
      Header: 'موضوع',
      accessor: 'Subject',
      width: '30px',
    },
    {
      Header: 'مسسوول پیگیری',
      accessor: 'tracingResponsible',
      width: '30px',
    },

    {
      Header: 'مهلت انجام',
      accessor: 'endDateStr',
      width: '30px',
    },
  ],
};

export const SubTitleColumns = {
  Header: '-',
  columns: [
    {
      Header: 'شماره',
      accessor: 'Id',
      width: '30px',
    },
    {
      Header: 'موضوع',
      accessor: 'Subject',
      width: '30px',
    },
    {
      Header: 'مسسوول پیگیری',
      accessor: 'tracingResponsible',
      width: '30px',
    },

    {
      Header: 'مهلت انجام',
      accessor: 'endDateStr',
      width: '30px',
    },
  ],
};

export const ParticipatorColumns = {
  Header: '-',
  columns: [
    {
      Header: 'شماره پرسنلی',
      accessor: 'Prsnum',
      width: '30px',
    },
    {
      Header: 'نام',
      accessor: 'Nam',
      width: '30px',
    },
    {
      Header: 'نام خانوادگی',
      accessor: 'NamKhanevadegi',
      width: '30px',
    },

    {
      Header: 'موبایل',
      accessor: 'MobileNumber',
      width: '30px',
    },
    {
      Header: 'ایمیل',
      accessor: 'Email',
      width: '30px',
    },
    {
      Header: 'سمت',
      accessor: 'VahedSazmani',
      width: '30px',
    },
    {
      Header: 'معاونت',
      accessor: 'Moavenat',
      width: '30px',
    },
  ],
};
export const TherapyColumns = {
  Header: '-',
  columns: [
    {
      Header: 'شماره پرسنلی',
      accessor: 'Prsnum',
      width: '30px',
    },
    {
      Header: 'نام',
      accessor: 'Nam',
      width: '30px',
    },
    {
      Header: 'نام خانوادگی',
      accessor: 'NameKhanevadeghi',
      width: '30px',
    },

    {
      Header: 'شماره بیمه',
      accessor: 'ShomarehBimeh',
      width: '30px',
    },
    {
      Header: 'تاریخ استخدام',
      accessor: 'TarikhEstekhdam',
      width: '30px',
    },
    {
      Header: 'نوع استخدام',
      accessor: 'Desc_Noe_Estekhdam',
      width: '30px',
    },
    {
      Header: 'واحد سازمانی',
      accessor: 'VahehdSazemani',
      width: '30px',
    },
    {
      Header: 'معاونت',
      accessor: 'Moavenat',
      width: '30px',
    },
  ],
};
export const InsuranceColumns = {
  Header: 'جستجوی نسخه پرسنل',
  columns: [
    {
      Header: 'شماره پرسنلی',
      accessor: 'Prsnum',
      width: '2.3em',
    },
    {
      Header: 'بسته',
      accessor: 'MahBachNo',
      width: '1.3em',
    },
    {
      Header: 'وضعیت ',
      accessor: 'Vazeyat',
      width: '2.3em',
    },
    {
      Header: 'نام',
      accessor: 'Nam',
      width: '2.3em',
    },
    {
      Header: 'فامیلی',
      accessor: 'NamKhanevadegi',
      width: '2.3em',
    },
    {
      Header: 'نسبت',
      accessor: 'nesbat',
      width: '2.3em',
    },
    {
      Header: 'نوع نسخه',
      accessor: 'RecipeDesc',
      width: '2.3em',
    },
    {
      Header: 'تاریخ نسخه ',
      accessor: 'RecipeDate',
      width: '2.3em',
    },
    {
      Header: 'مبلغ نسخه',
      accessor: 'مبلغ_نسخه',
      width: '2.3em',
    },
    // {
    //   Header: 'تایید شده ',
    //   accessor: 'مبلغ_تایید_شده',
    //   width: '2.3em',
    // },
    {
      Header: 'غیر تعهد ',
      accessor: 'مبلغ_غیر_تعهد',
      width: '2.3em',
    },
    // {
    //   Header: 'فرانشیز ',
    //   accessor: 'فرانشیز',
    //   width: '2.3em',
    // },
    {
      Header: 'مبلغ درخواستی',
      accessor: 'مبلغ_تایید',
      width: '2.3em',
    },
    // {
    //   Header: 'اضافه شده ',
    //   accessor: 'مبلغ_اضافه_شده',
    //   width: '2.3em',
    // },
    {
      Header: 'کسر شده ',
      accessor: 'مبلغ_کسر_شده',
      width: '2.3em',
    },
    {
      Header: 'نهایی ',
      accessor: 'مبلغ_نهایی',
      width: '2.3em',
    },

  ],
};
export const SpecificInsuranceColumns = {
  Header: 'جست و جوی قراردادها',
  columns: [
    {
      Header: 'شماره قرارداد',
      accessor: 'ContractNo',
      width: '2.3em',
    },
    {
      Header: 'نام بیمه',
      accessor: 'Contractor',
      width: '1.3em',
    },
    {
      Header: 'تاریخ شروع ',
      accessor: 'ContractDateAsOf',
      width: '2.3em',
    },
    {
      Header: 'تاریخ پایان',
      accessor: 'ContractDateTill',
      width: '2.3em',
    }
    ,
    {
      Header: 'نوع قرارداد',
      accessor: 'ContractTypeStr',
      width: '2.3em',
    }

  ],
};
export const NoskheColumns = {
  Header: 'جستجوی نسخه ها',
  columns: [
    {
      Header: 'نوع نسخه ',
      accessor: 'RecipeDesc',
      width: '2.3em',
    },
    {
      Header: 'نوع نسخه ',
      accessor: 'RKD',
      width: '2.3em',
    },
    {
      Header: 'نسخه ID ',
      accessor: 'KindId',
      width: '2.3em',
    },
    {
      Header: 'قرارد ID ',
      accessor: 'ContractId',
      width: '2.3em',
    },
    {
      Header: 'شماره قرارداد',
      accessor: 'ContractNo',
      width: '2.3em',
    },
    {
      Header: 'تاریخ شروع',
      accessor: 'ContractDateAsOf',
      width: '2.3em',
    },
    {
      Header: 'تاریخ پایان',
      accessor: 'ContractDateTill',
      width: '2.3em',
    },


  ],
};
export const PacketColumns = {
  Header: 'جستجوی نسخه های ارسالی به بیمه',
  columns: [
    {
      Header: 'تاریخ ',
      accessor: 'Mah',
      width: '1.3em',
    },
    {
      Header: ' شماره بسته  ',
      accessor: 'MahBachNo',
      width: '1.3em',
    },
    {
      Header: 'شماره پرونده    ',
      accessor: 'ShomareParvande',
      width: '1.3em',
    },
    {
      Header: ' وضعیت بسته ',
      accessor: 'VaziatBaste',
      width: '1.3em',
    },
  ],
};

/////////////////////////////نوع نسخه////////////////////////////////////

export const PrescriptionColumns = {
  Header: 'جستجوی نسخه    ',
  columns: [
    {
      Header: 'نوع نسخه ',
      accessor: 'Desc',
      width: '2.3em',
    },


  ],
};
export const SearchPesonColumns = {
  Header: ' جستجوی افراد',
  columns: [
    {
      Header: ' شماره پرسنلی ',
      accessor: 'prsCode',
      width: '2.3em',
    },
    {
      Header: ' نام ',
      accessor: 'RNam',
      width: '2.3em',
    },
    {
      Header: ' نام خانوادگی ',
      // accessor: 'NamKhanevadegi',
      accessor: 'RFamily',
      width: '2.3em',
    },
    {
      Header: ' نام سرپرست ',
      accessor: 'MainPerson',
      width: '2.3em',
    },
    {
      Header: ' نسبت ',
      accessor: 'nesbat',
      width: '2.3em',
    },
    {
      Header: ' کد ملی ',
      accessor: 'CodeMeli',
      width: '2.3em',
    },



  ],
};
export const SearchDataColumns = {
  Header: 'جستجوی اطلاعات نحوه عملکرد هزینه های درمانی    ',
  columns: [
    {
      Header: ' شماره قرارداد ',
      accessor: 'ContractNo',
      width: '2.3em',
    },
    {
      Header: ' نوع هزینه ',
      accessor: 'RecipeDesc',
      width: '2.3em',
    },
    {
      Header: ' تخصص پزشک ',
      accessor: 'DoctorDesc',
      width: '2.3em4',
    },
    {
      Header: ' حداقل قابل پرداخت ',
      accessor: 'MinMoney4Pay',
      width: '2.3em',
    },
    {
      Header: ' حداکثر قابل پرداخت ',
      accessor: 'MaxMoney4Pay',
      width: '2.3em',
    }

  ],
};
export const SearchReportColumns = {
  Header: 'گزارش نسخ ارسالی',
  columns: [
    {
      Header: ' شماره پرسنلی ',
      accessor: 'prsCode',
      width: '2.3em',
    },
    {
      Header: ' نام  ',
      accessor: 'Nam',
      width: '2.3em',
    },
    {
      Header: ' نام خانوادگی  ',
      accessor: 'lastName',
      width: '2.3em4',
    },
    {
      Header: ' کد ملی بیمار  ',
      accessor: 'nationalId',
      width: '2.3em4',
    },

    {
      Header: ' نام بیمار ',
      accessor: 'patientName',
      width: '2.3em',
    },
    {
      Header: ' نسبت ',
      accessor: 'patientRelative',
      width: '2.3em',
    },
    {
      Header: 'تاریخ',
      accessor: 'prescriptionDate',
      width: '2.3em',
    },
    {
      Header: 'مبلغ نسخه',
      accessor: 'explainedCost',
      width: '2.3em',
    },
    {
      Header: 'تایید شده',
      accessor: 'confirmedCost',
      width: '2.3em',
    },
    {
      Header: 'غیر تعهد ',
      accessor: 'outOfContractCost',
      width: '2.3em',
    },
    {
      Header: 'پرداختی',
      accessor: 'paidValue',
      width: '2.3em',
    },
    {
      Header: ' شرح درمان',
      accessor: 'description',
      width: '2.3em',
    },

  ],
};
export const PersonalColumns = {
  Header: 'گزارش نسخ ارسالی',
  columns: [
    {
      Header: ' شماره پرسنلی ',
      accessor: 'prsCode',
      width: '2.3em',
    },
    {
      Header: 'وضعیت',
      accessor: 'status',
      width: '2.3em',
    },
    // {
    //   Header: ' نام  ',
    //   accessor: 'Nam',
    //   width: '2.3em',
    // },
    // {
    //   Header: ' نام خانوادگی  ',
    //   accessor: 'lastName',
    //   width: '2.3em4',
    // },
    // {
    //   Header: ' کد ملی بیمار  ',
    //   accessor: 'nationalId',
    //   width: '2.3em4',
    // },

    {
      Header: ' نام بیمار ',
      accessor: 'patientName',
      width: '2.3em',
    },
    {
      Header: ' نسبت ',
      accessor: 'patientRelative',
      width: '2.3em',
    },
    {
      Header: 'تاریخ',
      accessor: 'prescriptionDate',
      width: '2.3em',
    },
    {
      Header: 'مبلغ نسخه',
      accessor: 'explainedCost',
      width: '2.3em',
    },
    {
      Header: 'تایید شده',
      accessor: 'confirmedCost',
      width: '2.3em',
    },
    {
      Header: 'غیر تعهد ',
      accessor: 'outOfContractCost',
      width: '2.3em',
    },
    {
      Header: 'پرداختی',
      accessor: 'paidValue',
      width: '2.3em',
    },
    {
      Header: ' شرح درمان',
      accessor: 'description',
      width: '2.3em',
    },

  ],
};