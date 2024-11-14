import express from 'express';
import * as bodyParser from "body-parser";
import userRouters from "../src/routes/route";

const app = express();
const port = 5000

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRouters);

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).json({
    ok: true,
    msg: 'Welcome to the Nodejs CRUD Operation using Typescript Language.'
  });
});

app.listen(port, () => { 
  console.log(`Server running on http://localhost:${port}`)
});