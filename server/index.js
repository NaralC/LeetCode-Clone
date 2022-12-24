const fileSystem = require("fs")
const express = require('express')
const cors = require("cors")
const app = express()
const { PythonShell } = require("python-shell")
const port = 80

app.use(cors());
app.use(express.json());

app.post('/python', (req, res) => {
    fileSystem.writeFileSync('from_user.py', req.body.code);

    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        args: ['racecar', 'True']
    };

    PythonShell.run('from_user.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log(results)
        res.send({
            verdict: results
        })
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})