const Joi = require('joi')
const mongoose = require('mongoose')

const processSchema = new mongoose.Schema({
    PID: {
        type: Number,
        required: true,
        validate: {
            validator: function (val) {
                return val.toString().length === 6
            },
            message: val => `${val.value} has to be 6 digits`
        }
    },
    'Creation Time': {
        type: String,
        required: true,
    },
}, { timestamps: true })

const Process = new mongoose.model('Process', processSchema)


function validateProcess(process) {
    const schema = Joi.object({
        PID: Joi.number().integer().min(10 ** 5).max(10 ** 6 - 1).required().messages({
            'number.min': 'PID should be 6 digit.',
            'number.max': 'PID should be 6 digit.'
        }),
        'Creation Time': Joi.string().required(),
    })

    return schema.validate(process)
}

module.exports.validate = validateProcess
module.exports.Process = Process