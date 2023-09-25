const mongoose = require('mongoose');


const EventSchema = new mongoose.Schema({
    eventTitle: {
        type: String,
        required: [true, 'Title required'],
        minLength: [2, 'Title must be at least 2 characters'],
        maxLength: 500},
    eventDate: {
        type: Date,
        required: [true, 'A date is required']},
    eventLocation: {
        type: String,
        required: [true, 'Location required'],
        minLength: [4, 'Location must be at least 4 characters'],
        maxLength: 500},
    eventDetails: {
        type: String,
        required: [true, 'Details required'],
        minLength: [4, 'Details must be at least 4 characters'],
        maxLength: 5000},
    likes: {
        type: Number,
        default: 0,
        }   
}, {timestamps:true})

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;