// Import express
const express = require("express");
// Import cors
const cors = require('cors')

const json = require('./test.json')

// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());

const router = express.Router();

const getJSON = async (req,res) => {
    res.send(json);
} 

router.get('/test',getJSON )

// use router
app.use(router);

const port = 5000;
// listen on port
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
