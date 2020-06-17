import axios from "axios";

export default {
  // Gets all announcements
  getAnnouncements: function() {
    return axios.get("/api/announcements");
  },
  // Gets the announcement with the given id
  getAnnouncement: function(id) {
    return axios.get("/api/announcements/" + id);
  },
  // Deletes the announcement with the given id
  deleteAnnouncement: function(id) {
    return axios.delete("/api/announcements/" + id);
  },
  // Saves a announcement to the database
  saveAnnouncement: function(announcementData) {
    return axios.post("/api/announcements", announcementData);
  }
};
