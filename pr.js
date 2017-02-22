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

add(4, 5).then(
  (res) => console.log('Thanh cong:', res),
  (err) => console.log('That bai', err)
);

// console.log('Ket thuc');
