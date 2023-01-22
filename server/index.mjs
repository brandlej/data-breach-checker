import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3001;
const HIBP_URL = "https://haveibeenpwned.com/api/v3";
const HIBP_PASTES_URL = (email) => `${HIBP_URL}/pasteaccount/${email}`;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const formatEmail = (email) => encodeURIComponent(email.trim());

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

const getPastes = async (email) => {
  const formattedEmail = formatEmail(email);
  const res = await fetch(HIBP_PASTES_URL(formattedEmail), {
    method: "GET",
    headers: {
      "hibp-api-key": process.env.HIBP_API_KEY,
    },
  });
  const data = await res.json();
  return data;
};

app.get("/breaches", (req, res) => {
  getPastes(req.query.email).then((data) => res.send(data));
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
