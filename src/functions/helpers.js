export const getCurrentDate = () => {
  const endDate = Date.now();
  const startDateMill = endDate - 2592000000;
  const startDate = new Date(startDateMill);
  const startYear = startDate.getFullYear().toString();
  const startMonth = dateHelper(startDate.getMonth() + 1);
  const startDay = dateHelper(startDate.getDate());
  const startDateValue = `${startYear}-${startMonth}-${startDay}`;
  return { startDate: startDateValue};
};

export const dateHelper = date => {
  const dateToString = date.toString();
  if (!(dateToString.length > 1)) {
    return "0" + dateToString;
  } else {
    return dateToString;
  }
};


