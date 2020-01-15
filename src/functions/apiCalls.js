const url = process.env.VUE_APP_NASA_API_URL;
const secretKey = process.env.VUE_APP_NASA_API_KEY;

export const getPhoto = async date => {
  let dateSuffix = cleanUrl(date);
  let urlString = `${url}${secretKey}${dateSuffix}`;
  const response = await (await fetch(urlString)).json();
  return response;
};

export const getMultiplePhotos = async startDate => {
  console.log(startDate);
  let dateRange = `&start_date=${startDate}`;
  let urlString = `${url}${secretKey}${dateRange}`;
  console.log(urlString);
  const data = await (await fetch(urlString)).json();
  console.log(data);
  return data;
};

const cleanUrl = date => {
  if (date) {
    const dateFormatted = date.slice(0, 10);
    let dateSuffix = `&date=${dateFormatted}`;
    return dateSuffix;
  } else {
    return "";
  }
};
