const router = require("express").Router();
const posttagsController = require("../../controllers/posttagsController");

// Matches with "/api/posttags"
router
  .route("/")
  .get(posttagsController.findAll)
  .post(posttagsController.create);

// Matches with "/api/posttags/:id"
router
  .route("/:id")
  .get(posttagsController.findById)
  .put(posttagsController.update)
  .delete(posttagsController.remove);

module.exports = router;
