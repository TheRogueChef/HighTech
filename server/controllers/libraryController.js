const Entry = require('../models/libraryModel');

module.exports={

allEntries: (req, res) => {
    Entry.find({})
        .then((allEntries) => {
            res.json(allEntries)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

oneEntry: (req, res) => {
    Entry.findOne({_id: req.params.id})
        .then((entry) => {
            res.json(entry)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

createEntry: (req, res) => {
    Entry.create(req.body)
        .then((newEntry) => {res.json(newEntry)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

updateEntry: (req, res) => {
    Entry.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then((updatedEntry) => {res.json(updatedEntry)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

deleteEntry: (req, res) => {
    Entry.deleteOne({_id: req.params.id})
        .then((deleteConfirmation) => {
            res.json(deleteConfirmation)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},
}