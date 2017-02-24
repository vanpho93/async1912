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

let tinhDienTich = async (a, b, h) => {
  let ab = await add(a, b);
  let abh = await mul(ab, h);
  let square = await div(abh, 2);
  console.log('ket qua ' + square);
}


tinhDienTich(4, 5, 6);
