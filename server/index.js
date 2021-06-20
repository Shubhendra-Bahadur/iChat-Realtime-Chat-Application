import express from "express";
import { Server } from "socket.io";
import chatRoutes from "./routes/router.js";
import cors from "cors";
import {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} from "./users.js/users.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(chatRoutes);
app.use(cors());

const server = app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});

const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) {
      return callback({ error: error });
    }

    socket.emit("message", {
      user: "admin",
      text: `${user.name} , welcome to the ${user.room}`,
    });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${(user, name)} has joined the room`,
    });

    socket.join(user.room);
    io.to(user?.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user?.room).emit("message", { user: user?.name, text: message });
    io.to(user?.room).emit("roomData", {
      room: user?.room,
      users: getUsersInRoom(user.room),
    });
    callback();
  });

  socket.on("disconnect", function () {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user?.room).emit("message", {
        user: "admin",
        text: `${user.name} has left`,
        disconnect:"disconnected"
      });
    }
  });
});
