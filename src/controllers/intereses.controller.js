const { pool } = require("../settings/connection");

const getIntereses = async (req, res) => {
  const _intereses = await pool.query(
    "SELECT * FROM intereses ORDER BY idinteres"
  );
  res.send(_intereses.rows);
};

module.exports = { getIntereses };
