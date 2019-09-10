const jwt = require("jsonwebtoken");


//background processes
const hidden = process.env.JWT_HIDDEN || "Shhh, don't tell";

module.exports = {
    generateToken,
    restrict
};


//User information
function generateToken(models) {
    const payload = {
        subject: models.id,
        username: models.username
    };
    const options = {
        expiresIn: "1day"
    };
    return jwt.sign(payload, hidden, options);
}
//Expired Login info

function restrict(req, res, next) {
    const badegg = req.headers.authorization;

    if(badegg) {
        jwt.verify(badegg, hidden, (err, decodedToken) => {
            if (err) {
                res.status(401).json({errorMessage: "Please login first to access information."});
            } else {
                //check userInfo location before running
                req.userInfo = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({errorMessage: "You can't skip this step. Please login."});
    }
}