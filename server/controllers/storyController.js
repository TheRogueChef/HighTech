const Story = require('../models/storyModel');

module.exports={

allStories: (req, res) => {
    Story.find({})
        .then((allStories) => {
            res.json(allStories)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

oneStory: (req, res) => {
    Story.findOne({_id: req.params.id})
        .then((story) => {
            res.json(story)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

createStory: (req, res) => {
    Story.create(req.body)
        .then((newStory) => {res.json(newStory)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

updateStory: (req, res) => {
    Story.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then((updatedStory) => {res.json(updatedStory)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},

deleteStory: (req, res) => {
    Story.deleteOne({_id: req.params.id})
        .then((deleteConfirmation) => {
            res.json(deleteConfirmation)
        })
        .catch((err) => {res.status(500).json({message: 'Something went wrong', error:err})
        })
},
}