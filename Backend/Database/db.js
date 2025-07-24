
let mongoose = require("mongoose");


let db = mongoose
    .connect("mongodb://127.0.0.1/mynewproject")
    .then(() => {
        console.log("Database Connected")
    })
    .catch(() => {
        console.log("Database not Connected")
    });

module.exports = db;