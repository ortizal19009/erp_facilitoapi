const { Router } = require("express");
const router = Router();
const { sinCobro } = require("../controllers/index.controller");
router.get("/api/:opt/:dato", sinCobro);
module.exports = router;
