const Doc = require('../models/docModel');

module.exports={

allDocs: (req, res) => {
    Doc.find({})
        .then((allDocs) => {
            res.json(allDocs)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

oneDoc: (req, res) => {
    Doc.findOne({_id: req.params.id})
        .then((doc) => {
            res.json(doc)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

createDoc: (req, res) => {
    Doc.create(req.body)
        .then((newDoc) => {res.json(newDoc)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

updateDoc: (req, res) => {
    Doc.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then((updatedDoc) => {res.json(updatedDoc)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

deleteDoc: (req, res) => {
    Doc.deleteOne({_id: req.params.id})
        .then((deleteConfirmation) => {
            res.json(deleteConfirmation)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},
}