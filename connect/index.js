require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors')
const port = 4498
const { exec } = require('child_process');
var bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    exec(process.env.LYRAPATH + '/lyra-cli getinfo', (err, stdout, stderr) => {
        if (err) {
            res.send(err)
            return;
        }
        res.send(stdout)
    });
})

app.post('/', (req, res) => {
    let command = req.body.command
    if(command.indexOf('&&') === -1){
        if(command.indexOf('encryptwallet') === -1 && command.indexOf('stop') === -1){
            exec(process.env.LYRAPATH + '/lyra-cli ' + command, (err, stdout, stderr) => {
                if (err) {
                    res.send(err)
                    return;
                }
                res.send(stdout)
            });
        }else{
            res.send('NOOOPE! COMMAND NOT PERMITTED HERE ;-)')
        }
    }else{
        res.send('ARE YOU TRYING TO HACK THE SYSTEM? :-D')
    }
})

app.listen(port, () => console.log(`Scrypta connect listening on port ${port}!`))