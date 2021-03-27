const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')
const router = require('express').Router();


router.use('/api', apiRoutes);
router.use('/', homeRoutes)

module.exports = router;


