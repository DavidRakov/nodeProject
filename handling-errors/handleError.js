const handleError = (res, status, error) => {
  console.error(error.message);
  res.status(status).send(error.message);
};

exports.handleError = handleError;
