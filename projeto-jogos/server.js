const app = require('./scr/app')

const PORT = 8080

app.listen(PORT, function (request, response) {
    console.log("O nosso app esta rodando na porta " + PORT);
})