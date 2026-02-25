const express = require("express");
const fetch = require("node-fetch");

const app = express();

const TOKEN = "YOUR_BOT_TOKEN";

app.get("/video", async (req, res) => {
  const fileId = req.query.id;

  const response = await fetch(
    `https://api.telegram.org/bot${TOKEN}/getFile?file_id=${fileId}`
  );

  const data = await response.json();
  const filePath = data.result.file_path;

  const finalUrl =
    `https://api.telegram.org/file/bot${TOKEN}/${filePath}`;

  res.redirect(finalUrl);
});

app.listen(3000, () => {
  console.log("Server running");
});
