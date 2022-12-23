const express = require('express')
const cors = require("cors")
const app = express()
const port = 80

app.use(cors());
app.use(express.json());

app.post('/python', (req, res) => {
    console.log(req.body);
    res.json(
        { message: "success" }
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})