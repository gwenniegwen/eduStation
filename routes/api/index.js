const router = require("express").Router();
const announcementRoutes = require("./announcements");
const calendarRoutes = require("./calendar");

//API routes
router.use("/announcements", announcementRoutes);
router.use("/calendar",calendarRoutes);

module.exports = router;
