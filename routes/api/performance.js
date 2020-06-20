const router = require("express").Router();
const performanceController = require("../../controllers/performanceController");

// Matches with "/api/performance"
router.route("/")
  .get(performanceController.findAll)
  .post(performanceController.create);

// Matches with "/api/performance/:id"
router
  .route("/:id")
  .get(performanceController.findById)
  .put(performanceController.update)
  .delete(performanceController.remove);

module.exports = router;
