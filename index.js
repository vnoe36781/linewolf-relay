const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.send("LineWolf Relay Active.");
});

app.post("/send", async (req, res) => {
  try {
    const payload = req.body;
    const response = await axios.post(DISCORD_WEBHOOK_URL, payload);
    res.status(200).send("Posted to Discord");
  } catch (err) {
    res.status(500).send("Failed to post to Discord");
  }
});

app.listen(PORT, () => {
  console.log(`Relay running on port ${PORT}`);
});
