const router = require("express").Router();
const performanceController = require("../../controllers/performanceController");

// Matches with "/api/announcements"
router.route("/")
  .get(performanceController.findAll)
  .post(performanceController.create);

// Matches with "/api/announcements/:id"
router
  .route("/:id")
  .get(performanceController.findById)
  .put(performanceController.update)
  .delete(performanceController.remove);

module.exports = router;
