let daysInMonth = [{ "month": "Jan", "days": 31 }, { "month": "Feb", "days": 28 }, { "month": "Mar", "days": 31 }
    , { "month": "Apr", "days": 30 }, { "month": "May", "days": 31 }, { "month": "Jun", "days": 30 },
{ "month": "Jul", "days": 31 }, { "month": "Aug", "days": 31 }, { "month": "Sep", "days": 31 }, { "month": "Oct", "days": 30 },
{ "month": "Nov", "days": 31 }, { "month": "Dec", "days": 30 }];

let month1 = 8;
if (month1 <= 12 && month1 >= 1) {
    console.log("Days in", daysInMonth[month1 - 1].month, ":", daysInMonth[month1 - 1].days);
}
else {
    console.log("ERROR..");
}