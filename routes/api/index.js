const router = require("express").Router();
const categoryRoutes = require("./categories");
const tagRoutes = require("./posttags");
const postRoutes = require("./posts");
const userRouters = require("./users");
const commentRouter = require("./comments");

var db = require("../../models");

// Live Athlete Forum routes
router.use("/categories", categoryRoutes);
router.use("/posttags", tagRoutes);
router.use("/posts", postRoutes);
router.use("/users", userRouters);
router.use("/comments", commentRouter);

router.route("/savepost").post(function(req, res) {
  console.log("We saved the post!", req.body);
  db.posts.create(req.body).then(confirmationFromDB => {
    console.log("We have confirmation", confirmationFromDB);
    res.json(confirmationFromDB);
  });
});

router.route("/forumfeed").get(function(req, res) {
  db.posts.findAll({}).then(allResults => {
    console.log("All the results", allResults);
    res.json(allResults);
  });
});

module.exports = router;
