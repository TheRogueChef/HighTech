const LikeController = require('../controllers/likeController')

module.exports = app => {
    app.post('/api/likeEntry', LikeController.incrementLikes)
}