const router = require("express").Router();
const commentController = require("../../controllers/commentController");

// Matches with "/api/comment"
router.route("/")
  .post(commentController.create);

//Mathes with "/api/comment/post/:id"
router.route("/post/:id")
  .get(commentController.findAll);

// Matches with "/api/comment/:id"
router.route("/:id")
  .get(commentController.findById)
  .put(commentController.update)
  .delete(commentController.remove);

module.exports = router;
