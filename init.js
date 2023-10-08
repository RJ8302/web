const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main()
    .then(() => {
        console.log("connection successful");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

let allChats = [{
    from: "Zoro",
    to: "Luffy",
    msg: "I will become King Of Hell",
    created_at: new Date(),
}, {
    from: "Luffy",
    to: "Sanji",
    msg: "I will become King Of Pirates",
    created_at: new Date(),
}, {
    from: "Goku",
    to: "Vegeta",
    msg: "I will become Super Saiyan",
    created_at: new Date(),
}, {
    from: "Ichigo",
    to: "Rukia",
    msg: "I will become Soul Reaper",
    created_at: new Date(),
}, {
    from: "Naruto",
    to: "Sasuke",
    msg: "I will become Hokage",
    created_at: new Date(),
}];

Chat.insertMany(allChats);