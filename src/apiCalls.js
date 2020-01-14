const url = process.env.VUE_APP_NASA_API_URL;
const secretKey = process.env.VUE_APP_NASA_API_KEY;

export const getPhoto = async date => {
  let dateSuffix = cleanUrl(date);
  let urlString = `${url}${secretKey}${dateSuffix}`;
  console.log(urlString);
  const response = await (await fetch(urlString)).json();
  console.log(response.hdurl);
  return response.hdurl;
};

const cleanUrl = date => {
    console.log(url, secretKey)
  if (date) {
    const dateFormatted = date.slice(0, 10);
    console.log(dateFormatted);
    let dateSuffix = `&date=${dateFormatted}`;
    return dateSuffix;
  } else {
    return "";
  }
};
