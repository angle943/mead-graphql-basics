const users = [
  {
    id: "1",
    name: "Andrew",
    email: "andrew@example.com",
    age: 27
  },
  {
    id: "2",
    name: "Sarah",
    email: "sarah@example.com"
  },
  {
    id: "3",
    name: "Mike",
    email: "mike@example.com"
  }
];

const posts = [
  {
    id: "1",
    title: "title 1",
    body: "body 1",
    published: true,
    author: "1"
  },
  {
    id: "2",
    title: "title 2",
    body: "body 2",
    published: true,
    author: "1"
  },
  {
    id: "3",
    title: "title 3",
    body: "body 3",
    published: false,
    author: "2"
  }
];

const comments = [
  {
    id: "1",
    text: "text 1",
    author: "2",
    post: "1"
  },
  {
    id: "2",
    text: "text 2",
    author: "3",
    post: "1"
  },
  {
    id: "3",
    text: "text 3",
    author: "1",
    post: "2"
  },
  {
    id: "4",
    text: "text 4",
    author: "2",
    post: "3"
  }
];

const db = {
  users,
  posts,
  comments
};

export default db;
