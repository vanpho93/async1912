let aPromise = new Promise((resolve, reject) => {
  // resolve();
  reject()
});

aPromise.then(
  () => console.log('Thanh cong'),
  () => console.log('That bai')
);

console.log('Ket thuc');
