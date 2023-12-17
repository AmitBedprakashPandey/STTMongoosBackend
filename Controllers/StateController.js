const StateModel = require("../Model/StateModel");

exports.create = async (req, res) => {
  try {
    const statesData = req.body;
    const insertedCitys = await StateModel.insertMany(statesData);
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
    const cities = await StateModel.find(); // Fetch all cities from the database
    res.status(200).json(cities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};
exports.findActiveCities = async (req, res) => {
  try {
    const activeCities = await StateModel.find({ active: req.params.active });
    res.status(200).json({ data: activeCities });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "Internal Server Error" });
  }
};

exports.getById = async (req, res) => {
  const cityId = req.params.id;

  try {
    const city = await StateModel.findById(cityId);
    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }
    res.status(200).json({ data: city });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.update = async (req, res) => {
  const cityId = req.params.id;
  const updateData = {
    city: req.body.city,
    state: req.body.state,
    active: req.body.active,
  };

  try {
    const updatedCity = await StateModel.findByIdAndUpdate(cityId, updateData, {
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
    const deletedCity = await StateModel.findByIdAndDelete(cityId);
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
