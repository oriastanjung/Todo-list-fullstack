const { isTokenValid } = require("../utils/jwt");

const authenticationUser = async (req, res, next) => {
    try {
        let token;

        const headerAuth = req.headers.authorization;

        if (headerAuth && headerAuth.startsWith('Bearer')){
            token = headerAuth.split(' ')[1]
            // Bearer dksajfkadsjfkadjklfa
        }

        if (!headerAuth){
            throw new Error ('Authentication user failed');
        }

        const payload = isTokenValid({token});
        console.log('payload >>>>\n')
        console.log(payload);

        req.user = {
            id : payload.userId,
            email : payload.email,
            password : payload.password,
            username : payload.username,
            no_telp : payload.no_telp
        }
        console.log('req.user >>>>\n')
        console.log(req.user);
        next()
    } catch (error) {
        next(error)
    }
};

module.exports = {
  authenticationUser,
};
