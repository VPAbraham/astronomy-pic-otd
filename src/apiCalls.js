const url = process.env.VUE_APP_NASA_API_URL;
const secretKey = process.env.VUE_APP_NASA_API_KEY

export const getPhoto = (date) => {
    let dateString;
    if (date) {
        dateString = `&date=${}`
    }
}