const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



//Socket.io
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('User Disconnected');
  });
  socket.on('example_message', function(msg){
    io.sockets.emit('example_message', msg);
  });
  socket.on('notification',function(msg){
    console.log("you got a notification: "+msg );
  });
  socket.on('join', function(room){
    socket.join(room);
    console.log("joined a room: "+room);
  });
  socket.on('reload',function(room){
    socket.to(room).emit('reload','reload');
  })
});
// Connect to the Mongo DB
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://yechan:Password1!@cluster0-u3bak.mongodb.net/edustation?retryWrites=true&w=majority", { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});


// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
