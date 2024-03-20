const { pool } = require("../settings/connection");
const { getIntereses } = require("../controllers/intereses.controller");
const { getAbonadoByCuenta } = require("../controllers/abonados.controller");
const { getFacturasSC } = require("../controllers/facturas.controller");
const sinCobro = async (req, res) => {
  const opt = req.params.opt;
  const dato = req.params.dato;
  const q_intereses = await pool.query(getIntereses());
  const intereses = q_intereses.rows;
  switch (opt) {
    case "0":
      console.log("CONSULTAR POR CLIENTE", dato);
      /* 
      1.- ingresar numero de cedula o nombre
      2.- buscar todas las cuentas con ese id de cliente
      */
      break;
    case "1":
      console.log("CONSULTAR POR ABONADO", dato);

      const q_abonado = await pool.query(getAbonadoByCuenta(), [dato]);
      if (q_abonado.rows.length > 0) {
        console.log(q_abonado.rows);
        const q_facturas = await getFacturasSC(q_abonado.rows[0].idcliente_clientes);
        res.send(q_facturas.rows);
      } else {
        res.json({ warning: `NO existen datos con ese dato: ${dato}` });
      }
      break;
    default:
      console.log("SINDATO A CONSULTAR", dato);
      break;
  }
  await pool.end();
};

module.exports = {
  sinCobro,
};
