const path = require("path");
const db = require("mongojs");

app.get("/", (req,res) => 
{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/exercise", (req,res) => 
{
    res.sendFile(path.join(__dirname, 'public', 'exercise.html'));
});

app.get("/stats", (req,res) => 
{
  res.sendFile(path.join(__dirname, 'public', 'stats.html'));
});