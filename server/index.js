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

    const testCases = [['racecar', 'True'], ['🤓😤😏', 'False'], ['copypasta', 'False']];
    const inProgress = [];
    const verdicts = [];

    // Holy shit this is some concurrency going on 🤓
    testCases.forEach((testCase, idx) => {
        inProgress.push(new Promise((resolve, reject) => {

            let options = {
                mode: 'text',
                pythonOptions: ['-u'], // get print results in real-time
                args: ['racecar', 'True']
            };

            PythonShell.run('from_user.py', options, function (err, results) {
                if (err) {
                    reject();
                    throw err;
                }
                verdicts.push(results[0])
                resolve(true);
            });
        }))
    })
    Promise.all(inProgress).then(() => {
        console.log(verdicts)
        res.json({
            verdicts
        })
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})