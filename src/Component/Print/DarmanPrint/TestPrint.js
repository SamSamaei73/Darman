import React, { useState, useEffect } from 'react';

const TestPrint = () => {
    const [data, setData] = useState(null);
    const invoice = {
        "totalSum": 122861520,
        "items": [
            {
                "index": 2,
                "rowNumber": 1,
                "prsCode": 420296,
                "Nam": "وحید ",
                "lastName": "خدابنده لو",
                "patientName": "وحید خدابنده لو",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/10/14",
                "explainedCost": 2138000,
                "confirmedCost": 2138000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 2138000,
                "description": "دارو - عمومي"
            },
            {
                "index": 3,
                "rowNumber": 2,
                "prsCode": 420296,
                "Nam": "وحید ",
                "lastName": "خدابنده لو",
                "patientName": "وحید خدابنده لو",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/10/20",
                "explainedCost": 2800000,
                "confirmedCost": 2800000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 2800000,
                "description": "نوار مغز - عمومي"
            },
            {
                "index": 4,
                "rowNumber": 3,
                "prsCode": 420296,
                "Nam": "وحید ",
                "lastName": "خدابنده لو",
                "patientName": "وحید خدابنده لو",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/10/20",
                "explainedCost": 900000,
                "confirmedCost": 422000,
                "outOfContractCost": 478000,
                "faranshizCost": 0,
                "paidValue": 422000,
                "description": "ويزيت - متخصص"
            },
            {
                "index": 5,
                "rowNumber": "جمع",
                "prsCode": 420296,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 5838000,
                "confirmedCost": 5360000,
                "outOfContractCost": 478000,
                "faranshizCost": 0,
                "paidValue": 5360000,
                "description": ""
            },
            {
                "index": 5,
                "rowNumber": 4,
                "prsCode": 423235,
                "Nam": "عليرضا",
                "lastName": "رحماني",
                "patientName": "مریم رحمانی",
                "patientRelative": "همسر",
                "prescriptionDate": "1400/11/12",
                "explainedCost": 449000,
                "confirmedCost": 449000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 449000,
                "description": "دارو - عمومي"
            },
            {
                "index": 6,
                "rowNumber": 5,
                "prsCode": 423235,
                "Nam": "عليرضا",
                "lastName": "رحماني",
                "patientName": "مریم رحمانی",
                "patientRelative": "همسر",
                "prescriptionDate": "1400/11/11",
                "explainedCost": 3214000,
                "confirmedCost": 0,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 0,
                "description": "تست کويد - عمومي"
            },
            {
                "index": 7,
                "rowNumber": "جمع",
                "prsCode": 423235,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 3663000,
                "confirmedCost": 449000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 449000,
                "description": ""
            },
            {
                "index": 7,
                "rowNumber": 6,
                "prsCode": 423162,
                "Nam": "كورش",
                "lastName": "رباني ",
                "patientName": "هلیا ربانی",
                "patientRelative": "دختر",
                "prescriptionDate": "1400/10/30",
                "explainedCost": 215000,
                "confirmedCost": 215000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 215000,
                "description": "ازمايشگاه - عمومي"
            },
            {
                "index": 8,
                "rowNumber": 7,
                "prsCode": 423162,
                "Nam": "كورش",
                "lastName": "رباني ",
                "patientName": "كورش رباني",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/13",
                "explainedCost": 1121000,
                "confirmedCost": 1121000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 1121000,
                "description": "دارو - عمومي"
            },
            {
                "index": 9,
                "rowNumber": "جمع",
                "prsCode": 423162,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 1336000,
                "confirmedCost": 1336000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 1336000,
                "description": ""
            },
            {
                "index": 9,
                "rowNumber": 8,
                "prsCode": 426306,
                "Nam": "منيژه ",
                "lastName": "سمعهء",
                "patientName": "حمیدرضا دیواندری",
                "patientRelative": "همسر",
                "prescriptionDate": "1400/11/14",
                "explainedCost": 1407000,
                "confirmedCost": 1407000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 1407000,
                "description": "دارو - عمومي"
            },
            {
                "index": 10,
                "rowNumber": "جمع",
                "prsCode": 426306,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 1407000,
                "confirmedCost": 1407000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 1407000,
                "description": ""
            },
            {
                "index": 10,
                "rowNumber": 9,
                "prsCode": 421213,
                "Nam": "محمد",
                "lastName": "داننده كيوج",
                "patientName": "محمد داننده كيوج",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/14",
                "explainedCost": 0,
                "confirmedCost": 0,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 0,
                "description": "تزريقات - عمومي"
            },
            {
                "index": 11,
                "rowNumber": "جمع",
                "prsCode": 421213,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 0,
                "confirmedCost": 0,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 0,
                "description": ""
            },
            {
                "index": 11,
                "rowNumber": 10,
                "prsCode": 441104,
                "Nam": "بدري",
                "lastName": "وارسته",
                "patientName": "بدري وارسته",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/10/08",
                "explainedCost": 5458000,
                "confirmedCost": 0,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 0,
                "description": "ماموگرافي - عمومي"
            },
            {
                "index": 12,
                "rowNumber": "جمع",
                "prsCode": 441104,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 5458000,
                "confirmedCost": 0,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 0,
                "description": ""
            },
            {
                "index": 12,
                "rowNumber": 11,
                "prsCode": 434288,
                "Nam": "مصطفي",
                "lastName": "فتاحي",
                "patientName": "مصطفي فتاحي",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/03",
                "explainedCost": 92014500,
                "confirmedCost": 92014500,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 92014500,
                "description": "دارو - عمومي"
            },
            {
                "index": 13,
                "rowNumber": 12,
                "prsCode": 434288,
                "Nam": "مصطفي",
                "lastName": "فتاحي",
                "patientName": "مصطفي فتاحي",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/10/29",
                "explainedCost": 3109365,
                "confirmedCost": 0,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 0,
                "description": "تست کويد - عمومي"
            },
            {
                "index": 14,
                "rowNumber": "جمع",
                "prsCode": 434288,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 95123865,
                "confirmedCost": 92014500,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 92014500,
                "description": ""
            },
            {
                "index": 14,
                "rowNumber": 13,
                "prsCode": 426301,
                "Nam": "فاطمه ",
                "lastName": "سپهري نكو",
                "patientName": "اقدس رضا زاده",
                "patientRelative": "مادر",
                "prescriptionDate": "1400/10/22",
                "explainedCost": 3950000,
                "confirmedCost": 3950000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 3950000,
                "description": "دارو - عمومي"
            },
            {
                "index": 15,
                "rowNumber": "جمع",
                "prsCode": 426301,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 3950000,
                "confirmedCost": 3950000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 3950000,
                "description": ""
            },
            {
                "index": 15,
                "rowNumber": 14,
                "prsCode": 439764,
                "Nam": "ليلا",
                "lastName": "محمودي",
                "patientName": "ليلا محمودي",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/11",
                "explainedCost": 1015000,
                "confirmedCost": 624000,
                "outOfContractCost": 391000,
                "faranshizCost": 0,
                "paidValue": 624000,
                "description": "ويزيت - فوق تخصص"
            },
            {
                "index": 16,
                "rowNumber": "جمع",
                "prsCode": 439764,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 1015000,
                "confirmedCost": 624000,
                "outOfContractCost": 391000,
                "faranshizCost": 0,
                "paidValue": 624000,
                "description": ""
            },
            {
                "index": 16,
                "rowNumber": 15,
                "prsCode": 415157,
                "Nam": "عباس",
                "lastName": "ترابي",
                "patientName": "ليلا بيات",
                "patientRelative": "مادر",
                "prescriptionDate": "1400/11/12",
                "explainedCost": 418000,
                "confirmedCost": 418000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 418000,
                "description": "دارو - عمومي"
            },
            {
                "index": 17,
                "rowNumber": 16,
                "prsCode": 415157,
                "Nam": "عباس",
                "lastName": "ترابي",
                "patientName": "ليلا بيات",
                "patientRelative": "مادر",
                "prescriptionDate": "1400/11/12",
                "explainedCost": 800000,
                "confirmedCost": 422000,
                "outOfContractCost": 378000,
                "faranshizCost": 0,
                "paidValue": 422000,
                "description": "ويزيت - متخصص"
            },
            {
                "index": 18,
                "rowNumber": 17,
                "prsCode": 415157,
                "Nam": "عباس",
                "lastName": "ترابي",
                "patientName": "ليلا بيات",
                "patientRelative": "مادر",
                "prescriptionDate": "1400/11/12",
                "explainedCost": 371000,
                "confirmedCost": 0,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 0,
                "description": "اپتومتريست - عمومي"
            },
            {
                "index": 19,
                "rowNumber": 18,
                "prsCode": 415157,
                "Nam": "عباس",
                "lastName": "ترابي",
                "patientName": "ليلا بيات",
                "patientRelative": "مادر",
                "prescriptionDate": "1400/11/12",
                "explainedCost": 2250000,
                "confirmedCost": 0,
                "outOfContractCost": 2250000,
                "faranshizCost": 0,
                "paidValue": 0,
                "description": "اسکن - عمومي"
            },
            {
                "index": 20,
                "rowNumber": "جمع",
                "prsCode": 415157,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 3839000,
                "confirmedCost": 840000,
                "outOfContractCost": 2628000,
                "faranshizCost": 0,
                "paidValue": 840000,
                "description": ""
            },
            {
                "index": 20,
                "rowNumber": 19,
                "prsCode": 419354,
                "Nam": "حسام",
                "lastName": "حبيبي",
                "patientName": "حسام حبيبي",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/10",
                "explainedCost": 512900,
                "confirmedCost": 324000,
                "outOfContractCost": 188900,
                "faranshizCost": 0,
                "paidValue": 324000,
                "description": "ويزيت - عمومي"
            },
            {
                "index": 21,
                "rowNumber": 20,
                "prsCode": 419354,
                "Nam": "حسام",
                "lastName": "حبيبي",
                "patientName": "حسام حبيبي",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/10",
                "explainedCost": 1351720,
                "confirmedCost": 1351720,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 1351720,
                "description": "دارو - عمومي"
            },
            {
                "index": 22,
                "rowNumber": 21,
                "prsCode": 419354,
                "Nam": "حسام",
                "lastName": "حبيبي",
                "patientName": "حسام حبيبي",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/10",
                "explainedCost": 3436000,
                "confirmedCost": 0,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 0,
                "description": "تست کويد - عمومي"
            },
            {
                "index": 23,
                "rowNumber": 22,
                "prsCode": 419354,
                "Nam": "حسام",
                "lastName": "حبيبي",
                "patientName": "حسام حبيبي",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/10",
                "explainedCost": 1618000,
                "confirmedCost": 1618000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 1618000,
                "description": "پاراكلينيك - عمومي"
            },
            {
                "index": 24,
                "rowNumber": "جمع",
                "prsCode": 419354,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 6918620,
                "confirmedCost": 3293720,
                "outOfContractCost": 188900,
                "faranshizCost": 0,
                "paidValue": 3293720,
                "description": ""
            },
            {
                "index": 24,
                "rowNumber": 23,
                "prsCode": 413353,
                "Nam": "محمد",
                "lastName": "باقری",
                "patientName": "محمد باقری",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/11",
                "explainedCost": 2028000,
                "confirmedCost": 2028000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 2028000,
                "description": "دارو - عمومي"
            },
            {
                "index": 25,
                "rowNumber": "جمع",
                "prsCode": 413353,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 2028000,
                "confirmedCost": 2028000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 2028000,
                "description": ""
            },
            {
                "index": 25,
                "rowNumber": 24,
                "prsCode": 426343,
                "Nam": "علیرضا",
                "lastName": "سماعی یکتا",
                "patientName": "علیرضا سماعی یکتا",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/10",
                "explainedCost": 466000,
                "confirmedCost": 466000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 466000,
                "description": "دارو - عمومي"
            },
            {
                "index": 26,
                "rowNumber": 25,
                "prsCode": 426343,
                "Nam": "علیرضا",
                "lastName": "سماعی یکتا",
                "patientName": "علیرضا سماعی یکتا",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/09",
                "explainedCost": 918000,
                "confirmedCost": 918000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 918000,
                "description": "دارو - عمومي"
            },
            {
                "index": 27,
                "rowNumber": 26,
                "prsCode": 426343,
                "Nam": "علیرضا",
                "lastName": "سماعی یکتا",
                "patientName": "علیرضا سماعی یکتا",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/10",
                "explainedCost": 253600,
                "confirmedCost": 253600,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 253600,
                "description": "ويزيت - متخصص"
            },
            {
                "index": 28,
                "rowNumber": "جمع",
                "prsCode": 426343,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 1637600,
                "confirmedCost": 1637600,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 1637600,
                "description": ""
            },
            {
                "index": 28,
                "rowNumber": 27,
                "prsCode": 440259,
                "Nam": "مريم",
                "lastName": "نورآذر",
                "patientName": "مريم نورآذر",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/13",
                "explainedCost": 1000000,
                "confirmedCost": 422000,
                "outOfContractCost": 578000,
                "faranshizCost": 0,
                "paidValue": 422000,
                "description": "ويزيت - متخصص"
            },
            {
                "index": 29,
                "rowNumber": "جمع",
                "prsCode": 440259,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 1000000,
                "confirmedCost": 422000,
                "outOfContractCost": 578000,
                "faranshizCost": 0,
                "paidValue": 422000,
                "description": ""
            },
            {
                "index": 29,
                "rowNumber": 28,
                "prsCode": 419229,
                "Nam": "مريم",
                "lastName": "حميدي فشكي",
                "patientName": "مريم حميدي فشكي",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/13",
                "explainedCost": 800000,
                "confirmedCost": 422000,
                "outOfContractCost": 378000,
                "faranshizCost": 0,
                "paidValue": 422000,
                "description": "ويزيت - متخصص"
            },
            {
                "index": 30,
                "rowNumber": 29,
                "prsCode": 419229,
                "Nam": "مريم",
                "lastName": "حميدي فشكي",
                "patientName": "مريم حميدي فشكي",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/11/11",
                "explainedCost": 2100000,
                "confirmedCost": 2100000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 2100000,
                "description": "سونوگرافي - عمومي"
            },
            {
                "index": 31,
                "rowNumber": "جمع",
                "prsCode": 419229,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 2900000,
                "confirmedCost": 2522000,
                "outOfContractCost": 378000,
                "faranshizCost": 0,
                "paidValue": 2522000,
                "description": ""
            },
            {
                "index": 31,
                "rowNumber": 30,
                "prsCode": 442152,
                "Nam": "محمدرضا",
                "lastName": "هاشم نيا گتابي",
                "patientName": "ام البنين كربلائي زاده",
                "patientRelative": "مادر",
                "prescriptionDate": "1400/11/13",
                "explainedCost": 800000,
                "confirmedCost": 422000,
                "outOfContractCost": 378000,
                "faranshizCost": 0,
                "paidValue": 422000,
                "description": "ويزيت - متخصص"
            },
            {
                "index": 32,
                "rowNumber": 31,
                "prsCode": 442152,
                "Nam": "محمدرضا",
                "lastName": "هاشم نيا گتابي",
                "patientName": "ام البنين كربلائي زاده",
                "patientRelative": "مادر",
                "prescriptionDate": "1400/11/13",
                "explainedCost": 953000,
                "confirmedCost": 953000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 953000,
                "description": "دارو - عمومي"
            },
            {
                "index": 33,
                "rowNumber": "جمع",
                "prsCode": 442152,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 1753000,
                "confirmedCost": 1375000,
                "outOfContractCost": 378000,
                "faranshizCost": 0,
                "paidValue": 1375000,
                "description": ""
            },
            {
                "index": 33,
                "rowNumber": 32,
                "prsCode": 436247,
                "Nam": "علي",
                "lastName": "كيوان پور",
                "patientName": "آرمین کیوان پور",
                "patientRelative": "پسر",
                "prescriptionDate": "1400/11/05",
                "explainedCost": 800000,
                "confirmedCost": 422000,
                "outOfContractCost": 378000,
                "faranshizCost": 0,
                "paidValue": 422000,
                "description": "ويزيت - متخصص"
            },
            {
                "index": 34,
                "rowNumber": 33,
                "prsCode": 436247,
                "Nam": "علي",
                "lastName": "كيوان پور",
                "patientName": "علي كيوان پور",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/10/18",
                "explainedCost": 212000,
                "confirmedCost": 212000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 212000,
                "description": "دارو - عمومي"
            },
            {
                "index": 35,
                "rowNumber": "جمع",
                "prsCode": 436247,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 1012000,
                "confirmedCost": 634000,
                "outOfContractCost": 378000,
                "faranshizCost": 0,
                "paidValue": 634000,
                "description": ""
            },
            {
                "index": 35,
                "rowNumber": 34,
                "prsCode": 412203,
                "Nam": "محمد علي",
                "lastName": "احمدي قشلاقي",
                "patientName": "رويا حاتمي",
                "patientRelative": "همسر",
                "prescriptionDate": "1400/11/05",
                "explainedCost": 1109000,
                "confirmedCost": 1109000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 1109000,
                "description": "دارو - عمومي"
            },
            {
                "index": 36,
                "rowNumber": 35,
                "prsCode": 412203,
                "Nam": "محمد علي",
                "lastName": "احمدي قشلاقي",
                "patientName": "رويا حاتمي",
                "patientRelative": "همسر",
                "prescriptionDate": "1400/11/05",
                "explainedCost": 365000,
                "confirmedCost": 365000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 365000,
                "description": "تزريقات - عمومي"
            },
            {
                "index": 37,
                "rowNumber": "جمع",
                "prsCode": 412203,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 1474000,
                "confirmedCost": 1474000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 1474000,
                "description": ""
            },
            {
                "index": 37,
                "rowNumber": 36,
                "prsCode": 420201,
                "Nam": "بهروز",
                "lastName": "خدادادبيگي",
                "patientName": "مهناز محمدي گل تپه",
                "patientRelative": "همسر",
                "prescriptionDate": "1400/11/14",
                "explainedCost": 966000,
                "confirmedCost": 966000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 966000,
                "description": "دارو - عمومي"
            },
            {
                "index": 38,
                "rowNumber": 37,
                "prsCode": 420201,
                "Nam": "بهروز",
                "lastName": "خدادادبيگي",
                "patientName": "مهناز محمدي گل تپه",
                "patientRelative": "همسر",
                "prescriptionDate": "1400/11/14",
                "explainedCost": 400000,
                "confirmedCost": 324000,
                "outOfContractCost": 76000,
                "faranshizCost": 0,
                "paidValue": 324000,
                "description": "ويزيت - عمومي"
            },
            {
                "index": 39,
                "rowNumber": "جمع",
                "prsCode": 420201,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 1366000,
                "confirmedCost": 1290000,
                "outOfContractCost": 76000,
                "faranshizCost": 0,
                "paidValue": 1290000,
                "description": ""
            },
            {
                "index": 39,
                "rowNumber": 38,
                "prsCode": 421212,
                "Nam": "زهرا",
                "lastName": "دراني",
                "patientName": "بهمن بروجردی فر",
                "patientRelative": "همسر",
                "prescriptionDate": "1400/11/14",
                "explainedCost": 760000,
                "confirmedCost": 760000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 760000,
                "description": "راديوگرافي - عمومي"
            },
            {
                "index": 40,
                "rowNumber": "جمع",
                "prsCode": 421212,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 760000,
                "confirmedCost": 760000,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 760000,
                "description": ""
            },
            {
                "index": 40,
                "rowNumber": 39,
                "prsCode": 412180,
                "Nam": "مريم",
                "lastName": "اميري",
                "patientName": "مريم اميري",
                "patientRelative": "اصلي",
                "prescriptionDate": "1400/10/26",
                "explainedCost": 1444700,
                "confirmedCost": 1444700,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 1444700,
                "description": "دارو - عمومي"
            },
            {
                "index": 41,
                "rowNumber": "جمع",
                "prsCode": 412180,
                "Nam": "",
                "lastName": "",
                "patientName": "",
                "patientRelative": "",
                "prescriptionDate": "",
                "explainedCost": 1444700,
                "confirmedCost": 1444700,
                "outOfContractCost": 0,
                "faranshizCost": 0,
                "paidValue": 1444700,
                "description": ""
            }
        ]
    }

    const printPages = () => {
        let pageCount = invoice.items.length / 10;
        console.log('pageCounbt', pageCount);
        let pageItem = 10;
        let arr = [];
        // (page - 1) * records_per_page; i < (page * records_per_page)
        // let teenagers = people.filter(function (person) {
        //     return person.age >= this.lower && person.age <= this.upper;
        // }, range)
        for (let i = 1; i <= pageCount; i++) {
            let items = invoice.items.filter(function (item, index) {
                let num = parseInt((this.page) * this.pageItem);
                // console.log('pageItem', this.page, this.pageItem);
                return item.index <= num

            }, { pageItem, page: i });
            invoice.items = items;
            console.log(items);
            arr.push(
                invoice
            );
        }
        console.log('items', arr);
        //return arr;


    }

    useEffect(() => {
        printPages();
    }, []);

    return <div></div>;
};

export default TestPrint;