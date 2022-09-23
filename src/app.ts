import 'dotenv/config';
import express from "express";
import cors from "express";
import { router } from "./infrastructure/routes";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



const port = process.env.PORT || 3000;

app.use(router);


app.listen(port, () => {
  console.log(`Serven on port ${port}`);
});


