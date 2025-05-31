const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 500);
  });
  next();
});

// eslint-disable-next-lines consistent-return
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'No token provided' });
  }
  next();
});

server.use(jsonServer.defaults());
server.use(router);

server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = [] } = db;
    const userFromDb = users.find((user) => user.username === username && user.password === password);
    if (username) {
      return res.json(userFromDb);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

server.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server is running on Port 8080');
});
