const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
const router = express.Router();

// ============= GET endpoints 

router.get('/', (req, res) => {
    db('cohorts')
    .then(cohorts => {
        res.status(200).json(cohorts)
    })
    .catch(() => {
        res.status(500).json({error: 'could not retrieve table.'})
    })
});

router.get('/:id', (req, res) => {
    db('cohorts').where({id: req.params.id})
    .then(cohort => {
        res.status(200).json(cohort)
    })
    .catch(() => {
        res.status(500).json({error: 'could not retrieve data by id.'})
    })
});

router.get('/:id/students', (req, res) => {
    db('students').where({cohort_id: req.params.id})
    .then(students => {
        res.status(200).json(students)
    })
    .catch(() => {
        res.status(500).json({error: 'could not retrieve the cohort students.'})
    })
});


// ============= POST endpoint

router.post('/', (req, res) => {
    db.insert(req.body).into('cohorts')
    .then(() => {
        res.status(201).json(req.body)
    })
    .catch(() => {
        res.status(500).json({error: 'could not create cohort.'})
    })
});

// ============= DELETE endpoint

router.delete('/:id', (req, res) => {
    db('cohorts').where({id: req.params.id}).del()
    .then(() => {
        res.status(200).json(req.body)
    })
    .catch(() => {
        res.status(500).json({error: 'could not delete cohort.'})
    })
});

// ============= PUT endpoint

router.put('/:id', (req, res) => {
    const updatedData = req.body;
    db('cohorts').where({id: req.params.id}).update(updatedData)
    .then(() => {
        res.status(200).json(updatedData)
    })
    .catch(() => {
        res.status(500).json({error: 'could not update cohort.'})
    })
});












module.exports = router;