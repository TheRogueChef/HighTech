const mongoose = require('mongoose');


const EntrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required'],
        minLength: [2, 'Name must be at least 2 characters'],
        maxLength: 500},
    distributor: {
        type: String,
        required: [true, 'Farm or distributor required'],
        minLength: [2, 'Name must be at least 2 characters'],
        maxLength: 500},
    strain: {
        type: String,
        required: [true, 'A strain is required']},
    shape: {
        type: String,
        required: [true, 'A shape is required']},
    totalTHC: {
        type: Number,
        required: [true, 'An amount is required']},
    totalCBD: {
        type: Number,
        required: [true, 'An amount is required']},
    totalTerpines: {
        type: Number,
        required: [true, 'An amount is required']},
    taste: {
        type: String,
        required: [true, 'A taste is required']},
    description: {
        type: String,
        required: [true, 'description required'],
        minLength: [2, 'Description must be at least 2 characters'],
        maxLength: 5000},
    likes: {
        type: Number,
        default: 0,
    }
}, {timestamps:true})

const Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;