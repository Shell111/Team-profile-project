const axios = require("axios");
const UNSPLASH_APIKEY = process.env.UNSPLASH_APIKEY;


function getResults() {
  return axios
    .get(`https://api.unsplash.com/search/photos?client_id=${UNSPLASH_APIKEY}&page=1&per_page=12&query=portrait&orientation=landscape`)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      return { error: "refresh page" };
    });
}

module.exports = getResults;

