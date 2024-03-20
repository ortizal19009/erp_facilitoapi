const { pool } = require("../settings/connection");

const getIntereses = () => {
  return `SELECT * FROM intereses ORDER BY idinteres`;
};

module.exports = { getIntereses };
