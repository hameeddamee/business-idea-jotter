if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI:
      "mongodb://hameedDamee:hameedDamee@cluster0-ttinl.mongodb.net/BizJot?retryWrites=true&w=majority"
  };
} else {
  module.exports = { mongoURI: "mongodb://localhost/bizjot-dev" };
}
