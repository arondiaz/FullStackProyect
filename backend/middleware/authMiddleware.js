const checkAuth = (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    console.log("Si tiene token");
  }
  const error = new Error("Token no válido");
  res.status(403).json({ msg: error.msg });

  next();
};
export default checkAuth;
