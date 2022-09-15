
function logger (res, req, next) {
  console.log('Logging...');
  next();
}

module.exports = logger;