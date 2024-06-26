// D:\Nodejs\index.js
const app = require('./app');  // Ensure the correct path
const db=require('./config/db');
const User = require('./model/user.model');
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});