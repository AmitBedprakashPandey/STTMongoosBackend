const jwt = require('jsonwebtoken');
const Key = 'AmitPandey9137976758'
function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    console.log(token);
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(token, Key);
        req.email = decoded.email;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyToken;