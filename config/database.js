if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI:
      "mongodb+srv://hameedDamee:hameedDamee@cluster0-ttinl.mongodb.net/bizjot?retryWrites=true&w=majority"
  };
} else {
  module.exports = { mongoURI: "mongodb://localhost/bizjot-dev" };
}
