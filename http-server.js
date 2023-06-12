const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.static(__dirname + '/public'))

app.use("/create", (req, res) => {
  const { file, text } = req.query
  fs.writeFileSync(file, text)
  res.send(console.log("Arquivo CRIADO com sucesso!")) 
})

app.use("/read", (req, res) => {
  const { file } = req.query
  const text = fs.readFileSync(file)
  res.send(text.toString())
})

app.use("/update", (req, res) => {
  const { file, text } = req.query
  fs.appendFileSync(file, text)
  res.send(console.log("Arquivo ATUALIZADO com sucesso!"))
})

app.use("/delete", (req, res) => {
  const { file } = req.query
  fs.rmSync(file) 
  res.send(console.log("Arquivo EXCLUÍDO com sucesso!"))
})

app.listen(3000, () => console.log("server running!"))