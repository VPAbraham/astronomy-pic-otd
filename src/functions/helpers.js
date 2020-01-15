export const getCurrentDate = () => {
  const endDate = Date.now();
  console.log(endDate);
  const newEndDate = new Date(endDate);
  const endYear = newEndDate.getFullYear().toString();
  const endMonth = checkDateLength(newEndDate.getMonth() + 1);
  const endDay = checkDateLength(newEndDate.getDate());
  const endDateReturn = `${endYear}-${endMonth}-${endDay}`;
  const startDate = endDate - 2592000000;
  const newStartDate = new Date(startDate);
  const startYear = newStartDate.getFullYear().toString();
  const startMonth = checkDateLength(newStartDate.getMonth() + 1);
  const startDay = checkDateLength(newStartDate.getDate());
  const startDateReturn = `${startYear}-${startMonth}-${startDay}`;
  return { startDate: startDateReturn, endDate: endDateReturn };
};

export const checkDateLength = date => {
  const dateToString = date.toString();
  if (!(dateToString.length > 1)) {
    return "0" + dateToString;
  } else {
    return dateToString;
  }
};
