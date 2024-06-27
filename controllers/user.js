const User = require("../models/user");
async function handleAllUser(req,res){
    const Dataset = await User.find({});
  // console.log(req.headers);
  // res.setHeader("X-MyName", "Abhijeet"); // custom header Alway add X to custom headers
  return res.json(Dataset);
};
async function getUserById(req,res){
    const user = await User.findById(req.params.id);
    if (!user) res.status(400).json({ msg: "User not foun in databases" });
    return res.json(user);  
};

async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id, { LastName: "Change" });
    return res.json({ status: "Succes" });
};

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Succes" });
};

async function handleCreatedUser(req,res){
    const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.email ||
    !body.gender ||
    !body.last_name
  ) {
    return res
      .status(400)
      .json({ msg: "All Data filed is not filled propeery " });
  }
  const result = await User.create({
    firstName: body.first_name,
    LastName: body.last_name,
    email: body.email,
    gender: body.gender,
    job_Title: body.job_title,
  });
  console.log(result);
  return res.status(201).json({ msg: "Succes" ,id: result._id});
};

module.exports = {
    handleAllUser,
    getUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreatedUser,
};