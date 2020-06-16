const router = require("express").Router();
const annoucementsController = require("../../controllers/annoucementsController");

// Matches with "/api/annoucements"
router.route("/")
  .get(annoucementsController.findAll)
  .post(annoucementsController.create);

// Matches with "/api/annoucements/:id"
router
  .route("/:id")
  .get(annoucementsController.findById)
  .put(annoucementsController.update)
  .delete(annoucementsController.remove);

module.exports = router;
