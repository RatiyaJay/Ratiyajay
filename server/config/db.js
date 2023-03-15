const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://jay:jay@sdp.ufhgrw2.mongodb.net/test?retryWrites=true&w=majority')
        console.log("Mongo DB Connected ")
    }
    catch(err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB