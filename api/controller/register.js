const User = require("../model/index")
const bcrypt = require("bcrypt");
const createSshUser = require ('../ssh/createSshUser');
const createPassword = require('../lib/createPassword')
const {debug} = require("nodemon/lib/utils");


const register = async (req, res) => {
    let userExist = await User.findOne({ email: req.body.email });
    // check user
    if (!userExist) {
        const user = new User(req.body)
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        user.save();
        const sshUsername = (email = req.body.email) => {
                const atIndex = email.indexOf('@');
                if (atIndex === -1) {
                    throw new Error('Invalid email address');
                }
                return email.slice(0, atIndex);
        }
        const sshPassword = createPassword();

        console.log(sshUsername(), sshPassword)

            await createSshUser(sshUsername(),sshPassword)

      res.json({message: "register create"});
    } else {
      res.send("user already exist");
    }
};

module.exports = register;
