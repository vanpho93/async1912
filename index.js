let fs = require('fs');

fs.readFile('./a.txt', 'utf8', (err, data) => {
  if(err) return console.log(err + '');
  console.log(data);
  requestData(data, (err, res) => {
    fs.unlink(res.image, err => {
      
    })
  })
});

// let a = fs.readFileSync('./a.txt', 'utf8');
console.log(a);
