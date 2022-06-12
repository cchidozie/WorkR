const router = require('express').Router();
const Job = require('../models/jobs');

//Get all jobs
router.route('/').get((req, res) => {
  Job.find()
    .then((jobs) => {
      res.json(jobs);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

//Add new jobs
router.route('/add').post((req, res) => {
  const { name, location, image, rating, category} = req.body;
  const newJob = new Job({
    name,
    location,
    image,
    rating,
    category,
  });

  newJob
    .save()
    .then(() => res.json('user added'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
