// Create a web server 
// 1. Create a web server

const express = require('express');
const app = express();
const port = 3000;

// 2. Create a route
app.get('/', (req, res) => {
    res.send('Hello World');
}
);

// 3. Listen to the port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);

// 4. Run the server
// node comments.js

