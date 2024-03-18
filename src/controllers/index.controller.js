const { pool } = require("../settings/connection");

const getUser = async (req, res) => {
  const users = await pool.query(
    "SELECT idusuario, nomusu FROM usuarios ORDER BY idusuario"
  );
  console.log(users.rows);
  res.send(users.rows);
};
module.exports = {
  getUser,
};
