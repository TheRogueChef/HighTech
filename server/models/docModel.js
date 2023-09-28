const mongoose = require('mongoose');


const DocSchema = new mongoose.Schema({
    docTitle: {
        type: String,
        required: [true, 'Title required'],
        minLength: [2, 'Title must be at least 2 characters'],
        maxLength: 500},
    docDate: {
        type: Date},
    docAuthor: {
        type: String,
    },
    docLocation: {
        type: String,
        maxLength: 500},
    docDetails: {
        type: String,
        required: [true, 'Details required'],
        minLength: [4, 'Details must be at least 4 characters'],
        maxLength: 3000},
    likes: {
        type: Number,
        default: 0,
        }   
}, {timestamps:true})

const Doc = mongoose.model('Doc', DocSchema);

module.exports = Doc;