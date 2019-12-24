const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API running"));

// 'process.env.PORT' defines the port number when on a server like heroku for example
//defines the port as 5000 when there's no environment port variable sent (usually when run locally)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
