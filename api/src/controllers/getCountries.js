const axios = require("axios");
const { Country, Activity } = require(".././db.js");

const getApiCountries = async (req, res) => {
  let apiGetCountries = await axios.get("https://restcountries.com/v3/all");
  let countryInfo = apiGetCountries.data.map(async (el) => {
    return {
      id:el.cca3,
      name: el.name.common,
      capital: el.capital ? el.capital[0] : capital="---",
      flags: el.flags[1],
      continents: el.continents[0],
      subregion: el.subregion ? subregion = el.subregion: subregion="-",
      area: el.area,
      population: el.population,
    };
  });
  return Promise.all(countryInfo);
};

const getCountries = async (req, res) => {
  try {
    let { name } = req.query;
    var db = await Country.findAll({include:Activity});
    if (!db.length) {
      await Country.bulkCreate(await getApiCountries());
      db = await Country.findAll({include:Activity});
    }
    if (name) {
      let countriesFilter = db.filter((c) =>
        c.name.toLowerCase().includes(name.toLowerCase())
      );
      if (!countriesFilter.length){
        return res
        .status(404)
        .json({msg:`No se encuentran coincidencias para el dato pasado`});
      }
      // let result1 = countryFilter.map((info) => {
      //   return {id:info.id, name: info.name, img: info.img, continent: info.continent , population:info.population};
      // });
      return res.json(countriesFilter);
    }
    // let result2 = db.map((info) => {
    //   return {id:info.id, name: info.name, img: info.img, continent: info.continent, population:info.population };
    // });
    return res.json(db);
  } catch (error) {
    console.error(error)
    res.status(404).json(`Tuvimos un error en el proceso de busqueda`);
  }
};
module.exports.getCountries = getCountries;