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
  },
  //Calendar calls
  getCalendars: function() {
    return axios.get("/api/calendar");
  },
  getCalendar: function(id) {
    return axios.get("/api/calendar/" + id);
  },
  deleteCalendar: function(id) {
    return axios.delete("/api/calendar/" + id);
  },
  saveCalendar: function(calendarData) {
    return axios.post("/api/calendar", calendarData);
  }
};
