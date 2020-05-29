/**
 * helper function to write response for requests
 * @param {Object} data Data Object
 * @param {Errr} err Error Object
 * @param {Object} res response Objecy
 */
function writeResponse(data, err, res) {
  if(err !== null) {
    let code = 500;
    if(err.code) code = err.code;
    return res.status(code).json({
      error: true,
      message: err.message || err,
    });
  }
  res.status(200).json({
    error: false,
    message: 'success',
    ...data
  });
}

/**
 * Depricated
 * Takes a promise and returns some data
 * @param {Promise} promise 
 * @returns {Array} [res, err]
 */
function invoker(promise) {
  return new Promise( (resolve, reject) => {
    promise
      .then((res) => resolve([res, null]))
      .catch((err) => reject([null, err]));
  });
}

module.exports = {
  invoker,
  writeResponse,
};