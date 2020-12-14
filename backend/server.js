const express = require("express");
const app = express();

const http = require("http");

const server = http.createServer(app);

const socketIo = require("socket.io");

const port =8080;
const db = require("./db")

app.get("/",(req,res)=>{
    res.send("Hello")
})


const io = socketIo(server);

io.on("connection", (socket) => {
    console.log("New client connected");
    
    let sql = "SELECT username,message FROM msg ORDER BY createdAt ASC";
    let query = db.query(sql, (err, result) => {
        if (err) {
        console.log(err);
        } else {
        socket.emit("init", result); 
        }
    });
       

     socket.on('message', (msg) => {
        let insertMessage = {
            username: msg.username,
            message: msg.message
        }
        let sql = "INSERT INTO msg SET ?";
        let insertQuery = db.query(sql, insertMessage, (err, result) => {
            if (err) {
              console.log(err);
            } else {
                socket.broadcast.emit('push', insertMessage);
            }
          });
     })

})

server.listen(port, () => console.log(`Listening on port ${port}`));



