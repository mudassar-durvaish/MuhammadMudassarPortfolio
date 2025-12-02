const mongoose = require('mongoose');

const VisitSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    ip: {
        type: String
    },
    country: {
        type: String,
        default: 'Unknown'
    },
    userAgent: {
        type: String
    }
});

module.exports = mongoose.model('Visit', VisitSchema);
