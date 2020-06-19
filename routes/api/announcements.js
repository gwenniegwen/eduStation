const router = require("express").Router();
const announcementsController = require("../../controllers/announcementsController");
// const auth = require("../../custom middleware/auth");

// Matches with "/api/announcements"
router.route("/"
)
  .get(announcementsController.findAll)
  .post(announcementsController.create);

// Matches with "/api/announcements/:id"
router
  .route("/:id")
  .get(announcementsController.findById)
  .put(announcementsController.update)
  .delete(announcementsController.remove);

module.exports = router;

