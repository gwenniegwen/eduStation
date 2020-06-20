const router = require("express").Router();
const announcementRoutes = require("./announcements");
const calendarRoutes = require("./calendar");
const commentRoutes = require("./comment");
const performanceRoutes = require("./performance");

//API routes
router.use("/announcements", announcementRoutes);
router.use("/calendar",calendarRoutes);
router.use("/comment",commentRoutes);
router.use("/performance",performanceRoutes);

module.exports = router;
