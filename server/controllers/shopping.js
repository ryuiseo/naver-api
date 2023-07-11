const { shoppingInstance } = require('../models');

module.exports = {
  post: async (req, res) => {
    try {
      const { data } = await shoppingInstance.post(
        '/datalab/shopping/category/keyword/age',
        req.body,
      );
      res.json({ ...data });
    } catch (e) {
      res.sendStatus(e.response.status);
    }
  },
};
