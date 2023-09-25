const EventController = require('../controllers/eventController')

module.exports = app => {
    app.get('/api/allEvents', EventController.allEvents)
    app.get('/api/oneEvent/:id', EventController.oneEvent)
    app.post('/api/newEvent', EventController.createEvent)
    app.put('/api/updateEvent/:id', EventController.updateEvent)
    app.delete('/api/allEvents/:id', EventController.deleteEvent)
}