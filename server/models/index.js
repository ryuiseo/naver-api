const axios = require('axios');

const shoppingInstance = axios.create({
  baseURL: process.env.NAVER_API_BASE_URL,
  headers: {
    'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
  },
});

module.exports = {
  shoppingInstance,
};
