const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "John Doe",
        email: "john@example.com",
      },
      {
        name: "Piyush",
        email: "piyush@example.com",
      },
    ],
    _id: "1",
    chatName: "John Doe",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Piyush",
        email: "piyush@example.com",
      },
    ],
    _id: "2",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Anthony",
        email: "anthony@example.com",
      },
      {
        name: "Piyush",
        email: "piyush@example.com",
      },
    ],
    _id: "3",
    chatName: "Anthony",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "jon@example.com",
      },
      {
        name: "Piyush",
        email: "piyush@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "4",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Jane Doe",
        email: "jane@example.com",
      },
      {
        name: "Piyush",
        email: "piyush@example.com",
      },
    ],
    _id: "5",
    chatName: "Jane Doe",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "jon@example.com",
      },
      {
        name: "Piyush",
        email: "piyush@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "6",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports = chats