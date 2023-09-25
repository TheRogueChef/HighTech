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
    const entryId = req.params.id;
    const newReview = req.body.review;

    Entry.findById(entryId)
        .exec()
        .then((entry) => {
            if (!entry) {
                return res.status(404).json({ message: 'Entry not found' });
            }
            entry.reviews.push(newReview);
            entry.save()
                .then((updatedEntry) => {
                    return res.status(200).json({ message: 'Entry updated successfully', updatedEntry });
                })
                .catch((err) => {
                    return res.status(500).json({ message: 'Error updating entry in the database', error: err });
                });
        })
        .catch((err) => {
            return res.status(500).json({ message: 'Error fetching entry from the database', error: err });
        });
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