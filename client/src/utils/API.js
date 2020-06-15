import axios from "axios";

export default {
  // Gets all annoucements
  getAnnoucements: function() {
    return axios.get("/api/annoucement");
  },
  // Gets the annoucement with the given id
  getAnnoucement: function(id) {
    return axios.get("/api/annoucement/" + id);
  },
  // Deletes the annoucement with the given id
  deleteAnnoucement: function(id) {
    return axios.delete("/api/annoucement/" + id);
  },
  // Saves a annoucement to the database
  saveAnnoucement: function(annoucementData) {
    return axios.post("/api/annoucement", annoucementData);
  }
};
