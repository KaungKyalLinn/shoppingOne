const ErrorHandling = (err,req,res,next) => {
  const errStatus = res.statusCode ? res.statusCode : 500;
  res.status(errStatus)

  res.json({
    massage : err.massage,
    stack : process.env.NODE_ENV === "development" ? err.stack : null
  })
}

module.exports = {ErrorHandling};