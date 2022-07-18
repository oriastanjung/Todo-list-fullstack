const UserModel = require("./model");
const { createJsonWebToken, createToken } = require("../../utils");
const { StatusCodes } = require("http-status-codes");


const signup = async (req, res, next) => {
  try {
    const { username, email, password, no_telp } = req.body;

    const data = await UserModel.findOne({ username: username });

    if (data) {
      throw new Error("Duplicated Users");
    }

    const newUser = new UserModel({
      email: email,
      password: password,
      username: username,
      no_telp: no_telp,
    });

    await newUser.save();
    delete newUser._doc.password;
    res.status(StatusCodes.CREATED).json({ data: newUser });
  } catch (error) {
    next(error);
  }
};


const signin = async (req,res,next) => {
    try {
        const {username, password} = req.body;
        
        const data = await UserModel.findOne({username : username});
        if (!data) {
            throw new Error ("Invalid Credentials");
        }

        const isPasswordCorrect = await data.comparePassword(password);

        if (!isPasswordCorrect){
            throw new Error ("Invalid Credentials");
        }

        const token = createJsonWebToken({payload : createToken(data)});
        res.status(StatusCodes.OK).json({ data: { token } });

    } catch (error) {
        next (error)
    }
}


const getAllUser = async (req,res, next) => {
    try {
        const result = await UserModel.find();
        for (item of result){
            delete item._doc.password
        }
        res.status(StatusCodes.OK).json({ data: { result } });
    } catch (error) {
        next(error)
    }
}

module.exports = {
  signup,
  signin,
  getAllUser
};
