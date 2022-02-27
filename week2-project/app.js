const express = require("express");
const { usersRoute, postsRoute } = require("./src/routers");
const app = express();

app.use(express.json());

app.use("/users", usersRoute.router); // Routers klasöründeki index dosyasına gider sonra Users dosyasına gider
app.use("/posts", postsRoute.router); // Routers klasöründeki index dosyasına gider sonra Posts dosyasına gider

const port = 3000;

app.listen(port, () => {
  console.log(`${port} calisti`);
});
