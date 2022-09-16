const p = Promise.resolve(1);
//const p3 = Promise.reject(new Error('Reasons for rejection...'));

p.then(result => console.log('Result ', result));
//p3.catch(err => console.log('Error ', err));

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async Operation 1...');
    resolve(1);
  }, 2000)
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async Operation 2...');
    resolve(2);
  }, 2000)
});

Promise.all([p1, p2])
  .then(result => console.log('Result : ', result))
  .catch(err => console.log('Error : ', err));