const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

main()
    .then(() => {
        console.log("connection successful");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

//Index Route
app.get("/chats", async(req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });
});

// let chat1 = new Chat({
//     from: "Luffy",
//     to: "Zoro",
//     msg: "I will be the King Of Pirates",
//     created_at: new Date(),
// });

// chat1.save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

let port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hiii Luna Stella</h1>");
});

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});