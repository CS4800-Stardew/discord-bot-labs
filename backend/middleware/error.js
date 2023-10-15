// error-handling middleware
const error = (err, req, res, next) => {
  res.status(500);
  res.send('Something failed.');
};

export default error;
