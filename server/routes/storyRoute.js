const StoryController = require('../controllers/storyController')

module.exports = app => {
    app.get('/api/allStories', StoryController.allStories)
    app.get('/api/oneStory/:id', StoryController.oneStory)
    app.post('/api/newStory', StoryController.createStory)
    app.put('/api/updateStory/:id', StoryController.updateStory)
    app.delete('/api/allStories/:id', StoryController.deleteStory)
}