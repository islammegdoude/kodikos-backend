const jobModel = require('../../models/job-model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// const {setTokenCookie} = require('../middlewares/verifytoken.js')
require("dotenv").config();

// apply job 

async function applyJob(req, res, next){
    try{
        const { id_job_offer,token } = req.body;
        
        const applyJob = {
            status: res.status(200) ? 'successful' : 'err server',
            data : await jobModel.applyJob(id_job_offer,token),
          }
        res.status(200);
        res.json(applyJob);
    }catch (error) {
        next(error);
    }
}
async function getJobs(req, res, next){
    try {
        const jobs = {
          status: res.status(200) ? 'successful' : 'err server',
          data : await jobModel.getJobs(),
        }
        res.status(200);
        res.json(jobs);
        
        //setTokenCookie(res, login.data[0].token);
        
      } catch (error) {
        next(error);
      }
}

async function searchJob(req, res, next){
    try {
        const { text } = req.query
        const jobs = {
          status: res.status(200) ? 'successful' : 'err server',
          data : await jobModel.searchJob(text),
        }
        res.status(200);
        res.json(jobs);
        
        //setTokenCookie(res, login.data[0].token);
        
      } catch (error) {
        next(error);
      }

}


module.exports = {
    getJobs,
    searchJob,
    applyJob,
};