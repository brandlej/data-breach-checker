import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3001;
const HIBP_URL = "https://haveibeenpwned.com/api/v3";
const HIBP_PASTES_URL = (email) => `${HIBP_URL}/pasteaccount/${email}`;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPastes = async (req, res, next) => {
  try {
    const response = await fetch(HIBP_PASTES_URL(req.query.email), {
      method: "GET",
      headers: {
        "hibp-api-key": process.env.HIBP_API_KEY,
      },
    });

    if (response.status === 404) {
      return res.json([]);
    }

    if (response.status !== 200) {
      return res
        .status(response.status)
        .json({ error: "Could not process request" });
    }

    const data = await response.json();
    return res.send(data);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
};

app.get("/breaches", getPastes);

app.use(express.static(path.resolve(__dirname, "client/build")));

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
