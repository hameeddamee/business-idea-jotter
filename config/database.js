if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: "REPLACE WITH PRODUCTION MONGODB CONNECTION STRINGS"
  };
} else {
  module.exports = { mongoURI: "mongodb://localhost/bizjot-dev" };
}
