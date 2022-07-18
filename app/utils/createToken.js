 const createToken = (user) => {
    return {
        username : user.username,
        email : user.email,
        userId : user._id,
        no_telp : user.no_telp
    }
}

module.exports = createToken