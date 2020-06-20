const router = require("express").Router();
const announcementRoutes = require("./announcements");
const calendarRoutes = require("./calendar");
const commentRoutes = require("./comment");
const usersRoutes = require("./users")

//API routes
router.use("/announcements", announcementRoutes);
router.use("/calendar",calendarRoutes);
router.use("/comment",commentRoutes);
router.use("/users", usersRoutes);

module.exports = router;
