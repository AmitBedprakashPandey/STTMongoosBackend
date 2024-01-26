const Model = require("../Model/UserModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Key='AmitPandey9137976758'
// Register user
exports.register = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const hashedPassword = await bcrypt.hash(pass, 10);
    const foundUser = await Model.findOne({email:email});
    if(foundUser){
      res.status(500).json({message:'User Already exist'})
    }
    const user = new Model({ email, pass: hashedPassword });
    const inserted = await Model.create(user);
    res
      .status(200)
      .json({ message: "Created Successfully", token: inserted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// Login user
exports.login =async (req,res)=>{
  try {
    const {email,pass} = req.body;
    const user = await Model.findOne({email});
    if (!user) {
      return res.status(401).json({ error: 'User Not found!' });
      }
      const passwordMatch = await bcrypt.compare(pass, user.pass);
 if (!passwordMatch) {
 return res.status(401).json({ error: 'Please Check Password' });
 }
 const token = jwt.sign({ userId: user.email }, Key, {
  expiresIn: '1h',
  });
  res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
}
// Update user
exports.update = async (req, res) => {
  const id = req.params.id;
  const updateData = {
    data: req.body.data,
    state: req.body.state,
    active: req.body.active,
  };

  try {
    const updateddata = await Model.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updateddata) {
      return res.status(404).json({ message: "data not found" });
    }
    res
      .status(200)
      .json({ message: "data updated successfully", data: updateddata });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

