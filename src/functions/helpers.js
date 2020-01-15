export const getCurrentDate = () => {
  const endDate = Date.now();
  const startDate = endDate - 2592000000;
  const newStartDate = new Date(startDate);
  const startYear = newStartDate.getFullYear().toString();
  const startMonth = checkDateLength(newStartDate.getMonth() + 1);
  const startDay = checkDateLength(newStartDate.getDate());
  const startDateValue = `${startYear}-${startMonth}-${startDay}`;
  return { startDate: startDateValue};
};

export const checkDateLength = date => {
  const dateToString = date.toString();
  if (!(dateToString.length > 1)) {
    return "0" + dateToString;
  } else {
    return dateToString;
  }
};


