const { Country,Activity } = require("../db.js");

const getEveryActivity = async (req, res) => {
  try {
    let allActivities = await Activity.findAll()
    res.json(allActivities)
  } catch (error) {
     res.status(404).send(`Tuvimos un error en el proceso de busqueda`);
  }
};

module.exports.getEveryActivity = getEveryActivity