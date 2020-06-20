const router = require("express").Router();
const commentController = require("../../controllers/commentController");

// Matches with "/api/comment"
router.route("/")

  .post(commentController.create);

router.route("/post/:id")
  .get(commentController.findAll)
  .delete(commentController.removeAll);

// Matches with "/api/comment/:id"
router
  .route("/:id")
  .get(commentController.findById)
  .put(commentController.update)
  .delete(commentController.remove);

module.exports = router;
