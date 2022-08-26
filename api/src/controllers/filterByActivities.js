const { Country,Activity } = require("../db.js");

const filterByActivities = async (req, res) => {
  try {
    let {nameActividad} = req.params
    let activities = await Country.findAll({include:{
      model:Activity, where:{name:nameActivity}
    }
  })
    res.json(activities)
  } catch (error) {
     res.status(404).send(`Tuvimos un error en el proceso de busqueda`);
  }
};

module.exports.filterByActivities = filterByActivities