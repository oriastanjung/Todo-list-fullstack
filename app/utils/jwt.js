const jwt = require('jsonwebtoken')
const dotenv = require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET_KEY;

const createJsonWebToken = ({payload}) => {
    const token = jwt.sign(payload, jwtSecret)
    return token;
};


const isTokenValid = ({ token }) => jwt.verify(token, jwtSecret)
module.exports = {createJsonWebToken, isTokenValid}