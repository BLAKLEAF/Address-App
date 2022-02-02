import express from "express";
import cors from "cors";
import ContactRoute from "./Routes/contact.route";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/contacts", ContactRoute);

app.use((req, res) => {
  res.status(404).send({
    error: "Not Found",
  });
});

app.listen(3001);
