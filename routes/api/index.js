const router = require("express").Router();
const annoucementRoutes = require("./annoucements");

//Annoucement routes
router.use("/annoucements", annoucementRoutes);

module.exports = router;
