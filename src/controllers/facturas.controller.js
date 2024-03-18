const { pool } = require("../settings/connection");

const getSinCobro = async (req, res) => {
  const idcliente = req.params.idcliente;
  const _sincobro = await pool.query(
    "SELECT idfactura, idmodulo, idcliente, totaltarifa, valorbase FROM facturas WHERE totaltarifa > 0 and idcliente=$1 and (( (estado = 1 or estado = 2) and fechacobro is null) or estado = 3 ) and fechaconvenio is null and fechaanulacion is null and fechaeliminacion is null ORDER BY idabonado, idfactura",
    [idcliente]
  );
  const n_data = _sincobro.rows.map((item) => {
    if (item.idmodulo === "3") {
      item.totaltarifa += 1;
    }
    if (item.idmodulo === "8") {
      item.totaltarifa = item.valorbase;
    }

    return item;
  });
  res.send(n_data);
};
module.exports = {
  getSinCobro,
};
