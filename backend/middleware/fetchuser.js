var jwt = require('jsonwebtoken');
const JWT_SECRET = 'uppcl%hierarchy##$$@@'

const fetchuser = (req, res, next) => {
    //Get the user from jwt token and add it to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.employee = data.employee;
        next();
    }
    catch (error) {
        res.status(401).send({ error: "Token not verified" });
    }

}

module.exports = fetchuser;