const router = require("express").Router();
const categoryRoutes = require("./categories");
const tagRoutes = require("./posttags");
const postRoutes = require("./posts");

var db = require("../../models");

// Live Athlete Forum routes
router.use("/categories", categoryRoutes);
router.use("/posttags", tagRoutes);
router.use("/posts", postRoutes);

router.route("/savepost").post(function(req, res) {
  console.log("We saved the post!", db);
  db.posts.create(req.body).then(confirmationFromDB => {
    console.log("We have confirmation", confirmationFromDB);
    res.json(confirmationFromDB);
  });
});

module.exports = router;
