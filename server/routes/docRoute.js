const DocController = require('../controllers/docController')

module.exports = app => {
    app.get('/api/allDocs', DocController.allDocs)
    app.get('/api/oneDoc/:id', DocController.oneDoc)
    app.post('/api/newDoc', DocController.createDoc)
    app.put('/api/updateDoc/:id', DocController.updateDoc)
    app.delete('/api/allDocs/:id', DocController.deleteDoc)
}