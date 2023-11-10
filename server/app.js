const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use(express.static("pablic"))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
//app.listen(`server is starting ${PORT}`)
app.listen(PORT, () => console.log(`server is starting ${PORT}`))
