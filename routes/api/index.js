const router = require("express").Router();
const opensecretsRoutes = require("./opensecrets");


router.use("/opensecrets", opensecretsRoutes);
router.use("/propublica", propublicaRoutes);
router.use("/maplight", maplightRoutes);

module.exports = router;