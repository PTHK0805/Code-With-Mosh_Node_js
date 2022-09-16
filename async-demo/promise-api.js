const p = Promise.resolve(1);
const p1 = Promise.reject(new Error('Reasons for rejection...'));

p.then(result => console.log('Result ', result));
p1.catch(err => console.log('Error ', err));