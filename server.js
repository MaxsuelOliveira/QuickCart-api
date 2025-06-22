const express = require("express");
const cestaRoutes = require("./routes/cesta.routes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API da Cesta está funcionando!",
    version: "1.0.0",
  });
});

app.use("/cesta", cestaRoutes);

const PORT = 3020 || 3021;

app.listen(PORT, () => {
  console.log(`ONLINE -> http://localhost:${PORT}`);
});
