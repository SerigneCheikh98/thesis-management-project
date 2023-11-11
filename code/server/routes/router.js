const express = require('express');
const auth = require('./auth/auth.js');
const professor = require('./controller/professor.js')

const router = express.Router();

/*session routes*/

router.post('/sessions', auth.login);
router.get('/sessions/current', auth.getCurrentSession);
router.delete('/sessions/current', auth.isLoggedIn, auth.logout);

/*other routes down there, use the middleware isloggedin to protect the route (hopefully) */
router.get('/cosupervisors', professor.getPossibleCosupervisors);
router.get('/degrees', professor.getDegreesInfo);
router.post('/newproposal',auth.isLoggedIn, professor.insertNewProposal);

module.exports = router;