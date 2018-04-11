const router = require("express").Router();
const categoryRoutes = require("./categories");
const topicsRoutes = require("./topics");
const postsRoutes = require("./posts");

var db = require("../../models");

// Live Athlete Forum routes
router.use("/categories", categoryRoutes);
router.use("/topics", topicsRoutes);
router.use("/posts", postsRoutes);

module.exports = router;
