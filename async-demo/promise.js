const p = new Promise((resolve, reject) => {
  // Kick off some Async work
  // ...

  setTimeout(() => {
    // To return Result
    resolve(1);

    // To return Error
    reject(new Error('message'))
  }, 2000)
})

p
  .then(result => console.log('Result : ', result))
  .catch(err => console.log('Error : ', err));