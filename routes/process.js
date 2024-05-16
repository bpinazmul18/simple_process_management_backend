const express = require('express')
const { validate, Process } = require('../models/process')
const formattedDate = require('../lib/processCreationDate')
const router = express.Router()
const pick = require('lodash/pick');

router.post('/', async (req, res) => {
    const { error, value } = validate({
        "PID": 442268,
        'Creation Time': formattedDate()
    })

    if (error) return res.status(400).send(error['details'][0].message)

    let process = await Process.findOne({ PID: value['PID'] })
    if (process) return res.status(403).send({
        message: 'PID already registered.'
    })

    process = await new Process(value)

    await process.save()

    const result = pick(process, ['PID', 'Creation Time'])

    return res.status(200).send({
        ...result
    })
})

module.exports = router