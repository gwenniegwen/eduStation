const router = require("express").Router();
const calendarController = require("../../controllers/calendarController");

// Matches with "/api/calendar"
router.route("/")
  .get(calendarController.findAll)
  .post(calendarController.create);

// Matches with "/api/calendar/:id"
router
  .route("/:id")
  .get(calendarController.findById)
  .put(calendarController.update)
  .delete(calendarController.remove);

module.exports = router;
