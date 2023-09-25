const Event = require('../models/eventModel');

module.exports={

allEvents: (req, res) => {
    Event.find({})
        .then((allEvents) => {
            res.json(allEvents)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

oneEvent: (req, res) => {
    Event.findOne({_id: req.params.id})
        .then((event) => {
            res.json(event)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

createEvent: (req, res) => {
    Event.create(req.body)
        .then((newEvent) => {res.json(newEvent)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

updateEvent: (req, res) => {
    Event.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then((updatedEvent) => {res.json(updatedEvent)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

deleteEvent: (req, res) => {
    Event.deleteOne({_id: req.params.id})
        .then((deleteConfirmation) => {
            res.json(deleteConfirmation)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},
}