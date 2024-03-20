const { pool } = require("../settings/connection");
const { getIntereses } = require("./intereses.controller");
const getFacturasSC = async (idcliente) => {
  try {
    const _sincobro = await pool.query(
      `SELECT * FROM facturas WHERE totaltarifa > 0 and idcliente=$1 and (( (estado = 1 or estado = 2) and fechacobro is null) or estado = 3 ) and fechaconvenio is null and fechaanulacion is null and fechaeliminacion is null ORDER BY idabonado, idfactura`,
      [idcliente]
    );
    console.log(_sincobro.rows);
    const n_data = _sincobro.rows.map((item) => {
      if (item.idmodulo === "3") {
        item.totaltarifa += 1;
      }
      if (item.idmodulo === "8") {
        item.totaltarifa = item.valorbase;
      }

      return item;
    });
    return _sincobro;
  } catch (error) {
    console.error(error);
  }

  // return _sincobro;
};
module.exports = {
  getFacturasSC,
};
