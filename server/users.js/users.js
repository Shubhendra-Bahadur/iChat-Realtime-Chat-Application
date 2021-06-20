const users = [];

export const addUser = ({ id, name, room }) => {
  //  first of all change name and room name if react Developer --> to reactdeveloper
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUsers = users.find(
    (user) => user.room === room && user.name === name
  );

  if (existingUsers) {
    // throw new Error('username already exist in this room');
    return { error: "username already exist in this Room" };
  }

  const user = { id, name, room };
  users.push(user);
  return { user };
};

export const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index != -1) {
    return users.splice(index, 1)[0];
  }
};

export const getUser = (id) => {
  return users.find((user) => user.id === id);
};

export const getUsersInRoom = (room) => {
  return users.filter((user) => user.room == room);
};