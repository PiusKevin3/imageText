const express = require('express');
const { spawn } = require('child_process');
const app = express();

const process = spawn('python', ['./ocrIndex.py']);

const getPyData = (data) => {
  console.log("9 : " + data);
}


process.stdout.on('data', (data) => {
  getPyData(data.toString())

});

process.stderr.on('data', (data) => {
  console.error(`Error: ${data}`);
  res.status(500).send(`Error: ${data}`);
});

process.on('close', (code) => {
  console.log(`Script execution finished with code: ${code}`);
  // res.send(result);
});


/*
app.get('/run-python-script', (req, res) => {
  const process = spawn('python', ['./ocrIndex.py']);

  let result = '';
  process.stdout.on('data', (data) => {
    result += data.toString();
  });

  process.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
    res.status(500).send(`Error: ${data}`);
  });

  process.on('close', (code) => {
    console.log(`Script execution finished with code: ${code}`);
    res.send(result);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
*/