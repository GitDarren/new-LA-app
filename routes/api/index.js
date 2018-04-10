const router = require("express").Router();
const categoryRoutes = require("./categories");

// NYT routes
router.use("/categories", categoryRoutes);

module.exports = router;
