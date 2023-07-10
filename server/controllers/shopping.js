const { shoppingInstance } = require('../models');

module.exports = {
  get: () => {},
  post: async (req, res) => {
    try {
      const { data } = await shoppingInstance.post(
        '/category/keyword/age',
        req.body,
      );
      res.json({ ...data });
    } catch (e) {
      res.sendStatus(e.response.status);
    }
  },
  redirect: () => {},
};
