const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const usermodel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },


},
    {
        timestamps: true
    });

//compare the user entered password with the database stored  password
usermodel.methods.matchPassword = async function (enteredpassword) {
    return await bcrypt.compare(enteredpassword, this.password);
}

//encrypt the password before sending to database
usermodel.pre('save', async function (next) {
    if (!this.isModified) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

})
const ChatUser = mongoose.model("ChatUser", usermodel);
module.exports = ChatUser;