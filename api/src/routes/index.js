const { Router } = require("express");

//controllers
const { getCountries} = require('../controllers/getCountries');
const { getCountriesById } = require('../controllers/getCountriesById');
const { getEveryActivity } = require('../controllers/getEveryActivity');
const { postActivities } = require('../controllers/postActivities');
const { filterByActivities } = require('../controllers/filterByActivities');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


//.get every country
router.get('/countries',getCountries);
//.get that brings every country by ID and also The Activities
router.get('/countries/:id', getCountriesById)
//filter countrys by activities
router.get('/activities/:nameActivity', filterByActivities)
//create an activity
router.post('/activities', postActivities)
//get every activity
router.get('/allActivities', getEveryActivity)



module.exports = router;
