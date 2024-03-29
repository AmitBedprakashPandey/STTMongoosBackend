const Model = require("../Model/CatagoryModel");

exports.create = async (req, res) => {
  try {
    const statesData = req.body;
    const insertedCitys = await Model.insertMany(statesData);
    res
      .status(200)
      .json({ message: "City created successfully", data: insertedCitys });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const cities = await Model.find(); // Fetch all cities from the database
    res.status(200).json(cities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  const cityId = req.params.id;
  const updateData = {
    catagory: req.body.catagory
  };

  try {
    const updatedCity = await Model.findByIdAndUpdate(cityId, updateData, {
      new: true,
    });
    if (!updatedCity) {
      return res.status(404).json({ message: "City not found" });
    }
    res
      .status(200)
      .json({ message: "City updated successfully", data: updatedCity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.delete = async (req, res) => {
  const cityId = req.params.id;
  try {
    const deletedCity = await Model.findByIdAndDelete(cityId);
    if (!deletedCity) {
      return res.status(404).json({ message: "City not found" });
    }
    res
      .status(200)
      .json({ message: "City deleted successfully", data: deletedCity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
