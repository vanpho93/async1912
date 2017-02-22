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

let mul = (a, b, cb) => {
  setTimeout(() => {
    if(typeof a != 'number' && typeof b != 'number'){
      return cb(new Error('Tham so phai co kieu number'))
    }
    cb(undefined, a * b);
  }, 1000);
}

let div = (a, b, cb) => {
  setTimeout(() => {
    if(typeof a != 'number' && typeof b != 'number'){
      return cb(new Error('Tham so phai co kieu number'))
    }
    if(b == 0) return cb(new Error('Chia cho 0'));
    cb(undefined, a / b);
  }, 1000);
}

add(1, 2, (err, result) => {
  if(err) return console.log(err);
  console.log('Ket qua:', result);
})
