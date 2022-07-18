const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
    minlength: 3,
    maxlength : 12,
  },
  password : {
    type: String,
    required: [true, "Please provide password"],
    minlength: 8,
    maxlength : 16,
  },
  email : {
    type: String,
    required: [true, "Please provide Email"],
  },
  no_telp : {
    type: Number,
    required: [true, "Please provide Email"],
  }
});

userSchema.path('email').validate(function (value){
    const EMAIL_RE = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return EMAIL_RE.test(value);
}, (attr) => `${attr.value} harus merupakan email yang valid!`)

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 15)
})

userSchema.methods.comparePassword = async function (inputPass) {
  const isMatch = await bcrypt.compare(inputPass, this.password);
  return isMatch
}

module.exports = mongoose.model('User', userSchema)