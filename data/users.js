const mongoose = require("mongoose");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  joinAt: { type: Date, default: Date.now },
  lastTime: { type: Date, default: Date.now },
  active: { type: Boolean, default: false },
  email: {
    type: String,
    required: [true, "Email is requierd"],
    unique: [true, "Email Exist"],
    validate: {
      validator: function (v) {
        return /(\w*\@\w*\.\w*)/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  userName: {
    type: String,
    required: [true, "userName is requierd"],
    unique: [true, "userName exist"],
  },
  firstName: { type: String, required: [true, "First name is requierd"] },
  lastName: { type: String, required: [true, "Last name is requierd"] },
  password: { type: String, required: [true, "password is requierd"] },
  forgetPassword: {
    token: { type: String, default: null },
    updateAt: { type: Date, default: Date.now },
  },
  userPicture: { type: String, default: "noimg" },
  show: { type: Boolean, default: true },
});

userSchema.post("findOne", async function (doc) {});

const User = mongoose.model("User", userSchema);

const findAll = async function () {
  console.log("\x1b[36m%s\x1b[0m", `find All users ...`);
  let r = { res: null, err: null };
  try {
    r.res = await User.find();
    console.log("\x1b[35m%s\x1b[0m", `All users founded ...`);
  } catch (e) {
    r.err = e;
    console.log("\x1b[31m%s\x1b[0m", `Error with Finding Users ==> ${e}`);
  }

  return r;
};

const addnew = async function (email, firstName, lastName, password) {
  console.log(
    "\x1b[36m%s\x1b[0m",
    `Adding New User ${firstName} ${lastName} with email ${email} ...`
  );
  let r = { res: null, err: null, found: true };
  const user = new User({
    email,
    firstName,
    lastName,
    userName: firstName + lastName,
    password,
  });

  const er = user.validateSync();
  if (er) {
    r.err = er.message;
    console.log("\x1b[31m%s\x1b[0m", `Error with Validate new User ==> ${er}`);
    return r;
  }

  try {
    r.res = await user.save();
    r.found = false;
    console.log("\x1b[35m%s\x1b[0m", `User saved ${firstName} ${lastName} ...`);
  } catch (e) {
    r.err = e.message;
    console.log("\x1b[31m%s\x1b[0m", `Error with Adding new User ==> ${e}`);
  }

  return r;
};

const findOne = async function (email, password, third = false) {
  console.log("\x1b[36m%s\x1b[0m", `Finding User with email ${email} ...`);
  const flt = third ? { email } : { email, password };
  let r = { res: null, err: null };
  try {
    r.res = await User.findOne(flt);
    console.log("\x1b[35m%s\x1b[0m", `Find User ==> ${email}`);
  } catch (e) {
    console.log("\x1b[31m%s\x1b[0m", `Error with finding User ==> ${e}`);
    r.err = e;
  }

  return r;
};

const findById = async function (_id) {
  console.log("\x1b[36m%s\x1b[0m", `Find User by ID ${_id} ...`);
  const r = { res: null, err: null };
  try {
    r.res = await User.findOne({ _id });
    console.log("\x1b[35m%s\x1b[0m", `Find User by ID ==> ${_id}`);
  } catch (e) {
    r.err = e;
    console.log(
      "\x1b[31m%s\x1b[0m",
      `Error with finding user by ID ${_id}  ==> ${e}`
    );
  }

  return r;
};

const findByEmail = async function (email) {
  console.log("\x1b[36m%s\x1b[0m", `Find User by email ${email} ...`);
  const r = { res: null, err: null };
  try {
    r.res = await User.findOne({ email });
    console.log("\x1b[35m%s\x1b[0m", `Find User by email ==> ${email}`);
  } catch (e) {
    r.err = e;
    console.log(
      "\x1b[31m%s\x1b[0m",
      `Error with finding user by email ${email}  ==> ${e}`
    );
  }

  return r;
};

const reqResetPassword = async function (email) {
  console.log("\x1b[36m%s\x1b[0m", `Req Reset Password User ${email} ...`);
  const r = { res: null, err: null };
  try {
    const token = mongoose.Types.ObjectId();
    const upd = await User.findOneAndUpdate(
      { email },
      {
        "forgetPassword.token": token,
        "forgetPassword.updateAt": Date.now(),
      }
    );
    r.res = { token, email, user: upd };
    console.log(
      "\x1b[35m%s\x1b[0m",
      `User Updated to Reset Password ==> ${email}`
    );
  } catch (e) {
    r.err = e;
    console.log(
      "\x1b[31m%s\x1b[0m",
      `Error with Req Reset Password User ${email}  ==> ${e}`
    );
  }

  return r;
};

const confirmResetPassword = async function (email, token) {
  console.log("\x1b[36m%s\x1b[0m", `confirm Reset Password User ${email} ...`);
  const r = { res: null, err: null };
  try {
    r.res = await User.findOne({ email, "forgetPassword.token": token });
    console.log(
      "\x1b[35m%s\x1b[0m",
      `User Confirm to Reset Password ==> ${email}`
    );
  } catch (e) {
    r.err = e;
    console.log(
      "\x1b[31m%s\x1b[0m",
      `Error with Confirm Reset Password User ${email}  ==> ${e}`
    );
  }

  return r;
};

const resetPassword = async function (email, password) {
  console.log("\x1b[36m%s\x1b[0m", `Reset Password User ${email} ...`);
  const r = { res: null, err: null };
  try {
    r.res = await User.updateOne({ email }, { password });
    console.log("\x1b[35m%s\x1b[0m", `User Reset Password ==> ${email}`);
  } catch (e) {
    r.err = e;
    console.log(
      "\x1b[31m%s\x1b[0m",
      `Error with Reset Password User ${email}  ==> ${e}`
    );
  }

  return r;
};

const activeAccount = async function (_id) {
  console.log("\x1b[36m%s\x1b[0m", `Active the account User ${_id} ...`);
  const r = { res: null, err: null };
  try {
    r.res = await User.updateOne({ _id }, { active: true });
    console.log("\x1b[35m%s\x1b[0m", `User account activated ==> ${_id}`);
  } catch (e) {
    r.err = e;
    console.log(
      "\x1b[31m%s\x1b[0m",
      `Error with Active User account ${_id}  ==> ${e}`
    );
  }

  return r;
};

const updateUser = async function (
  _id,
  userName,
  firstName,
  lastName,
  userPicture
) {
  console.log("\x1b[36m%s\x1b[0m", `Update User ${_id} ...`);
  const r = { res: null, err: null };
  try {
    r.res = await User.updateOne(
      { _id },
      { userName, firstName, lastName, userPicture }
    );
    console.log("\x1b[35m%s\x1b[0m", `User Updated ==> ${_id}`);
  } catch (e) {
    r.err = e;
    console.log(
      "\x1b[31m%s\x1b[0m",
      `Error with Updating User ${_id}  ==> ${e}`
    );
  }

  return r;
};

// --------------------------------------------------------------------------------------------

const setLastTime = async function (userId) {
  console.log("\x1b[36m%s\x1b[0m", `set last Time User ${userId} ...`);
  let r = { res: null, err: null };
  const time = new Date().toString();
  try {
    r.res = await User.updateOne({ _id: userId }, { lastTime: time });
    console.log(
      "\x1b[35m%s\x1b[0m",
      `Last time ${time} set to User ${userId} ...`
    );
  } catch (e) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      `error with setting last time to user ${userId} ==> ${e}`
    );
    r.err = e;
  }

  return r;
};

// --------------------------------------------------------------------------------------------

module.exports = {
  findAll,
  findById,
  findByEmail,
  addnew,
  reqResetPassword,
  resetPassword,
  confirmResetPassword,
  activeAccount,
  updateUser,
  findOne,
  setLastTime,
};
