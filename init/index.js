// const mongoose=require('mongoose')

// const initData=require("./data.js")
// const listing=require("../models/listing.js");




// async function main() {
//    mongoose.connect("");
// }
// main().then(()=>{
//     console.log("successful connection to db");
// })
// .catch((err)=>{
//     console.log(err);
// })

// const initDB =async()=>{
//    await listing.deleteMany({});
//    //initData.data.map((obj)=>({...obj,owner:}))
//    await listing.insertMany(initData.data);
//    console.log("data was initialized")
// }

// initDB();


const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://mounika:mounika@cluster0.2q38qw5.mongodb.net/velloris?appName=Cluster0";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("successful connection to db");

    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);

    console.log("data was initialized");

    await mongoose.connection.close();
}

main().catch((err) => {
    console.log(err);
});