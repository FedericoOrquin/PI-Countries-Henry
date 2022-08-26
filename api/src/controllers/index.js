const axios = require('axios');
const {Country, Actividad,Op} = require('../db.js')

const getApiInfo = async () => {
    const apirUrl = await axios.get("https://restcountries.com/v3/all");
    const apiInfo = await apirUrl.data.map((el) => {
      return{
        id:el.cca3,
        name: el.name.common,
        capital: el.capital ? el.capital[0] : capital="---",
        flags: el.flags[1],
        continents: el.continents[0],
        subregion: el.subregion ? subregion = el.subregion: subregion="-",
        area: el.area,
        population: el.population,
      }
  
    });
    await Country.bulkCreate(apiInfo)
    
  };

  const getCountries = async (req, res) => {
    try {
      let  {name}  = req.query;
       const dataApi= await getApiInfo()
      const db = await Country.findAll({include:Actividad});
      if (!db.length) {
        await Country.bulkCreate(dataApi);
        db = await Country.findAll({include:Actividad});
      }
      if (name) {
        let countriesFilter = db.filter((c) =>
          c.name.toLowerCase().includes(name.toLowerCase())
        );
        if (!countriesFilter.length){
          return res
          .status(404)
          .send({msg:`No se encuentran coincidencias para el dato pasado`});
        }
        
        return res.status(200).send(countriesFilter);
      }
  
      return res.status(200).send(db);
    } catch (error) {
      console.error(error)
    }
  }; 


 
   const getDBinfo = async() => {
     
     return await Country.findAll({
      
      include:[{
        model: Actividad,
        attributes: ['name','duracion','temporada','dificultad','countriesS'],
        through:{
          attributes:[]
          }
      }]
    });
    
      
}
  
  const getAllCountries = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDBinfo();
    const AllData = apiInfo.concat(dbInfo);
    return AllData;
  };
 



  
module.exports={
    getCountries
}  