const router = require("express").Router();
const announcementRoutes = require("./announcements");

//Announcement routes
router.use("/announcements", announcementRoutes);

module.exports = router;
