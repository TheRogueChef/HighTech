const mongoose = require('mongoose');


const StorySchema = new mongoose.Schema({
    storyTitle: {
        type: String,
        required: [true, 'Title required'],
        minLength: [2, 'Title must be at least 2 characters'],
        maxLength: 500},
    storyDate: {
        type: Date,
        required: [true, 'A date is required']},
    storyAuthor: {
        type: String,
        required: [true, 'An author is required']},
    storyLocation: {
        type: String,
        minLength: [4, 'Location must be at least 4 characters'],
        maxLength: 500},
    storyDetails: {
        type: String,
        required: [true, 'Details required'],
        minLength: [4, 'Details must be at least 4 characters'],
        maxLength: 5000},
    likes: {
        type: Number,
        default: 0,
        }   
}, {timestamps:true})

const Story = mongoose.model('Story', StorySchema);

module.exports = Story;