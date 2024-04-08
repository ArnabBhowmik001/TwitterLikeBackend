// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const secret='Arnab1234'
module.exports = (req, res, next) => {

  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const decodedToken = jwt.verify(token, secret);
    req.userData = { userId: decodedToken.userId };
    // console.log(req.userData)
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
