//getCustomer(1, (customer) => {
//  console.log('Customer: ', customer);
//  if (customer.isGold) {
//    getTopMovies((movies) => {
//      console.log('Top movies: ', movies);
//      sendEmail(customer.email, movies, () => {
//        console.log('Email sent...')
//      });
//    });
//  }
//});

async function output() {
  try {
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);

    const movie = await getTopMovies(customer.isGold);
    console.log('Top Movies: ', movie);
    const email = await sendEmail(customer.email, movie);
    console.log('Email send...');

  }
  catch (err) {
    console.log('Error', err);
  }

}
output();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      resolve({
        id: 1,
        name: 'Mosh Hamedani',
        isGold: false,
        email: 'email'
      });
    }, 4000);
  })
}

function getTopMovies(isGold) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isGold)
        resolve(['movie1', 'movie2']);
      else
        reject(new Error('Customer is not Gold member.....'))
    }, 4000);
  })
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  })
}