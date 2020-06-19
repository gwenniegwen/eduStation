const router = require("express").Router();
const announcementRoutes = require("./announcements");
const calendarRoutes = require("./calendar");
const commentRoutes = require("./comment");

//API routes
router.use("/announcements", announcementRoutes);
router.use("/calendar",calendarRoutes);
router.use("/comment",commentRoutes);

module.exports = router;
