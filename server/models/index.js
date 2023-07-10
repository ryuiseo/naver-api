const axios = require('axios');

const shoppingInstance = axios.create({
  baseURL: `${process.env.NAVER_API_BASE_URL}/datalab/shopping`,
  headers: {
    'X-Naver-Client-Id': process.env.CLIENT_ID,
    'X-Naver-Client-Secret': process.env.CLIENT_SECRET,
  },
});

module.exports = {
  shoppingInstance,
};
