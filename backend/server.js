const express = require('express');
const bodyParser = require('body-parser');
const exec = require("child_process").exec;

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);

  exec(`./mvn.sh ${req.body.post}`, function(err, stdout, stderr){
    console.log("Executing Script")
    console.log(stdout)
  })
  res.send(
    `Executing DevOps Phases on Repo recieved: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));