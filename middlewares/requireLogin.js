module.exports = (req, res, next) => {
  if (!req.body.auth.info._id) {
    console.log("no login");
    return res.status(401).send({ error: "You must log in!" });
  }
  console.log("has login");
  next();
};
