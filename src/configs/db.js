
const moongose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()

const connect=() =>{
    return moongose.connect(
        "mongodb+srv://VikashNikka:vikash123@cluster0.omzxjcj.mongodb.net/?retryWrites=true&w=majority"
    );
}


module.exports = connect;

//  mongoimport --uri mongodb+srv://akashbind12:akbind123@cluster0.rzyimmy.mongodb.net/test --collection mens --type json --file C:\Users\HP\Documents\jsondata\puma-mens --jsonArray