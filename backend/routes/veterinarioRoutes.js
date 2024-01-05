import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("desde api/veterinarios");
});

export default routes;
