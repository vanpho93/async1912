let fs = require('fs');

let read = (directory) => {
  return new Promise((resolve, reject) => {
    fs.readFile(directory, 'utf8', (err, data) => {
      if(err) return reject(err);
      resolve(data);
    })
  });
}

read('./a.txt')
.then(
  data => console.log(data),
  err => console.log(err)
)
