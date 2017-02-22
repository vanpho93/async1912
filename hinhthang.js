function tinhDienTich(a, b, h){
  return (a + b) * h / 2;
}

let add = (a, b, cb) => {
  setTimeout(() => {
    if(typeof a != 'number' && typeof b != 'number'){
      return cb(new Error('Tham so phai co kieu number'))
    }
    cb(undefined, a + b);
  }, 1000);
}

add(1, 2, (err, result) => {
  if(err) return console.log(err);
  console.log('Ket qua:', result);
})
