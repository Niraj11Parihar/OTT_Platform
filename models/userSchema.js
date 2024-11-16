const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    rating : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    },
    quality : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})

const movieModel = mongoose.model('movieModel',userSchema);

module.exports = movieModel;