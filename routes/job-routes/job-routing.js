const express = require('express');
const router = express.Router();
const jobController = require('../../controllers/jobsControllers/job-controller');

// getJobs
router.get('/job/getJobs', jobController.getJobs);

router.get('/job/searchJob', jobController.searchJob);

// apply job 

router.post('/job/applyJob', jobController.applyJob)

module.exports = router;