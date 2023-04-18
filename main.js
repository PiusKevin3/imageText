const express = require('express');
const { spawn } = require('child_process');
const app = express();

// const getPyData = (data) => {
//   return data
// }

app.get('/run-python-script', (req, res) => {
  
      const process = spawn('python', ['./ocrIndex.py']);

      const getPyData = (data) => {
        return data
      }


      process.stdout.on('data', (data) => {
        // getPyData(data.toString())
      // console.log(data.toString())
      // return getPyData(data.toString())
      return res.json(data.toString())



      });

      process.stderr.on('data', (data) => {
        console.error(`Error: ${data}`);
        res.status(500).send(`Error: ${data}`);
      });

      process.on('close', (code) => {
        console.log(`Script execution finished with code: ${code}`);
        // res.send(result);
        // console.log(res.json(getPyData))
      //  return res.json(getPyData)
      // console.log(getPyData())
      });

      // console.log(getPyData());


});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
