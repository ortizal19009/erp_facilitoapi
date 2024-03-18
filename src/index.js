const express = require("express");
const app = express();
/* middlewares */
/* datos que se ejecutan antes de usar a las rutas  */
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //se usa cuando se envia datos por medio de un formulario
/* definir rutas */
app.use(require("./routes/index"));
app.listen(3000);
console.log("app listen in port 3000");
