const express = require("express")
const path = require("path")
const planetsRouter = require("./routes/planets/planets.router")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

app.use(
  cors({
    origin: "http://localhost:3001",
  })
)
app.use(morgan("combined"))

app.use(express.json())
app.use(express.static(path.join(__dirname, "..", "public")))
app.use(planetsRouter)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"))
})

module.exports = app