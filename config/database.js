if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI:
      "mongodb://hameedDamee:hameedDamee@cluster0-ttinl.mongodb.net/bizjot"
  };
} else {
  module.exports = { mongoURI: "mongodb://localhost/bizjot-dev" };
}
