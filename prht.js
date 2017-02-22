let add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a != 'number' || typeof b != 'number'){
        return reject(new Error('Tham so phai co kieu number'))
      }
      resolve(a + b);
    }, 1000);
  });
}

let mul = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a != 'number' || typeof b != 'number'){
        return reject(new Error('Tham so phai co kieu number'))
      }
      resolve(a * b);
    }, 1000);
  });
}

let div = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a != 'number' || typeof b != 'number'){
        return reject(new Error('Tham so phai co kieu number'))
      }
      if(b == 0){
        return reject(new Error('Chia cho 0'))
      }
      resolve(a / b);
    }, 1000);
  });
}

// 4, 5, 6

add(4, 5)
.then((res) => mul(res, 6))
.then(result => div(result, 2))
.then(square => console.log(square))
