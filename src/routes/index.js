const { Router } = require("express");
const router = Router();
const { getUser } = require("../controllers/index.controller");
/* FACTURAS */
const { getSinCobro } = require("../controllers/facturas.controller");
/* INTERESES */
const { getIntereses } = require("../controllers/intereses.controller");
router.get("/user", getUser);
/* FACTRUAS */
router.get("/facturas/sincobro/:idcliente", getSinCobro);
/* INTERESES */
router.get("/intereses");
module.exports = router;
