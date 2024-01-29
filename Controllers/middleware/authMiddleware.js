const jwt = require('jsonwebtoken');
const Key = 'AmitPandey9137976758'
function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401);
    try {
        const decoded = jwt.verify(token, Key);
        req.email = decoded.email;
        next();
    } catch (error) {
        res.status(401);
    }
};

module.exports = verifyToken;