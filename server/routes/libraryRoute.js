const LibraryController = require('../controllers/libraryController')


module.exports = app => {
    app.get('/api/allEntries', LibraryController.allEntries)
    app.get('/api/oneEntry/:id', LibraryController.oneEntry)
    app.post('/api/newEntry', LibraryController.createEntry)
    app.put('/api/updateEntry/:id', LibraryController.updateEntry)
    app.delete('/api/allEntries/:id', LibraryController.deleteEntry)
}