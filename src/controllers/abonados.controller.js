const { pool } = require("../settings/connection");
const { getSinCobro } = require("../controllers/facturas.controller");

const getAbonados = async (req, res) => {
  const cuenta = req.params.cuenta;
  const q_abonado = `SELECT a.idabonado, a.idcliente_clientes, c.nombre, c.idcliente FROM abonados a JOIN clientes c ON a.idcliente_clientes = c.idcliente WHERE idabonado = $1 `;
  const _abonado = await pool.query(q_abonado, [cuenta]);
  const _idcliente = _abonado.rows[0].idcliente;
  //const q_factura = `SELECT * FROM facturas WHERE totaltarifa > 0 and idcliente=$1 and (( (estado = 1 or estado = 2) and fechacobro is null) or estado = 3 ) and fechaconvenio is null and fechaanulacion is null and fechaeliminacion is null ORDER BY idabonado, idfactura`;
  const q_factura = getSinCobro();
  const factura = await pool.query(q_factura, [_idcliente]);
  await pool.end();
  //getFacturas(_abonados.idcliente);
  //const sincobro = getSinCobro(_abonados.rows[0].idcliente);

  console.log(factura.rows);
  res.send(factura.rows);
};
const getAbonadoByCuenta = () => {
  return `SELECT a.idabonado, a.idcliente_clientes, c.nombre, c.idcliente FROM abonados a JOIN clientes c ON a.idcliente_clientes = c.idcliente WHERE idabonado = $1 `;
};

module.exports = { getAbonados, getAbonadoByCuenta };
